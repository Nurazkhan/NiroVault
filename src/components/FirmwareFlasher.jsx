import { useState, useEffect, useRef } from 'react';
import { Cpu, Usb, Upload, Check, X, AlertCircle, RefreshCw } from 'lucide-react';
import './styles/FirmwareFlasher.css';

// WebSerial API types and helpers
const BAUD_RATE = 115200;

function FirmwareFlasher({ resources }) {
    const [port, setPort] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [isFlashing, setIsFlashing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('disconnected');
    const [selectedFile, setSelectedFile] = useState(null);
    const [log, setLog] = useState([]);
    const logRef = useRef(null);

    const binFiles = resources.filter(r => r.type === 'bin');

    const addLog = (message, type = 'info') => {
        const timestamp = new Date().toLocaleTimeString();
        setLog(prev => [...prev, { message, type, timestamp }]);
    };

    // Auto-scroll log
    useEffect(() => {
        if (logRef.current) {
            logRef.current.scrollTop = logRef.current.scrollHeight;
        }
    }, [log]);

    const isWebSerialSupported = () => {
        return 'serial' in navigator;
    };

    const connectPort = async () => {
        if (!isWebSerialSupported()) {
            addLog('WebSerial not supported. Use Chrome or Edge.', 'error');
            return;
        }

        try {
            setStatus('connecting');
            addLog('Requesting serial port...');

            const selectedPort = await navigator.serial.requestPort();
            await selectedPort.open({ baudRate: BAUD_RATE });

            setPort(selectedPort);
            setIsConnected(true);
            setStatus('connected');
            addLog('Connected successfully!', 'success');

            // Get port info
            const info = selectedPort.getInfo();
            if (info.usbVendorId) {
                addLog(`Device: VID ${info.usbVendorId.toString(16).toUpperCase()} PID ${info.usbProductId?.toString(16).toUpperCase()}`);
            }
        } catch (error) {
            setStatus('error');
            addLog(`Connection failed: ${error.message}`, 'error');
        }
    };

    const disconnectPort = async () => {
        if (port) {
            try {
                await port.close();
                setPort(null);
                setIsConnected(false);
                setStatus('disconnected');
                addLog('Disconnected', 'info');
            } catch (error) {
                addLog(`Disconnect error: ${error.message}`, 'error');
            }
        }
    };

    const flashFirmware = async () => {
        if (!port || !selectedFile) {
            addLog('No port or file selected', 'error');
            return;
        }

        try {
            setIsFlashing(true);
            setProgress(0);
            setStatus('flashing');
            addLog(`Starting flash: ${selectedFile.name}`);

            // Read the binary file
            const fileData = await selectedFile.data.arrayBuffer();
            const data = new Uint8Array(fileData);
            const totalBytes = data.length;

            addLog(`File size: ${totalBytes} bytes`);

            // Get writer
            const writer = port.writable.getWriter();

            // Send data in chunks
            const CHUNK_SIZE = 1024;
            let bytesSent = 0;

            for (let i = 0; i < totalBytes; i += CHUNK_SIZE) {
                const chunk = data.slice(i, Math.min(i + CHUNK_SIZE, totalBytes));
                await writer.write(chunk);
                bytesSent += chunk.length;

                const percent = Math.round((bytesSent / totalBytes) * 100);
                setProgress(percent);

                if (percent % 25 === 0 && percent > 0) {
                    addLog(`Progress: ${percent}%`);
                }

                // Small delay to prevent overwhelming the serial buffer
                await new Promise(resolve => setTimeout(resolve, 10));
            }

            writer.releaseLock();

            setProgress(100);
            setStatus('success');
            addLog('Flash completed successfully!', 'success');

        } catch (error) {
            setStatus('error');
            addLog(`Flash failed: ${error.message}`, 'error');
        } finally {
            setIsFlashing(false);
        }
    };

    const resetDevice = async () => {
        if (!port) return;

        try {
            addLog('Resetting device...');
            await port.setSignals({ dataTerminalReady: false, requestToSend: true });
            await new Promise(resolve => setTimeout(resolve, 100));
            await port.setSignals({ dataTerminalReady: true, requestToSend: false });
            addLog('Device reset complete', 'success');
        } catch (error) {
            addLog(`Reset failed: ${error.message}`, 'error');
        }
    };

    if (!isWebSerialSupported()) {
        return (
            <div className="flasher-unsupported">
                <AlertCircle size={48} />
                <h3>WebSerial Not Supported</h3>
                <p>
                    Your browser doesn't support WebSerial API.
                    <br />
                    Please use <strong>Google Chrome</strong> or <strong>Microsoft Edge</strong>.
                </p>
            </div>
        );
    }

    return (
        <div className="firmware-flasher">
            <div className="flasher-main">
                {/* Connection Panel */}
                <div className="flasher-panel">
                    <h3>
                        <Usb size={18} />
                        USB Connection
                    </h3>

                    <div className="connection-status">
                        <span className={`status-indicator ${status}`} />
                        <span className="status-text">
                            {status === 'disconnected' && 'Not connected'}
                            {status === 'connecting' && 'Connecting...'}
                            {status === 'connected' && 'Connected'}
                            {status === 'flashing' && 'Flashing...'}
                            {status === 'success' && 'Success!'}
                            {status === 'error' && 'Error'}
                        </span>
                    </div>

                    <div className="connection-actions">
                        {!isConnected ? (
                            <button
                                className="btn btn-primary"
                                onClick={connectPort}
                                disabled={status === 'connecting'}
                            >
                                <Usb size={16} />
                                Connect Device
                            </button>
                        ) : (
                            <>
                                <button className="btn btn-secondary" onClick={resetDevice}>
                                    <RefreshCw size={16} />
                                    Reset
                                </button>
                                <button className="btn btn-ghost" onClick={disconnectPort}>
                                    <X size={16} />
                                    Disconnect
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* File Selection */}
                <div className="flasher-panel">
                    <h3>
                        <Cpu size={18} />
                        Firmware File
                    </h3>

                    {binFiles.length > 0 ? (
                        <div className="file-select">
                            <select
                                className="input"
                                value={selectedFile?.id || ''}
                                onChange={(e) => {
                                    const file = binFiles.find(f => f.id === Number(e.target.value));
                                    setSelectedFile(file);
                                }}
                            >
                                <option value="">Select a .bin file</option>
                                {binFiles.map(file => (
                                    <option key={file.id} value={file.id}>
                                        {file.name} ({(file.data?.size / 1024).toFixed(1)} KB)
                                    </option>
                                ))}
                            </select>
                        </div>
                    ) : (
                        <p className="text-muted">
                            No .bin files in this version. Add firmware files in the Code tab.
                        </p>
                    )}
                </div>

                {/* Flash Button */}
                <div className="flasher-panel flasher-action">
                    <button
                        className="btn btn-primary btn-lg flash-button"
                        onClick={flashFirmware}
                        disabled={!isConnected || !selectedFile || isFlashing}
                    >
                        {isFlashing ? (
                            <>
                                <span className="loading-spinner" />
                                Flashing... {progress}%
                            </>
                        ) : (
                            <>
                                <Upload size={20} />
                                Flash Firmware
                            </>
                        )}
                    </button>

                    {isFlashing && (
                        <div className="progress-bar">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Log Panel */}
            <div className="flasher-log" ref={logRef}>
                <h4>Console Log</h4>
                <div className="log-content">
                    {log.map((entry, i) => (
                        <div key={i} className={`log-entry log-${entry.type}`}>
                            <span className="log-time">[{entry.timestamp}]</span>
                            <span className="log-message">{entry.message}</span>
                        </div>
                    ))}
                    {log.length === 0 && (
                        <div className="log-empty">Logs will appear here...</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FirmwareFlasher;

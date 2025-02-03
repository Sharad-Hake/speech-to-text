import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import styles from '../styles/SpeechToText.module.css';

const SpeechToText = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000
    });

    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

    const resetTranscription = () => {
        SpeechRecognition.stopListening(); // Stop listening
        resetTranscript(); // Reset transcript
    };

    if (!browserSupportsSpeechRecognition) {
        return <p>Browser does not support speech recognition.</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Speech to Text Converter</h2>
                <p className={styles.description}>
                    Just speak, and watch your words turn into text instantly—it's that simple!        </p>

                <div className={styles.mainContent} onClick={() => setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className={styles.btnStyle}>
                    <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                    <button onClick={resetTranscription}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default SpeechToText;
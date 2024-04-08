import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss";

const App = () => {
    const [dateTime, setDateTime] = useState("");
    const updateDateTime = () => {
        const value = new Date().toString();
        setDateTime(value);
    };
    useEffect(() => {
        const timeout = setTimeout(() => {
            updateDateTime();
        }, 1000);

        return () => { clearTimeout(timeout); }
    }, [dateTime]);

    return (
        <div className={styles.container}>
            <div className={styles.output}>{dateTime}</div>
        </div>
    )
}

export default App


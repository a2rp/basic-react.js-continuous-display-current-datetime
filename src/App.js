import { useEffect, useMemo, useState } from "react";
import "./index.css";

const getCurrentDateTime = () => new Date();

const App = () => {
    // Start with the current value so the interface never shows an empty timer.
    const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime);

    useEffect(() => {
        // Update once per second and clear the interval when the component unmounts.
        const timerId = window.setInterval(() => {
            setCurrentDateTime(getCurrentDateTime());
        }, 1000);

        return () => window.clearInterval(timerId);
    }, []);

    // Format values from the visitor's own browser locale and time zone.
    const { date, time, timeZone } = useMemo(
        () => ({
            date: new Intl.DateTimeFormat(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
            }).format(currentDateTime),
            time: new Intl.DateTimeFormat(undefined, {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }).format(currentDateTime),
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Local time",
        }),
        [currentDateTime],
    );

    return (
        <main className="app-shell">
            <section className="clock-card" aria-labelledby="clock-title">
                <p className="eyebrow">Live browser clock</p>
                <h1 id="clock-title">Current date and time</h1>
                <time className="clock-time" dateTime={currentDateTime.toISOString()}>
                    {time}
                </time>
                <p className="clock-date">{date}</p>
                <p className="clock-zone">Time zone: {timeZone}</p>
                <p className="clock-status" aria-live="polite">
                    Updates every second
                </p>
            </section>
        </main>
    );
};

export default App;

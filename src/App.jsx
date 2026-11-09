import { useEffect, useMemo, useState } from "react";
import {
    FiArrowDown,
    FiArrowRight,
    FiArrowUp,
    FiClock,
    FiGlobe,
    FiRefreshCw,
    FiZap,
} from "react-icons/fi";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";

const getCurrentDateTime = () => new Date();

const App = () => {
    const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const timerId = window.setInterval(() => {
            setCurrentDateTime(getCurrentDateTime());
        }, 1000);

        return () => window.clearInterval(timerId);
    }, []);

    useEffect(() => {
        let previousScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowBackToTop(currentScrollY > 320);
            setIsHeaderVisible(currentScrollY <= 0 || currentScrollY < previousScrollY);
            previousScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <div className="app-shell" id="top">
            <Header isVisible={isHeaderVisible} />

            <main className="page-content">
                <section className="hero-grid" aria-labelledby="clock-title">
                    <div className="hero-copy">
                        <p className="eyebrow">Your local time, always in view</p>
                        <h1 id="clock-title">
                            A clear view of <span>right now.</span>
                        </h1>
                        <p className="hero-description">
                            A lightweight browser clock that keeps the current date, time, and time zone easy to read at a glance.
                        </p>
                        <div className="hero-actions">
                            <a className="primary-button" href="#clock">
                                View live clock <FiArrowDown aria-hidden="true" />
                            </a>
                            <a className="secondary-button" href="#details">
                                Explore details <FiArrowRight aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <div className="clock-card" id="clock">
                        <div className="clock-card-heading">
                            <span className="icon-badge"><FiClock aria-hidden="true" /></span>
                            <div>
                                <p className="card-label">Live browser clock</p>
                                <p className="card-caption">Synced to this device</p>
                            </div>
                            <span className="live-indicator" aria-label="Clock is updating">
                                <span /> Live
                            </span>
                        </div>
                        <time className="clock-time" dateTime={currentDateTime.toISOString()}>
                            {time}
                        </time>
                        <p className="clock-date">{date}</p>
                        <p className="clock-zone">
                            <FiGlobe aria-hidden="true" />
                            {timeZone}
                        </p>
                        <p className="clock-status" aria-live="polite">
                            <FiRefreshCw aria-hidden="true" /> Updates every second
                        </p>
                    </div>
                </section>

                <section className="benefits-section" id="details" aria-labelledby="details-title">
                    <div className="section-heading">
                        <p className="eyebrow">Simple by design</p>
                        <h2 id="details-title">Useful time details without the noise.</h2>
                    </div>
                    <div className="benefit-grid">
                        <article className="benefit-card">
                            <span className="icon-badge"><FiZap aria-hidden="true" /></span>
                            <h3>Always current</h3>
                            <p>The display starts immediately and refreshes every second with a clean timer lifecycle.</p>
                        </article>
                        <article className="benefit-card">
                            <span className="icon-badge"><FiGlobe aria-hidden="true" /></span>
                            <h3>Local formatting</h3>
                            <p>Your browser decides the readable date, time, and time zone format for a familiar experience.</p>
                        </article>
                        <article className="benefit-card">
                            <span className="icon-badge"><FiRefreshCw aria-hidden="true" /></span>
                            <h3>Lightweight setup</h3>
                            <p>A focused React frontend with no API, database, account, or extra setup required.</p>
                        </article>
                    </div>
                </section>

                <section className="story-card" aria-labelledby="story-title">
                    <div className="story-image-wrap">
                        <img
                            src={import.meta.env.BASE_URL + "clock-architecture.jpg"}
                            alt="Architectural lines and blue sky representing a clear time display"
                            className="story-image"
                        />
                    </div>
                    <div className="story-copy">
                        <p className="eyebrow">Built for focus</p>
                        <h2 id="story-title">A small interface with a useful purpose.</h2>
                        <p>
                            This project is a simple foundation for exploring React state, effects, browser locale formatting, and accessible time semantics in one polished screen.
                        </p>
                        <a className="text-button" href="#top">
                            Back to the beginning <FiArrowUp aria-hidden="true" />
                        </a>
                    </div>
                </section>
            </main>

            <Footer />

            <button
                className={"back-to-top " + (showBackToTop ? "is-visible" : "")}
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                title="Back to top"
            >
                <FiArrowUp aria-hidden="true" />
            </button>
        </div>
    );
};

export default App;

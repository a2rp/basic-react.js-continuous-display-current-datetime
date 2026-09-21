import { useEffect, useState } from "react";
import { FiClock, FiGithub, FiMenu, FiX } from "react-icons/fi";

const navigationItems = [
    { label: "Clock", href: "#clock" },
    { label: "Details", href: "#details" },
    {
        label: "GitHub",
        href: "https://github.com/a2rp/basic-react.js-continuous-display-current-datetime",
        external: true,
    },
];

const Header = ({ isVisible }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === "Escape") setIsMenuOpen(false);
        };

        document.addEventListener("keydown", closeOnEscape);
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.removeEventListener("keydown", closeOnEscape);
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={"site-header " + (isVisible ? "" : "is-hidden")}>
            <div className="site-header-inner">
                <a className="brand" href="#top" onClick={closeMenu}>
                    <span className="brand-mark">
                        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Ashish Ranjan logo" />
                    </span>
                    <span>
                        <strong>Live Clock</strong>
                        <small>React date and time</small>
                    </span>
                </a>

                <nav className="desktop-nav" aria-label="Primary navigation">
                    {navigationItems.map((item) => (
                        <a
                            className="nav-link"
                            href={item.href}
                            key={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                        >
                            {item.external && <FiGithub aria-hidden="true" />}
                            {item.label}
                        </a>
                    ))}
                </nav>

                <button
                    className="menu-button"
                    type="button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                </button>

                {isMenuOpen && (
                    <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
                        <div className="mobile-nav-title"><FiClock aria-hidden="true" /> Navigation</div>
                        {navigationItems.map((item) => (
                            <a
                                className="nav-link"
                                href={item.href}
                                key={item.href}
                                onClick={closeMenu}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                            >
                                {item.external && <FiGithub aria-hidden="true" />}
                                {item.label}
                            </a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;

import {
    FaCodepen,
    FaEnvelope,
    FaFacebookF,
    FaGithub,
    FaGlobe,
    FaHeart,
    FaLinkedinIn,
    FaMugHot,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa6";

const footerLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedinIn },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebookF },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHeart },
    { label: "Buy Me A Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaMugHot },
    { label: "Patreon", href: "https://patreon.com/a2rp", icon: FaPatreon },
];

const Footer = () => (
    <footer className="site-footer">
        <div className="site-footer-inner">
            <div className="footer-copy">
                <span>Copyright &copy; {new Date().getFullYear()} </span>
                <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                    Ashish Ranjan
                </a>
            </div>
            <nav className="footer-links" aria-label="Footer links">
                {footerLinks.map(({ label, href, icon: Icon }) => {
                    const isEmail = href.startsWith("mailto:");
                    return (
                        <a
                            className="footer-icon-link"
                            href={href}
                            key={href}
                            target={isEmail ? undefined : "_blank"}
                            rel={isEmail ? undefined : "noopener noreferrer"}
                            aria-label={label}
                            title={label}
                        >
                            <Icon aria-hidden="true" />
                        </a>
                    );
                })}
            </nav>
        </div>
    </footer>
);

export default Footer;

import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-items">
          <a className="nav-logo">
            <a href="#hero" className="logo-text">
              Aniwatch
            </a>
          </a>
          <div className="nav-items-right">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

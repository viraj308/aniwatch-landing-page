import Button from "./Button";
import "./hero.css";

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading">Welcome to AniWatch</h1>
            <p className="hero-para">
              A free anime streaming service, with subbed and dubbed anime and
              resolution from standard to ultraHD
            </p>
            <Button children="Explore" buttonStyle="btn-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

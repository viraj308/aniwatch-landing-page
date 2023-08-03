import Button from "./Button";
import "./pricing.css";

export default function Pricing() {
  return (
    <div id="pricing" className="pricing">
      <div className="container">
        <div className="pricing-heading">FREE</div>
        <div className="pricing-para">
          No need of a card to register and sign-up, out content is totally free.
        </div>
        <Button buttonStyle="btn-secondary">Explore</Button>
      </div>
    </div>
  );
}

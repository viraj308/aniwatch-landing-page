import "./button.css";

const STYLES = ["btn--primary", "btn--secondary"];

export default function Button({ children, buttonStyle }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  return (
    <a
      href="https://aniwatch.to/"
      target="_blank"
      className={`button ${buttonStyle}`}
    >
      {children}
    </a>
  );
}

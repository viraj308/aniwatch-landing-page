import Hero from "./components/Hero";
import "./app.css";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Navbar />
    </>
  );
}

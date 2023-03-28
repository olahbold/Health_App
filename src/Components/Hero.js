import "../styles.css";
import Homepage from "../Components/Images/Homepage.jpg";
export default function Hero() {
  return (
    <div className="hero">
      <img src={Homepage} alt="" />
      <div className="hero-text">
        <h2> hello </h2>
      </div>
    </div>
  );
}

import "../styles.css";
import Doctor from "../Components/Images/Doctor.png";
export default function Hero() {
  return (
    <div className="hero">
      <img src={Doctor} alt="" />
      <div className="hero-text">
        <h1> The Health Hub </h1>
      </div>
    </div>
  );
}

import "../styles.css";
import Doctor from "../Components/Images/Doctor.png";
import  Button  from "react-bootstrap/Button";
export default function Hero() {
  return (
    <div className="hero">
      <img src={Doctor} alt="" />
      <div className="hero-text">
        <h1> The Health Hub </h1>
        <h6>Empowering You to Make Healthy Choices</h6>
         <Button > Create Account </Button>
      </div>
    </div>
  );
}

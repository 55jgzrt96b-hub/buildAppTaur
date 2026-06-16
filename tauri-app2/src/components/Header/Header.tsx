import logoImg from "../../assets/logo.png";
import { StatusDot } from "../icons/StatusDot";

export function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img className="brand-logo" src={logoImg} alt="Vantoro" />
      </div>
      <div className="beta-badge">
        <StatusDot />
        Private beta registration
      </div>
    </header>
  );
}

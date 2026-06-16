import logoImg from "../../assets/logo2.png";

export function BrandingSection() {
  return (
    <section className="branding">
      <div className="branding-content">
        <div className="branding-icon-wrap">
          <img className="branding-logo" src={logoImg} alt="" />
        </div>
        <p className="branding-tagline">Trade. Automate. Win.</p>
        <p className="branding-subtagline">The future belongs to algorithms.</p>
      </div>
    </section>
  );
}

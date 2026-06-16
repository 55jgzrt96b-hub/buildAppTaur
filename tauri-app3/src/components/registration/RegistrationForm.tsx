import { useState, type FormEvent } from "react";
import { installBuildFile } from "../../lib/installBuildFile";
import { EyeIcon } from "../icons/EyeIcon";
import { FieldIcon } from "../icons/FieldIcon";

export function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [isLoadingBuild, setIsLoadingBuild] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoadingBuild) return;

    setIsLoadingBuild(true);
    try {
      const installPath = await installBuildFile();
      console.info("Build file installed to:", installPath);
    } catch (error) {
      console.error("Failed to install build file:", error);
    } finally {
      setIsLoadingBuild(false);
    }
  };

  return (
    <section className="registration-card">
      <h2 className="registration-title">Sign up</h2>

      <form className="form" onSubmit={handleSubmit}>
        <label className="field">
          <span className="field-label">Email</span>
          <div className="field-input-wrap">
            <span className="field-icon">
              <FieldIcon type="email" />
            </span>
            <input type="email" placeholder="Enter your email" />
          </div>
        </label>

        <label className="field">
          <span className="field-label">Password</span>
          <div className="field-input-wrap">
            <span className="field-icon">
              <FieldIcon type="lock" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="field-toggle"
              onClick={() => setShowPassword((v) => !v)}
              aria-label="Show password"
            >
              <EyeIcon open={showPassword} />
            </button>
          </div>
        </label>

        <label className="field">
          <span className="field-label">Confirm password</span>
          <div className="field-input-wrap">
            <span className="field-icon">
              <FieldIcon type="lock" />
            </span>
            <input
              type={showRepeatPassword ? "text" : "password"}
              placeholder="Confirm your password"
            />
            <button
              type="button"
              className="field-toggle"
              onClick={() => setShowRepeatPassword((v) => !v)}
              aria-label="Show password"
            >
              <EyeIcon open={showRepeatPassword} />
            </button>
          </div>
        </label>

        <label className="field">
          <span className="field-label">
            Promo <span className="field-label-optional">(optional)</span>
          </span>
          <div className="field-input-wrap">
            <span className="field-icon">
              <FieldIcon type="tag" />
            </span>
            <input type="text" placeholder="Enter promo code" />
          </div>
        </label>

        <button type="submit" className="submit-btn" disabled={isLoadingBuild}>
          {isLoadingBuild ? "Loading..." : "Sign up"}
        </button>

        <p className="sign-in">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </form>
    </section>
  );
}

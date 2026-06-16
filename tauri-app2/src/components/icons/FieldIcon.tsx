import mainImg from "../../assets/main.png";
import passImg from "../../assets/pass.png";
import promiImg from "../../assets/promi.png";

type FieldIconProps = {
  type: "email" | "lock" | "tag";
};

const ICONS = {
  email: mainImg,
  lock: passImg,
  tag: promiImg,
} as const;

export function FieldIcon({ type }: FieldIconProps) {
  return <img className="field-icon-img" src={ICONS[type]} alt="" />;
}

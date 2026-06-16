import game1 from "../assets/game1.png";
import game2 from "../assets/game2.png";
import game3 from "../assets/game3.png";

export type IntelItem = {
  id: string;
  date: string;
  title: string;
  thumbnail: string;
};

export const INTEL_ITEMS: IntelItem[] = [
  {
    id: "1",
    date: "21.12",
    title: "Monthly update: Engine optimization",
    thumbnail: game1,
  },
  {
    id: "2",
    date: "17.12",
    title: "Monthly update: Client performance boost",
    thumbnail: game2,
  },
  {
    id: "3",
    date: "10.12",
    title: "Monthly update: Matchmaker tuning",
    thumbnail: game3,
  },
];

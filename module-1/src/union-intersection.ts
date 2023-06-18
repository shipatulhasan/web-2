type NoobLevel = {
  name: string;
};
type JrLevel = {
  name: string;
  expertise: string;
  experience: number;
};
type JuniorDev = NoobLevel & {
  expertise: string;
  experience: number;
};
type NextlebelDev = JuniorDev & {
  leaderShip: number;
  level: "jr" | "mid" | "sr";
};
const newDeveloper: NoobLevel | JuniorDev = {
  name: "Shakib",
  expertise: "js",
  experience: 2,
};
const nextLebel: NextlebelDev = {
  name: "Shakib",
  expertise: "js react ts",
  experience: 2,
  leaderShip: 2,
  level: "mid",
};

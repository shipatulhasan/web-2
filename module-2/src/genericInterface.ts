interface GenericMarrage<T> {
  name: string;
  husband: T;
}
const myMerrage: GenericMarrage<string> = {
  name: "Rechel",
  husband: "Ross",
};
interface GenericPerson1<T, U = null> {
  name: string;
  age?: number;
}
const firstPerson: GenericPerson1<string> = {
  name: "Manila",
};

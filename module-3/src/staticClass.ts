class Counter {
  static counter: number = 0;

  static increament() {
    return (Counter.counter = Counter.counter + 1);
  }
  static decreament() {
    return (Counter.counter = Counter.counter - 1);
  }
}
console.log(Counter.increament());
console.log(Counter.increament());

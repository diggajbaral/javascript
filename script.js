let a = 2;
let b = 4;
let c = { x: 3 };

let result =
  (a += b **= 2) +
  ((c.x += ++a) || (b -= a)) +
  ((a && b) ? (c.x -= b--) : (a = ++b));

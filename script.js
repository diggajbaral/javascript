function isAnagram(a, b) {

  if (a.length !== b.length) return false;

  let one = a.split("").sort().join("");
  let two = b.split("").sort().join("");

  console.log(one, two);

  return one === two;

}

console.log(isAnagram("listen", "silent"));
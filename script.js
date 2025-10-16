const a = null;
const b = 0;
const c = false;
const d = "0";
const e = [];
const f = {};

if (a || b && (c || d) && e.length === 0 && typeof f === "object") {
    console.log("Passed");
} else {
    console.log("Failed");
}
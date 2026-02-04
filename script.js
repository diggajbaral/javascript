const settings = {
    theme: "dark",
    notifications: true,
    language: "en"
};

let found = false;

for (key in settings) {

    if (key === "lang xxx uage") {
        found = true;
        break;
    }

}

console.log(found ? "Key Found" : "Key not Found");
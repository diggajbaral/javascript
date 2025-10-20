function removeDuplicates(str) {

    let result = "";

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (!result.includes(char)) {
            result += char;
        }

    }
    return result;
}

console.log(removeDuplicates('slim line'));
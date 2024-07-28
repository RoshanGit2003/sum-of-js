function sumUpTo(n) {
    return n * (n + 1) / 2;
}

function promptUser() {
    let number = parseInt(prompt("Enter a number between 0 and 1 million:"));

    if (isNaN(number) || number < 0 || number > 1000000) {
        alert("Invalid number");
    } else {
        let result = sumUpTo(number);
        alert(`Sum of numbers up to ${number} is ${result}`);
    }
}

promptUser()
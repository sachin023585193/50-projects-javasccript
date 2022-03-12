const display = document.getElementById("password");

const calle = {
    uppercase: generateuppercase,
    lowercase: generatelowercase,
    number: generatenumber,
    symbol: generatesymbol,
};

function copy() {
    if (display.innerText != "") {
        navigator.clipboard.writeText(display.innerText)
    }
}

function generatepassword() {
    let finalpassword = "";
    let length = document.getElementById("length").value;
    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let number = document.getElementById("number").checked;
    let symbol = document.getElementById("symbol").checked;

    let checked = [{ uppercase }, { lowercase }, { number }, { symbol }].filter(item => (Object.values(item)[0] === true));
    if (checked != "") {
        let checkedkeys = checked.map(item => Object.keys(item)[0])

        for (let i = 0; i < length; i++) {
            let tocall = Math.floor(Math.random() * checkedkeys.length);
            finalpassword += calle[checkedkeys[tocall]]();
        };
        display.innerText = finalpassword;
    };
};


function generateuppercase() {
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 65));
};

function generatelowercase() {
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 97));
};

function generatenumber() {
    return (String.fromCharCode(Math.floor(Math.random() * 10) + 48));
};

function generatesymbol() {
    const symbols = "!@#$%^&*()_+";
    return symbols[Math.floor(Math.random() * symbols.length)];
};
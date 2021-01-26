// Login form validation;
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var length = document.getElementById('length');
var symbol = document.getElementById('symbol');

//Message form validation;
document.getElementById('password').addEventListener('focus', function () {
    document.getElementById('message').style.display = "block";
});
document.getElementById('password').addEventListener('blur', function () {
    document.getElementById('message').style.display = "none";
});

// Password validation ;
var getPassword = document.getElementById('password');
getPassword.addEventListener('keyup', function () {
    //lowercase validation;
    if (getPassword.value.match(/[a-z]/g)) {
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    } else {
        letter.classList.add('invalid');
        letter.classList.remove('valid');
    }

    //uppercase validation;
    if (getPassword.value.match(/[A-Z]/g)) {
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    } else {
        capital.classList.add('invalid');
        capital.classList.remove('valid');
    }

    //Number validation;
    if (getPassword.value.match(/[0-9]/g)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
    } else {
        number.classList.add('invalid');
        number.classList.remove('valid');
    }

    //Length validation;
    if (getPassword.value.length >= 10) {
        length.classList.remove('invalid');
        length.classList.add('valid');
    } else {
        length.classList.add('invalid');
        length.classList.remove('valid');
    }
    //Symbol validation;
    if (getPassword.value.match(/[!@#$%^&*()_+{:;"'|\}]/)) {
        symbol.classList.remove('invalid');
        symbol.classList.add('valid');
    } else {
        symbol.classList.add('invalid');
        symbol.classList.remove('valid');
    }
});

//Login submit btn validation;

var submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function () {



    var getUsername = document.getElementById('username').value;
    var getPassword = document.getElementById('password').value;
    var lowercase = /[a-z]/;
    var uppercase = /[A-Z]/;
    var numbers = /[0-9]/;
    var symbols = /[!@#$%^&*()_+{:;"'\|}]/;

    if (getUsername == "" && getPassword == "") {
        document.getElementById('username').style.borderColor = "red";
        document.getElementById('password').style.borderColor = "red";
    } else if (getUsername == "") {
        document.getElementById('username').style.borderColor = "red";
        return false;
    } else if (!isNaN(getUsername)) {
        document.getElementById('errUser').innerHTML = "Username Only Letter Allow !";
        return false;
    } else if (getUsername.length < 3) {
        document.getElementById('errUser').innerHTML = "Please Write More Than 2 Charectars !";
        return false;
    } else {
        document.getElementById('errUser').innerHTML = "";
    } if (getPassword == "") {
        document.getElementById('password').style.borderColor = "red";
    } else if (getPassword.search(lowercase) == -1) {
        document.getElementById('errPassword').innerHTML = "Please Write Atleast One Lowercase Charectar !";
        return false;
    } else if (getPassword.search(uppercase) == -1) {
        document.getElementById('errPassword').innerHTML = "Please Write Atleast One Uppercase Charectar !";
        return false;
    } else if (getPassword.search(numbers) == -1) {
        document.getElementById('errPassword').innerHTML = "Please Write Atleast One Number !";
        return false;
    } else if (getPassword.length < 10) {
        document.getElementById('errPassword').innerHTML = "Please Write Minimum 10 Charectar !";
        return false;
    } else if (getPassword.search(symbols) == -1) {
        document.getElementById('errPassword').innerHTML = "Please Write Atleast One Symbol !";
        return false;
    } else {
        document.getElementById('login-area').style.display = "none";
        document.getElementById('transaction-area').style.display = "block";
    }

});

// Show Password;
function showPassword() {
    var showPwd = document.getElementById('password');
    if (showPwd.type === 'password') {
        showPwd.type = 'text';
    } else {
        showPwd.type = 'password';
    }
}

// Deposite Event Handler;
document.getElementById('submitDepo').addEventListener('click', function () {
    var depositeAmount = document.getElementById('depositeAmount').value;
    var depositeNumber = Number(depositeAmount);

    valueUpdate("currentDeposite", depositeNumber);
    valueUpdate("currentBalance", depositeNumber);

    depositeAmount = document.getElementById('depositeAmount').value = "";

});

// Withdraw Event Handler;
document.getElementById('submitWithdraw').addEventListener('click', function () {
    var widthdrawAmount = document.getElementById('wthdrawAmount').value;
    var withdrawNumber = Number(widthdrawAmount);

    valueUpdate("currentWithdraw", withdrawNumber);
    valueUpdate("currentBalance", -1 * withdrawNumber);

    document.getElementById('wthdrawAmount').value = "";

});


// Event Handler Using Function;
function valueUpdate(id, depositeNumber) {
    var currentBalance = document.getElementById(id).innerText;
    var currentBalanceNumber = parseFloat(currentBalance);
    var totalBalance = depositeNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}

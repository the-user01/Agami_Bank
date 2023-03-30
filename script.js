/* Login button event handler */

var loginArea = document.getElementById('login-area');
var emailField = document.getElementById('text-field');
var passField =  document.getElementById('pass-field');
var submitBtn =  document.getElementById('submit-btn');
var transactionArea = document.getElementById("transact-area");

// checking the function is empty or not

function isEmpty(inputValue, inputBtn){
    if(inputValue.value==="")
        {
            inputValue.style.border="1px solid red";
            inputValue.style.outline="1px solid red";
        }
        else{
            inputValue.style.border="1px solid lightblue";
            inputValue.style.outline="1px solid lightblue";
            inputBtn.focus();
        }
}

// for keyboard function, workings with the Enter button

function keyboardFields(fields, inputBtn)
{
    fields.addEventListener('keydown', function(event){
        if(event.keyCode===13 || event.which===13)
        {
             isEmpty(fields, inputBtn);
        }
    })
}

// for keyboard function to get the targeted value/button

function keyTarget(btnField){

    btnField.addEventListener('keydown', function(event){
        if(event.keyCode === 13 || event.which === 13)
        {
            event.target;
        }
    })
    
}

// working with the login fields

keyboardFields(emailField, passField); // Enter button event handler, this function is defined at the top


keyboardFields(passField, submitBtn);  // Enter button event handler, this function is defined at the top

submitBtn.addEventListener('click', function(){
    
    loginArea.style.display = 'none';
    transactionArea.style.display = 'block';
 
    document.body.style.backgroundColor = '#778899';

})

keyTarget(submitBtn); // targeting the submit button of login section, the function is defined at the top



/* Transaction Area button event handler */


var depositBtn = document.getElementById('deposit-btn');
var depositAmount = document.getElementById('deposit-amount');
var withdrawBtn = document.getElementById('withdraw-btn');
var withdrawAmount = document.getElementById('withdraw-amount');

var deposit = document.getElementById('depSpan');
var withdraw = document.getElementById('withSpan');
var balance = document.getElementById('balanceSpan');



// functions for deposit & withdrawal activities

function activity(inputField, showField){

    var  depAccNum = parseFloat(inputField.value);
    var depNum = parseFloat(showField.innerText);

    var totalDep = depAccNum + depNum;
    
    showField.innerText = totalDep;
    inputField.value = "";
}


/* Deposit button workings */

keyboardFields(depositAmount, depositBtn);  // Enter button event handler, this function is defined at the top

 depositBtn.addEventListener('click', function(){

    var depAcc = parseFloat(depositAmount.value);

    activity(depositAmount, deposit);

    var balanceNum = parseFloat(balance.innerText);

    var totalBalance = balanceNum + depAcc;

    balance.innerText = totalBalance;

})

keyTarget(depositBtn); // targeting the deposit button, the function is defined at the top


/* Withdrawal button workings */

keyboardFields(withdrawAmount, withdrawBtn);  // Enter button event handler, this function is defined at the top

withdrawBtn.addEventListener('click', function(){

    var withAcc = parseFloat(withdrawAmount.value);

    activity(withdrawAmount, withdraw);

    var balanceNum = parseFloat(balance.innerText);

    var totalBal = balanceNum - withAcc;

    balance.innerText = totalBal;

})

keyTarget(withdrawBtn); // targeting the withdraw button, the function is defined at the top
// Step 01 : Connect with html file 
//step 2: connect with button : (Click hobe jekhane Event Handler hobe sekhane)
document.getElementById('btn-deposit').addEventListener('click', function(){
        const depositInputField = document.getElementById('deposit-field'); 
        const newDepositAmount = parseFloat(depositInputField.value); 
  //step 6 : 

            depositInputField.value = ''; 
        // if(newDepositAmount !== 'number'){
        //     alert('Please input a number')
        //     return (this will not work at all)
        // }
        if(isNaN(newDepositAmount)){
            alert('please provide a Number')
            return
        }

    //    Step 3 
        const depositTotalAmount = document.getElementById('deposit-total'); 
        const previousAmount= parseFloat(depositTotalAmount.innerText);
    // step 4   
        const newDepositTotal= previousAmount + newDepositAmount; 

    //Step 5 : replace the innerText ; 

        depositTotalAmount.innerText = newDepositTotal; 


    //Updating Total Balance amount : 
    const previousBalanceAmountInput = document.getElementById('balance-total'); 
    const previousBalanceAmount = parseFloat(previousBalanceAmountInput.innerText); 

    //Updating current balance : 

    const newBalanceTotal = newDepositAmount + previousBalanceAmount; 
    previousBalanceAmountInput.innerText = newBalanceTotal; 




} )
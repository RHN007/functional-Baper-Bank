// step 1 

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInputField = document.getElementById('withdraw-field'); 
    const newWithdrawAmount = parseFloat(withdrawInputField.value); 

    //Empty input element : 
    withdrawInputField.value = ''; 

    if(isNaN (newWithdrawAmount) ){
        alert('Please give a valid number')
        return
    }

   
    //step 2 : 
    const previousWithdrawAmountString = document.getElementById('withdraw-total'); 
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString.innerText); 

   
    //step 3 : Updating Balance
    
    const balanceTotalString = document.getElementById('balance-total'); 
    const newBalanceTotal = parseFloat(balanceTotalString.innerText); 
   
    if(newWithdrawAmount > newBalanceTotal){
        alert('Insufficient Balance')
        return; 
    }
    const newWithdrawAmountTotal = newWithdrawAmount + previousWithdrawAmount; 
    previousWithdrawAmountString.innerText = newWithdrawAmountTotal; 

    const updateBalanceTotal = newWithdrawAmount + newBalanceTotal; 
    balanceTotalString.innerText= updateBalanceTotal; 




})
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTexElementValueById ('withdraw-total'); 
    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawTotal; 
    setTextElementValueById('withdraw-total', totalWithdrawAmount); 

    const totalBalanceAmount = getTexElementValueById('balance-total'); 
    const updatingBalanceTotal = totalBalanceAmount - newWithdrawAmount; 
    setTextElementValueById('balance-total', updatingBalanceTotal); 
    
})
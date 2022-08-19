document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTexElementValueById ('withdraw-total'); 
    

    /** Updating Balance Total */

    const totalBalanceAmount = getTexElementValueById('balance-total'); 
   
//    Error Handling 
    if(newWithdrawAmount > totalBalanceAmount){
        alert('Insufficient Balance')
        return; 
    }
    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawTotal; 
    setTextElementValueById('withdraw-total', totalWithdrawAmount); 

    const updatingBalanceTotal = totalBalanceAmount - newWithdrawAmount; 
    setTextElementValueById('balance-total', updatingBalanceTotal); 
    
})
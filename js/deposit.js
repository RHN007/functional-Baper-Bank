document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    /*** Get Previous deposit total by id : */
    const previousDepositTotal = getTexElementValueById('deposit-total')
    //calculate new deposit totAL : 
    const newDepositTotal = previousDepositTotal + newDepositAmount; 
    //Set Deposit total Value ; 
    setTextElementValueById('deposit-total', newDepositTotal); 

    //Get previous balance by using the function : 
    const previousBalanceTotal = getTexElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount; 
    setTextElementValueById('balance-total', newBalanceTotal); 
})
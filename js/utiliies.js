
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId); 
    const inputFieldString = inputField.value; 
    const inputValueAmount = parseFloat(inputFieldString);   
    inputField.value = ''; 
    return inputValueAmount; 
}

function getTexElementValueById(elementId){
    const textElement = document.getElementById(elementId); 
    const textElementValueString = textElement.innerText; 
    const textElementValue = parseFloat(textElementValueString); 
    return textElementValue; 
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId); 
    textElement.innerText = newValue; 
}
function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText = num ; 
}

function printOutput(num){
    document.getElementById("output-value").innerText = num ; 
}

function getOuput(){
    return document.getElementById("output-value").innerText; 
}
printOutput("99999"); 
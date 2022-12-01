function numbers(){
    let min = parseInt(prompt("Enter a min value: "));
    let max = parseInt(prompt("Enter a max value: "));
    let a = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("res").innerHTML = "Random value between " + min + " and " + max + " is " + a; 
}

function HideNumbers(){
    document.getElementById("res").innerHTML = " "; 
}
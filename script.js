function insert(num){
    let number = document.getElementById('result').
    textContent;
    document.getElementById('result').textContent = number + num;
}

function clean(){
    document.getElementById('result').innerHTML = "";
}
function cleanBack(){
    let result = document.getElementById('result').textContent;
    document.getElementById('result').textContent = result.substring(0, result.length - 1);
}
function calculate(){
    let result = document.getElementById('result').textContent;
    if(result){
        document.getElementById('result').textContent = eval(result);
    }else{
        document.getElementById('result').textContent = "";
    }
}
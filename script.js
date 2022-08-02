let data = document.getElementById('displayScreen');

function display(val) {
    data.innerHTML += val;
}

function square(){
    let sqr = data.textContent;
    data.innerHTML = Math.pow(parseInt(sqr), 2);
}

function toPower(power){
    data.innerHTML += power
}

function calculate() {
    var res = data.textContent;

    if (res.includes("^")){
        var i = res.indexOf("^") + 1;

        var temp = "";
        for (var j = 0; j < (i - 1); j++) {
            temp += res[j];
        }

        var temp2 = "";
        for (i; i < res.length; i++) {
            temp2 += res[i];
        }
        data.innerHTML = Math.pow(parseInt(temp), parseInt(temp2));
    }
    else{
        var result = Function("return " + res)();
        data.innerHTML = result;
    }
}

function clearScreen() {
    data.innerHTML = '';
}

function deleteChar() {
    let del = data.textContent;
    data.innerHTML = del.slice(0, -1);
}
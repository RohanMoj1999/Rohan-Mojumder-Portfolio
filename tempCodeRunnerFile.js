var res = "33^2";

    if (res.includes("^")){
        var i = res.indexOf("^") + 1;

        var temp = "";
        for (var j = 0; j < (i - 1); j++) {
            temp += res[j];
        }
        console.log(temp);

        var temp2 = "";
        for (i; i < res.length; i++) {
            temp2 += res[i];
        }
        console.log(temp2);
        console.log(Math.pow(parseInt(temp), parseInt(temp2)));
    }
    else{
        var result = Function("return " + res)();
        data.innerHTML = result;
    }
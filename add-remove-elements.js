function calc(params){
    let num = 1;

    let result = [];

    for (i = 0; i < params.length; i++){
        if (params[i] == "add"){
            result.push(num);
        }

        else if (params[i] == "remove"){
            result.pop();
        }

        num++;
    }

    let res = result.join("\n")

    if (res == ""){
        res = "Empty"
    }

    return res;
}

console.log(calc(['remove',
    'remove',
    'remove']



))
function magic(params){
    let sum = params[0].reduce((a, b) => a + b);

    let result = true;

    for (i = 1; i < params.length; i++){
        let sum1 = params[i].reduce((a, b) => a + b);

        if (sum1 != sum){
            result = false;
        }
    }

    for (j = 0; j < params[0].length; j++){
        let sum2 = 0;
        for (k = 0; k < params.length; k++){
            sum2 += params[k][j]
        }

        if (sum2 != sum){
            result = false;
        }
    }

    return result
}

console.log(magic([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]


))
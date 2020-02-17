function extract(params){
    let result = [];

    let curr = params[0];

    result.push(params[0]);

    for (i = 1; i < params.length; i++){
        if (params[i] >= curr){
            result.push(params[i]);
            curr = params[i]
        }
    }

    return result.join("\n")
}

console.log(extract([20,
    3,
    2,
    15,
    6,
    1]

))
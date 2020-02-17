function rotate(params){
    let count = Number(params.pop());

    let result = params;

    for (i = 0; i < count; i++){
        let num = result.pop();

        result.unshift(num);
    }

    return result.join(" ");
}

console.log(rotate(['1',
    '2',
    '3',
    '4',
    '2']
))
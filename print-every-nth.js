function print(params){
    let step = Number(params.pop());

    let result = [];

    for (i = 0; i < params.length; i+= step){
        result.push(params[i]);
    }

    return result.join("\n")
}

console.log(print(['dsa',
    'asd',
    'test',
    'tset',
    '2']


))
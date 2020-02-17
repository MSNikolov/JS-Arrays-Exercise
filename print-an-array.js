function print(params){
    let del = params[params.length-1];

    params.pop();

    return params.join(del);
}

console.log(print(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']
))
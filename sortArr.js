function sortArr(params){
    let result = params.sort();

    result.sort((a, b) => a.length-b.length)

    return result.join("\n");
}

console.log(sortArr(['test',
    'Deny',
    'omen',
    'Default']


))
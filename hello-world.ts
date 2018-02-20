var add= (a: number, b:number) => a+b;
console.log(add(22,32));



function add4numbers(a: number, b: number=0, c: number=0, d:number = 0){
    return a+b+c+d;
}


console.log(add4numbers(12))

function add_array_of_numbers(array_of_numbers: number[]){
    var sum: number=0;
    array_of_numbers.forEach(element => {
        sum+=element;
    });
    return sum;
}

console.log(add_array_of_numbers([1, 4, 7, 9]));
//2
function getDisc(n,y) {
    let disc = 1 - (y/n)
    let discount = disc * 10;
    return discount;
}

//3
function getMins(hr, min) {
    let timeInMins =( hr * 60) + min
    return timeInMins;
}

//6
function min(a,b) {
    return Math.min(a,b)
} 

//7
function minimum(a,b,c) {
    return Math.min(a,b,c)
}

//8 
function counter(n) {
    if(n>=10 && n < 100) {
        return n + " has exactly two digits";
    } else {
        return n + " is more or less than two digits"
    }
}

//8b
function tax(i,e) {
    let profitTax;
    if(e > i) {
        profitTax = 0
    }else if(i > e) {
        profitTax = (i - e) * 0.2
    }
    return profitTax;
}

//9
function getPower(n) {
    let power = 1;
    while(power <= n) {
        power *= 10
    }
    return power
}

//11
function sub(a,b) {
    return a - b
}

//12 
const intersection = (a, b) => {
    const s = new Set(b);
    return a.filter(x => s.has(x));
};

//13
var numbers = [4, 9, 16, 25];
var x = num.reduce((acc,val) => acc + val, 0);
console.log(x)

//19
var publication = "heavy";
var capitalise = publication[0].toUpperCase();
console.log(capitalise);

//20
var arr = ['start', 'A', 'B', 'C', 'end'];
function remove(array){
    let dest = array.pop()
    return array
}

console.log(remove(arr))
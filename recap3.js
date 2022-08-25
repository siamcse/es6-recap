const oneFifth = num => num/5;
console.log(oneFifth(13));

const multiply = (x,y) => (x+2)*(y+2);
console.log(multiply(4,5));

const multiplyThree = (x,y,z) => x*y*z;
console.log(multiplyThree(2,3,4));

const multiplyTwo = (x,y) => {
    let num1 = x+2;
    let num2 = y+2;
    const result = num1 * num2;
    return result;
};
console.log(multiplyTwo(4,5));
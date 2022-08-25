const student = {
    name: "Abu Siam",
    roll: 2526,
    age: 23
};
const {name,roll} = student;
console.log(name,roll);

const [a,b,...c] =  [4,5,3,5,76,34,23,6,87,32,45,23];
console.log(a);
console.log(b);
console.log(c);

const phones = [
    {name: 'Samsung', price: 50000, ram: '4gb'},
    {name: 'Xiaomi', price: 40000, ram: '6gb'},
    {name: 'iPhone', price: 130000, ram: '8gb'},
    {name: 'Oppo', price: 30000, ram: '3gb'},
    {name: 'Infinix', price: 10000, ram: '3gb'}
];
const [x,y,z] = phones;
console.log(x.price);
console.log(y.name);
console.log(z);
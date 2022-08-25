const phones = [
    {name: 'Samsung', price: 50000, ram: '4gb'},
    {name: 'Xiaomi', price: 40000, ram: '6gb'},
    {name: 'iPhone', price: 130000, ram: '8gb'},
    {name: 'Oppo', price: 30000, ram: '3gb'},
    {name: 'Infinix', price: 10000, ram: '3gb'}
];
const result = phones.find(phone => phone.price<=30000);
console.log(result);

const cheap = phones.filter(phone => phone.price<40000);
console.log(cheap);
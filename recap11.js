const employee = {
    name: "Al Amin",
    age: 24,
    address:{
        street: 'ghuramara-34',
        zipcode: 2500,
        city: 'kushtia',
        village:{
            name: 'kagmari',
            union: 'khagrachari',
            postoffice: 'veramara'
        }
    },
    likes: ['wife','flower','programmin','playing']
};
const result = employee.address?.village?.stret?.fdg;
console.log(result);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
} 

const userFloor = user.address?.stret?.second;
console.log(userFloor);
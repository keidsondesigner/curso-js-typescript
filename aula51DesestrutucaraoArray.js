const person = {
    name: 'Arthur',
    lastName: 'Siqueira',
    age: 4,
    address: {
        street: 'Av Brasil',
        number: '1552'
    }
}

const { name, lastName, age, address: { street, number } } = person
console.log(name, lastName, age, street, number)


const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
// console.log(output);
const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];

let result = friends.filter(friend => friend.length ==5);
// console.log(result);

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

// console.log(product.price);
const {price} = product;

console.log(price);
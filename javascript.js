const products = [
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Table", price: 200, category: "Furniture" },
    { name: "Chair", price: 100, category: "Furniture" },
    { name: "Headphones", price: 50, category: "Electronics" },
    { name: "Shoes", price: 70, category: "Clothing" },
    { name: "Jacket", price: 120, category: "Clothing" },
    { name: "Watch", price: 250, category: "Accessories" },
    { name: "Backpack", price: 90, category: "Accessories" },
    { name: "Sofa", price: 600, category: "Furniture" }
];
  //1. add new products
  products.push({name: "Desk", price: 150, category: "Furniture"});
console.log(products);

//2.Use find to get the details of Watch product

const watch = products.find(product => product.name === "Watch");
console.log(watch);
//3. to create a new array of product names only.
const productNames = products.map(product => product.name);

console.log(productNames);

//4. products that cost more than 100

const expensiveProducts = products.filter(product => product.price > 100);

console.log(expensiveProducts);

//5. display each product’s name
    

products.forEach(product => console.log(`Product: ${product.name}, Price: $${product.price}`));


//6.the total cost of all products in the array.

const Cost = products.reduce((cost, product) => cost + product.price, 0);
console.log(`total Cost is ${Cost}`);








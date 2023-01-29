// Kelvin degree constant
const kelvin = 0;
const celcius = kelvin - 273;

// Calculate Fahrenheit
let fahrenheit = celcius * (9 / 5) + 32;

// Convert Celcius to Fahrenheit
fahrenheit = Math.floor(fahrenheit);

// Resut
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// Newton equation
let newton = celcius * (33 / 100);
newton = Math.floor(newton);

// Result
console.log(`The temperature is ${newton} degrees Newton`);

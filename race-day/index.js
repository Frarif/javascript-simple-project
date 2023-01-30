// Assign random race number
let raceNumber = Math.floor(Math.random() * 1000);

// Indicates a runner registered early or not
const registeredEarly = false;

// Runner's age
const age = Math.floor(Math.random() * 50);
const runnerAge = age;

// If registered ahead provide number between 0-1000, if not provide number between 1001-2000
registeredEarly ? raceNumber : (raceNumber += 1000);

// Runners over 18 who registered early
if (age > 18 && registeredEarly !== false) {
  console.log(
    `You are ${age} years old. Your race starts at 9.30 and your race number is ${raceNumber}`
  );

  // Runners over 18 years old who registered late
} else if (age > 18 && registeredEarly == false) {
  console.log(
    `You are ${age} years old. Your race starts at 11.00 and your race number is ${raceNumber}`
  );
  // Youth runners
} else if (age < 18 && registeredEarly == false) {
  console.log(
    `You are ${age} years old. Your race starts at 12.30 and your race number is ${raceNumber}`
  );
} else {
  console.log(
    `Runners who are 18 years old and registered early should see the registration desk.`
  );
  console.log(
    `Runners who are 18 years old and did NOT register early should see the registration desk.`
  );
}

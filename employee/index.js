// Search Employee
const employeesData = [
  { nip: 01, name: "Muhammad Ucok", salary: 5000000 },
  { nip: 02, name: "Butet Sulastri", salary: 6000000 },
  { nip: 03, name: "Sri Juminten", salary: 7000000 },
  { nip: 04, name: "Anto Mulyono", salary: 6000000 },
  { nip: 05, name: "Tukiyem Winata", salary: 8000000 },
  { nip: 06, name: "Parjo Wijaya", salary: 9000000 },
  { nip: 07, name: "Sumiati Angel", salary: 5000000 },
  { nip: 08, name: "Tukat Pardi", salary: 7000000 },
  { nip: 09, name: "Muhammad Ikhsan", salary: 8000000 },
  { nip: 10, name: "Michael Yusuf", salary: 9000000 },
  { nip: 11, name: "Ikhsan Miraka", salary: 5000000 },
  { nip: 12, name: "Jokowi Udin", salary: 6000000 },
  { nip: 13, name: "Wati Minkem", salary: 10000000 },
  { nip: 14, name: "Erick Jaja", salary: 7000000 },
  { nip: 15, name: "Dedi Suhendra", salary: 10000000 },
];

function findHighestSalaries(employees) {
  const salaryCountItems = employees.map((employee) => {
    return employee.salary;
  });

  let highest = 0;
  let highestItems = [];

  salaryCountItems.forEach((salaryCount) => {
    if (salaryCount > highest) {
      highest = salaryCount;
    }
  });

  salaryCountItems.forEach((salaryCount, index) => {
    if (salaryCount >= highest) {
      highestItems.push(index);
    }
  });

  const highestSalaries = highestItems.map((employee, index) => {
    const salaryIndexToFind = highestItems[index];
    return employeesData[salaryIndexToFind];
  });

  return highestSalaries;
}

function displayHighestSalary(highestSalaryResult) {
  const highestSalaryArray = highestSalaryResult.map((highestSalary) => {
    return highestSalary.name;
  });

  const highestSalaryString = highestSalaryArray.join(` and `);

  console.log(
    `The employee with the highest salary are ${highestSalaryString}`
  );
}
const highestSalaryResult = findHighestSalaries(employeesData);

displayHighestSalary(highestSalaryResult);

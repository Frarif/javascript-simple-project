// Search Employee
const employeesData = [
  { id: 01, name: "Muhammad Ucok", salary: 5000000 },
  { id: 02, name: "Butet Sulastri", salary: 6000000 },
  { id: 03, name: "Sri Juminten", salary: 7000000 },
  { id: 04, name: "Anto Mulyono", salary: 6000000 },
  { id: 05, name: "Tukiyem Winata", salary: 8000000 },
  { id: 06, name: "Parjo Wijaya", salary: 9000000 },
  { id: 07, name: "Sumiati Angel", salary: 5000000 },
  { id: 08, name: "Tukat Pardi", salary: 7000000 },
  { id: 09, name: "Muhammad Ikhsan", salary: 8000000 },
];

function seacrhEmployees(employees, keyword) {
  const foundStudents = employees.filter((employee) => {
    return employee.name.toLowerCase().includes(keyword);
  });
  return foundStudents;
}

const foundEmployees = seacrhEmployees(employeesData, `a`);

// LOGIN
function runLogin() {
  const username = prompt("Username:");
  const password = prompt("Password:");
  if (username == "arif") {
    if (password == "250297") {
      alert("Selamat datang Mas Arif.");
      console.log("Found employee:", foundEmployees);
    } else if (password == "") {
      alert("Password belum diisi, silahkan isi.");
    } else {
      alert("Password salah, coba lagi!");
    }
  } else if (password == "250297") {
    if (username == "arif") {
      alert("Selamat datang Mas Arif.");
      console.log("Found employee:", foundEmployees);
    } else if (username == "") {
      alert("Username anda belum diiisi, silahkan isi.");
    } else {
      alert("Username anda salah, coba lagi!");
    }
  } else if (username == "" && password == "") {
    alert("Username dan password anda belum diisi, silahkan diisi.");
  } else if (username !== "arif" && password !== "250297") {
    alert("Username dan password anda salah, silahkan coba lagi");
  } else {
    alert("Username dan password anda belum diisi, silahkan diisi.");
  }
}

runLogin();

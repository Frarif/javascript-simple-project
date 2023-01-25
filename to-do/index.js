// To-Do

const myActivities = [
  "Sleep",
  "Breakfast",
  "Workout",
  "Go to work",
  "Lunch",
  "Home",
];

function addNewActivity() {
  const newActivity = prompt(`Add new activity:`);
  myActivities.push(newActivity);
  console.log(myActivities);
}

function runLogin() {
  const username = prompt("Username:");
  const password = prompt("Password:");

  // If there is an error
  if (!username || username === "") {
    alert("Usename belum diisi, silahkan isi.");
    return null;
  }
  if (!password || password === "") {
    alert("Password belum diisi, silahkan isi.");
    return null;
  }

  // If credentials are wrong
  if (username !== "arif" || password !== "250297") {
    alert("Username atau password salah, silahkan coba lagi");
    return null;
  }

  // If everything is fine
  if (username === "arif" && password === "250297") {
    alert("Selamat datang Mas Arif.");
    addNewActivity();
  }
}

runLogin();

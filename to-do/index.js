// To-Do
function dailyActivities() {
  const myactivities = [
    "Sleep",
    "Breakfast",
    "Workout",
    "Go to work",
    "Lunch",
    "Home",
  ];
  const addActivity = prompt(`Add new activity:`);
  myactivities.push(addActivity);
  console.log(myactivities);
}

// LOGIN
function runLogin() {
  const username = prompt("Username:");
  const password = prompt("Password:");
  if (username == "arif") {
    if (password == "250297") {
      alert("Selamat datang Mas Arif.");
      dailyActivities();
    } else if (password == "") {
      alert("Password belum diisi, silahkan isi.");
    } else {
      alert("Password salah, coba lagi!");
    }
  } else if (password == "250297") {
    if (username == "arif") {
      alert("Selamat datang Mas Arif.");
      dailyActivities();
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

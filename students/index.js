// Search Employee
const studentsDataItems = [
  {
    no: 01,
    name: "Muhammad Ucok",
    score: [80, 70, 60, 80, 90, 80, 70, 90, 70],
  },
  {
    no: 02,
    name: "Butet Sulastri",
    score: [70, 70, 80, 80, 70, 80, 90, 70, 80],
  },
  { no: 03, name: "Sri Juminten", score: [70, 90, 80, 70, 90, 90, 80, 90, 90] },
  { no: 04, name: "Anto Mulyono", score: [70, 80, 90, 90, 80, 80, 90, 80, 90] },
  {
    no: 05,
    name: "Tukiyem Winata",
    score: [80, 90, 80, 70, 80, 90, 70, 90, 80],
  },
  { no: 06, name: "Parjo Wijaya", score: [90, 90, 70, 80, 90, 80, 70, 80, 70] },
  {
    no: 07,
    name: "Sumiati Angel",
    score: [90, 70, 80, 90, 70, 60, 70, 90, 70],
  },
  { no: 08, name: "Tukat Pardi", score: [70, 80, 90, 70, 80, 90, 80, 60, 80] },
  {
    no: 09,
    name: "Muhammad Ikhsan",
    score: [90, 70, 90, 80, 70, 90, 80, 90, 80],
  },
  {
    no: 10,
    name: "Michael Yusuf",
    score: [80, 70, 60, 80, 90, 80, 70, 90, 70],
  },
  {
    no: 11,
    name: "Ikhsan Miraka",
    score: [80, 90, 80, 70, 70, 80, 90, 80, 90],
  },
  { no: 12, name: "Jokowi Udin", score: [80, 90, 80, 90, 80, 90, 80, 80, 80] },
  { no: 13, name: "Wati Minkem", score: [70, 80, 90, 80, 90, 70, 90, 70, 90] },
  { no: 14, name: "Erick Jaja", score: [70, 90, 90, 70, 70, 90, 70, 80, 90] },
  {
    no: 15,
    name: "Dedi Suhendra",
    score: [90, 80, 70, 90, 80, 90, 60, 80, 80],
  },
];

function findHighestScore(students) {
  const scoreCountItems = students.map((student) => {
    return student.score;
  });
}

findHighestScore(studentsDataItems);

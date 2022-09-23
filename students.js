const students = [
    "Alan",
    "Albert",
    "Jhon",
    "Brice",
    "Alexendra",
    "Brad",
    "Carl",
    "Dallas",
    "Dennis",
    "Edgar",
    "Erika",
    "Isaac",
    "Ian",
];

const levels = [4, 2, 3, 5, 7, 8, 2, 6, 4, 3, 5, 7, 5];

let st_ord = [];
for (let i = 0; i < students.length; i++)
    st_ord.push({ name: students[i], level: levels[i] });
st_ord.sort((a, b) => a.level - b.level);
console.log(st_ord);

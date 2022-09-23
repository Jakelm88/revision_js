const populations = [
    { id: 0, name: "Alan" },
    { id: 1, name: "Albert" },
    { id: 2, name: "Jhon" },
    { id: 3, name: "Brice" },
    { id: 4, name: "Alexendra" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" },
    { id: 7, name: "Dallas" },
    { id: 8, name: "Dennis" },
    { id: 9, name: "Edgar" },
    { id: 10, name: "Erika" },
    { id: 11, name: "Isaac" },
    { id: 12, name: "Ian" },
];

const relationships = [
    [0, 1],
    [0, 2],
    [1, 2],
    [1, 4],
    [2, 3],
    [2, 5],
    [3, 4],
    [3, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [5, 7],
    [5, 9],
    [6, 7],
    [6, 8],
    [7, 1],
    [7, 8],
    [8, 9],
    [10, 1],
    [10, 2],
    [10, 3],
    [11, 12],
    [11, 2],
    [11, 5],
];

/*
    Modifiez la liste populations pour ajouter les relations (liste relationships) de chaque user de cette population,
    vous pouvez par exemple ajoutez une clé "relation" ainsi qu'une liste vide dans un premier temps.
    Puis placez les relations de chaque user dans la liste populations en utilisant relationships.

    Calculer la moyenne des relations.

    Créez une liste représentant les users (id) et le nombre de relation(s) qu'ils possèdent. Et retournez l'utilisateur qui possède le plus de relation(s).

    Trouvez les amis des amis de chaque utilisateur.
*/

// Ajouts des relations de chacun
let pop = populations.map((v) => {
    return { ...v, relation: [] };
});
pop.map((v) => {
    for (const rel of relationships) {
        if (v.id === rel[0]) v.relation.push(rel[1]);
        else if (v.id === rel[1]) v.relation.push(rel[0]);
    }
    return v;
});
console.log(pop);

// Calcul et log de la moyenne du nombre de relations de chacun
let sum = 0;
pop.forEach((v) => {
    sum += v.relation.length;
});
console.log("Nombre moyen de relations :", sum / pop.length);

// Liste du nombre de relations de chacun [[id, n]]
const liste = [];
pop.forEach((v) => {
    liste.push([v.id, v.relation.length]);
});
console.log("Liste du nombre de relations de chacun :", liste);

// Recherche de celui avec le plus de relations
let max = [0, 0],
    n = 1;
//let maxi_co = liste.reduce((acc, cur) => (cur[1] > acc[1] ? cur : acc));
let maxi_co = liste.reduce((acc, cur) =>
    cur[1] >= acc[1] ? (cur[1] === acc[1] ? n++ : ((n = 1), cur)) : acc
);
console.log(
    `Il y a ${n} personnes ayant le plus de relations dont :`,
    populations.find((v) => v.id === maxi_co[0])
);

// Fonction utile
function findById(id) {
    for (const i of pop) {
        if (i.id === id) return i;
    }
}

// Amis des amis
function log_fof(id) {
    let tab = [];
    for (const i of findById(id).relation) {
        tab.push(...findById(i).relation);
    }
    let res = new Set(tab);
    for (const i of res) {
        let o = findById(i);
        if (o.id !== id) console.log(o.name);
    }
}
console.log("Amis d'amis de Brad (id: 5):");
log_fof(5);

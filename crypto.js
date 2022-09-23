const data = [1, 2, 5, 10, 5, 12, 55, 100, 48, 123, 54];

function max(tab) {
    if (tab && tab.length <= 0) throw "Arg must be int[]";
    let max = 0;
    for (const i of tab) {
        max = i > max ? i : max;
    }
    return max;
}

console.log(max(data));

/*
Créez un script de votre choix, qui crypte une phrase, sans utiliser de librairie. Et faites également un script qui dé-crypte la phrase cryptée.

Vous pouvez utiliser le cryptogramme de César ou bien en inventer un.
*/

let cdata = "Azerty mlkjh";

// 32 SPACE [a-z]97-122
// TODO : vérifier que cdata contient bien uniquement space et alphabet
function crypt(cdata) {
    let data = cdata.slice().toLowerCase();
    let res = "";
    for (let i = 0; i < data.length; i++) {
        if (data.charCodeAt(i) === 32) {
            res += " ";
        } else {
            //res += String.fromCharCode(((data.charCodeAt(i) - 92) % 26) + 97);
            let t = data.charCodeAt(i) + 5;
            res += String.fromCharCode(t > 122 ? t - 26 : t);
        }
    }
    return res;
}

function decrypt(cdata) {
    let data = cdata.slice().toLowerCase();
    let res = "";
    for (let i = 0; i < data.length; i++) {
        if (data.charCodeAt(i) === 32) {
            res += " ";
        } else{
            let t = data.charCodeAt(i) - 5;
            res += String.fromCharCode(t < 97 ? t + 26 : t);
        }
    }
    return res;
}

console.log((cdata = crypt(cdata)));
console.log(decrypt(cdata));

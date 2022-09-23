async function log(x) {
    let t = await x;
    console.log(t);
}

function next(n, nm1) {
    return new Promise((resolve, reject) => {
        resolve(n + nm1);
    });
}

async function fibo() {
    let tab = [];
    //let tab = [0, 1];
    let n = 1,
        nm1 = 0;
    for (let i = 0; i < 20; i++) {
        let res = await next(n, nm1);
        [n, nm1] = [res, n];
        tab.push(res);
    }
    return tab;
}

log(fibo());

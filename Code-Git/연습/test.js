const ar = [1, 2, 3, 4, 5, 6, 7, 8];
let n = 1;
const wrapper = document.querySelector('.wrapper');

ar.map((e, i) => {
    const child = document.createElement('span');
    child.textContent = e;
    if (i % 2 == 0) {
        const parent = document.createElement('div');
        parent.classList.add(`ts${n}`);
        parent.classList.add('ts');
        parent.appendChild(child);
        wrapper.appendChild(parent);
        n++;
    } else {
        const parent = document.querySelector(`.ts${n - 1}`);
        parent.appendChild(child);
    }
})

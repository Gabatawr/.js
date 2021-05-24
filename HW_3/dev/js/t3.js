//#region Task 3

let t3Counter = 0;
const t3Inner = (styles, text) => {
    let p = document.createElement('p');
    p.append(text);

    let css = '';
    for (let s of styles) {
        css += s.name + ':' + s.value + ';\n';
    }
    p.style.cssText = css;

    document.querySelector('.t3').append(p);
}

for(let l = 16, i = 1, c1 = 255, c2 = 0;
    i <= l;
    c1 = 255 - (255 / l * i), c2 = 255 / l * i, i++) {
    t3Inner([
            {name:'font-size', value:`${10 + i}px`},
            {name:'background', value: `rgb(${c2},${c2},${c1})`},
            {name:'color', value:`rgb(${c1},${c1},${c2})`}
        ], `text p${i}`
    );
}

//#endregion Task 3
const main = document.querySelector('.main');
const createElement = (targetElement, [elTag, elClass], cssText) => {
    let el = document.createElement(elTag);
    if (elClass !== undefined) el.classList.add(elClass);
    if (cssText !== undefined) el.style.cssText = cssText;

    targetElement.appendChild(el);
    return el;
};

//#region Task 1

class Marker {
    constructor(props) {
        this.element = props.element;

        this.fullness = props.fullness == undefined ? 100 : props.fullness;
        this._fullnessElement = createElement(
            this.element,
            ['div'],
            `font-size: 20px; color: #808080;`
        );
        this._fullnessRefresh();
        this.element.appendChild(this._fullnessElement);

        this._color = props.color == undefined ? '#000000' : props.color;

        this._spanElement;
        this._newSpan();
    }

    _fullnessRefresh() {
        this._fullnessElement.textContent = `Fullness: ${this.fullness}%`;
    }
    _fullnessVisually() {
        this._fullnessElement.style.display =
            this._fullnessElement.style.display == 'none' ? 'block' : 'none';
    }

    _newSpan() {
        if (
            this._spanElement == undefined ||
            this._spanElement.textContent !== ''
        ) {
            this._spanElement = createElement(
                this.element,
                ['span'],
                `display: inline-block; color: ${this._color};`
            );
            this.element.appendChild(this._spanElement);
        } else {
            this._spanElement.style.color = this._color;
        }
    }

    get color() {
        return this._color;
    }
    set color(newColor) {
        this._color = newColor;
        this._newSpan();
    }

    print(text) {
        for (let i = 0; this.fullness > 0 && i < text.length; i++) {
            this._spanElement.textContent += text[i];
            if (text[i] !== ' ') {
                this.fullness -= 0.5;
            }
        }
        this._fullnessRefresh();
    }
}

const t1 = createElement(
    main,
    ['section', 't1'],
    'font-size: 28px; text-align: center;'
);

let marker = new Marker({
    element: createElement(
        t1,
        ['div', 't1__box'],
        'padding: 24px 0; white-space: pre; background-color: #e8e8ff;'
    ),
});

const abc = 'abc def  ghi   jklmnopqrstuvwxyz';

for (let i = 0, r = 255, g = 127, b = 0; i < abc.length; i++) {
    if (i % 3 === 0) {
        marker.color = `rgb(${(r -= 25)},${(g -= 12)},${(b += 25)})`;
    }
    marker.print(abc[i]);
}

//#endregion Task 1

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

        this._color = props.color == undefined ? '#000000' : props.color;

        this._currentSpan;
        this._newSpan();
    }

    _newSpan() {
        if (
            this._currentSpan == undefined ||
            this._currentSpan.textContent !== ''
        ) {
            this._currentSpan = createElement(
                this.element,
                ['span'],
                `display: inline-block; color: ${this._color};`
            );
            this.element.appendChild(this._currentSpan);
        } else {
            this._currentSpan.style.color = this._color;
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
            this._currentSpan.textContent += text[i];
            if (text[i] !== ' ') {
                this.fullness -= 0.5;
            } else if (this._currentSpan.textContent.length === 1) {
                this._currentSpan.style.display = 'inline';
                this._currentSpan.style.color = '';
                this._newSpan();
            }
        }
    }
}

const t1 = createElement(
    main,
    ['section', 't1'],
    'padding: 12px; font-size: 32px; text-align: center;'
);

let marker = new Marker({
    element: createElement(t1, ['div', 't1__box'], 'white-space: pre;'),
});

const abc = 'abc def  ghi   jklmnopqrstuvwxyz';

for (let i = 0, r = 255, g = 127, b = 0; i < abc.length; i++) {
    if (i % 3 === 0) {
        marker.color = `rgb(${(r -= 25)},${(g -= 12)},${(b += 25)})`;
    }
    marker.print(abc[i]);
}

//#endregion Task 1

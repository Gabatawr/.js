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

//#region Task 3

class EmployeeList {
    constructor(props) {
        this.list = props.list;
        this.element = props.element;

        this._listElement;
        this._createList();
        this._createCode();
    }
    _createList() {
        this._listElement = createElement(
            this.element,
            ['ul', 't2__list'],
            'margin: 0; padding: 0; list-style: none; font-size: 20px;'
        );

        for (let y of this.list) {
            createElement(
                this._listElement,
                ['li', 't2__item'],
                'margin-left: 32px;'
            ).textContent = y;
        }
    }
    _createCode() {
        createElement(
            this.element,
            ['pre', 't2__code'],
            'font-family: consolas; overflow: auto; border-radius: 21px; background: #efebff; margin: 24px; padding: 24px; font-size: 16px;'
        ).textContent = this.getHTML()
            .replaceAll('<li', '\n\t<li')
            .replaceAll('</ul>', '\n</ul>\n');
    }
    getHTML() {
        return this.element.innerHTML;
    }
}

const t2 = createElement(main, ['section', 't2'], 'font-size: 22px;');

let employees = [
    'Harry Brooks',
    'Ross Rachel',
    'Bruce Edwards',
    'Cook Christopher',
    'Carolyn Perez',
    'Morgan Thomas',
    'Albert Baker',
    'Randy Sara',
    'Reed Moore',
    'Larry Chris',
];

let employeeList = new EmployeeList({
    list: employees,
    element: createElement(
        t2,
        ['div', 't2__box'],
        'margin-top: 18px; padding: 24px 0; white-space: pre; background-color: #e1e1ff;'
    ),
});

//#endregion Task 3

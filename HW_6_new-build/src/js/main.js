import { LoremIpsum } from 'lorem-ipsum';

// #region lorem-config

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 4,
    max: 8,
  },
  wordsPerSentence: {
    min: 4,
    max: 16,
  },
});

// #endregion lorem-config

/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
class News {
  constructor(props) {
    this.template = props.template;
    this.pref = 'news__';

    this.node = this._nodeDefault();

    this._title = undefined;
    this.title = props.title;

    this._date = Date.now();
    this.date = props.date;

    this._content = undefined;
    this.content = props.content;

    this._tagList = [];
    this.tagList = props.tags;
  }

  // #region node

  _nodeDefault() {
    return this.template.content
      .querySelector(`.${this.pref}item`)
      .cloneNode(true);
  }

  // #endregion node

  // #region elements

  _elRefresh(elName) {
    for (let i = 0; i < this.node.childNodes.length; i++) {
      if (
        this.node.childNodes[i].nodeName !== '#text'
        && this.node.childNodes[i].className === this.pref + elName
      ) {
        this.node.childNodes[i].textContent = this[elName];
        break;
      }
    }
  }

  // #region title

  get title() {
    return this._title;
  }

  set title(value) {
    if (value !== undefined) {
      this._title = value;
      this._elRefresh('title');
    }
  }

  // #endregion title

  // #region date

  get date() {
    let daysAgo = Math.floor(
      (new Date().getTime() - this._date.getTime()) / (1000 * 3600 * 24)
    );
    if (daysAgo < 8) {
      if (daysAgo == 0) return 'Today';
      return daysAgo + ' days ago';
    }

    let ret = [
      this._date.getDate(),
      this._date.getMonth() + 1,
      this._date.getYear() + 1900,
    ];
    for (let i = 0; i < 2; i++) {
      ret[i] = ret[i] > 9 ? ret[i] : '0' + `${ret[i]}`;
    }
    return ret.join('.');
  }

  set date(value) {
    if (value !== undefined) {
      this._date = new Date(value); // TODO: validate date
      this._elRefresh('date');
    }
  }

  // #endregion date

  // #region content

  get content() {
    return this._content;
  }
  set content(value) {
    if (value !== undefined) {
      this._content = value;
      this._elRefresh('content');
    }
  }

  // #endregion content

  // #region tagList

  _tagItemInit(ul, tag) {
    let li = document.createElement('li');
    li.classList.add(this.pref + 'tag-item');
    li.textContent = tag;

    ul.appendChild(li);
  }

  _tagListInit() {
    let ul = this.template.content
      .querySelector('.' + this.pref + 'tag-list')
      .cloneNode(true);

    ul.querySelector('.' + this.pref + 'tag-item').textContent =
      this._tagList[0];

    for (let i = 1; i < this._tagList.length; i++) {
      this._tagItemInit(ul, this._tagList[i]);
    }
    this.node.appendChild(ul);
  }

  get tagList() {
    return this._tagList;
  }
  set tagList(value) {
    if (value !== undefined) {
      this._tagList = value;
      if (this._tagList.length > 0) {
        this._tagListInit();
      }
    }
  }

  addTag(tag) {
    if (this._tagList.length == 0) {
      this.tagList = this._tagList.concat(tag);
    } else if (this._tagList.includes(tag) == false) {
      this._tagList.push(tag);
      this._tagItemInit(
        this.node.querySelector('.' + this.pref + 'tag-list'),
        tag
      );
    }
  }

  // #endregion tagList

  // #endregion elements
}

const dayDecrement = (date) => {
  let d = new Date(date);

  if (d.getDate() - 1 === 0) {
    if (d.getMonth() - 1 === 0) {
      d.setYear(d.getYear() - 1);
      d.setMonth(12);
      d.setDate(31);
    }
    else {
      d.setMonth(d.getMonth() - 1);
      d.setDate(new Date(d.getYear(), d.getMonth(), 0).getDate());
    }
  }
  else {
    d.setDate(d.getDate() - 1);
  }

  return new Date(d);
}

const newsBlock = document.querySelector('.news');
const newsTemplate = newsBlock.querySelector('.news__item-template');

let newsList = [
  new News({
    template: newsTemplate,
    title: 'What is Lorem Ipsum?',
    date: new Date().toDateString(),
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ['lorem', 'ipsum', 'text'],
  })
];

const NEWS_SIZE = Math.floor(Math.random() * 31);
for (let i = 0, date = new Date(); i < NEWS_SIZE; i++) {
  date = dayDecrement(date);

  newsList.push(
    new News({
      template: newsTemplate,
      title: lorem.generateSentences(1),
      date: date.toDateString(),
      content: lorem.generateParagraphs(1),
      tags: lorem.generateWords(Math.floor(Math.random() * 5)).split(' '),
    })
  );
}

newsList.forEach((news) => newsBlock.appendChild(news.node));

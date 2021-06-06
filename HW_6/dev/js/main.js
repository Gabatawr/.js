//#region Task 2

const newsBlock = document.querySelector('.news');
const addNews = (news = { title, date, content, tags = [], pref = 'news__' }) => {
    const def = newsBlock.childNodes[0].cloneNode();
    const keys = Object.keys(news);
    for (let i = 0; i < def.childNodes.length; i++) {
        for (let j = 0; i < keys.length; j++) {
            if (def[i].className == news[pref] + keys[j]) {
                def[i].textContent = news[keys[j]];
                break;
            }
        }
    }
    newsBlock.appendChild(def);
};

//#endregion Task 2

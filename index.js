// to get the current time & date
// TODO: optimise the time & date func
// const interval = setInterval(() => {
    const currentDateAndTime = new Date;
    const currentTime = `${currentDateAndTime.getHours()}:${currentDateAndTime.getMinutes()}`;
    const currentMonth = currentDateAndTime.toLocaleString('default', { month: 'long' });
    const currentDate = `${currentDateAndTime.getDate()}, ${currentDateAndTime.getFullYear()}`;

    const printTime = document.getElementById('time');
    const printDate = document.getElementById('date');

    printTime.innerHTML = currentTime;
    printDate.innerHTML = `${currentMonth} ${currentDate}`;
// }, 1000);

// data for quickLinks
const quickLinks = [
    { name: 'instagram', link: 'www.instagram.com', iconClassName: 'fa-instagram' },
    { name: 'facebook', link: 'www.facebook.com', iconClassName: 'fa-facebook' },
    { name: 'linkedin', link: 'www.linkedin.com', iconClassName: 'fa-linkedin' },
    { name: 'github', link: 'www.github.com', iconClassName: 'fa-github' },
    { name: 'youtube', link: 'www.youtube.com', iconClassName: 'fa-youtube' },
    { name: 'twitter', link: 'www.twitter.com', iconClassName: 'fa-twitter' },
];

// data for bookmark
const bookmarkData = [
    { name: 'instagram', link: 'www.instagram.com', iconClassName: 'fa-instagram' },
    { name: 'facebook', link: 'www.instagram.com', iconClassName: 'fa-instagram' },
    { name: 'github', link: 'www.instagram.com', iconClassName: 'fa-instagram' },
    { name: 'chat gpt', link: 'www.instagram.com', iconClassName: 'fa-instagram' },
    { name: 'linkedin', link: 'www.instagram.com', iconClassName: 'fa-instagram' },
    { name: 'youtube', link: 'www.instagram.com', iconClassName: 'fa-instagram' },
    { name: 'notion', link: 'www.instagram.com', iconClassName: 'fa-instagram' },
    { name: 'figma', link: 'www.instagram.com', iconClassName: 'fa-instagram' },
    { name: 'apple', link: 'www.apple.com', iconClassName: 'fa-apple' }
];

// getting target elements
const quickLinksCont = document.getElementById('quickLinksCont');
const bookmarkGrid = document.getElementById('grid');

// creating template of 
function quickLinksTemplate(item) {
    return `<a href="${item.link}" aria-label="${item.name}"><i class="fa-brands ${item.iconClassName}"></i></a>`
}

function bookmarkItemTemplate(item) {
    return (
        `
            <a href="${item.link}" class="bookmarks" id="bookmark" aria-label="${item.name}">
                <i class="fa-brands ${item.iconClassName}" id="icon"></i>
                <div class="label">
                    <span class="name" id="name">${item.name}</span>
                    <span class="link" id="link">${item.link}</span>
                </div>
            </a>
        `
    )
}

// func to set content in targeted element
function itemToSetInHTML(targetElement, elementTemplate, items) {
    targetElement.innerHTML = items.map(elementTemplate).join('');
}

// calling func to print bookmark links
itemToSetInHTML(quickLinksCont, quickLinksTemplate, quickLinks);
itemToSetInHTML(bookmarkGrid, bookmarkItemTemplate, bookmarkData);
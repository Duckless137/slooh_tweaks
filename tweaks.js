const settings = {
    "additions": [
        {
            title: 'Photos',
            img: 'data:image/png;base64,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',
            href: '/photos',
            enabled: true
        },
        {
            title: 'Missions',
            img: 'data:image/png;base64,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',
            href: '/missions/bySlooh1000',
            enabled: true
        }
    ],
    "removals": {
        "dashboard": false,
        "telescopes": false,
        "quests": false,
        "community": false,
        "workspaces": false,
        "guides": true
    },
    "settings": {
        "state": true,
        "showcst": true
    }
}

function mod(x,y) {
    return ((x % y) + y) % y;

}

function setToDefault(toDefine) {
    const baseSetting = settings[toDefine];
    console.log(baseSetting);
    if (toDefine == 'additions') {
        chrome.storage.sync.set({ "additions": baseSetting }).then(() => {
            console.log("Value is set")
        });
    } else if (toDefine == 'removals') {
        chrome.storage.sync.set({ 'removals': baseSetting }).then(() => {
            console.log("Value is set")
        });
    } else if (toDefine == 'settings') {
        chrome.storage.sync.set({ 'settings': baseSetting }).then(() => {
            console.log("Value is set")
        });
    } else {
        console.error(`"${toDefine}" is not a valid key.`)
    }
}
function createLink(modification) {
    if (modification.enabled) {
        const link = document.createElement('a');
        link.setAttribute('href', modification.href);
        link.setAttribute('class', 'link no-border');

        const innerDiv = document.createElement('div');
        innerDiv.setAttribute('class', 'jsx-1462157098 link-container');

        const img = document.createElement('img');
        img.setAttribute('src', modification.img);
        img.setAttribute('alt', 'guides-icon');
        img.setAttribute('class', 'jsx-1462157098 link-image');

        const title = document.createElement('h2');
        title.innerHTML = modification.title;
        title.setAttribute('class', 'jsx-1462157098 link-title');

        innerDiv.appendChild(img);
        innerDiv.appendChild(title);
        link.appendChild(innerDiv);
        return link;
    } else {
        return undefined;
    }
}

function addLinks() {
    console.log(settings);
    const navbar = document.querySelector('.top-buttons-bar');
    for (const modification of settings.additions) {
        console.log(modification)

        navbar.lastElementChild.classList.remove('no-border');
        const newTag = createLink(modification);
        if (newTag !== undefined) {
            navbar.appendChild(newTag);
        }
    }
}

function removeLinks() {
    const removableArray = Object.keys(settings.removals);
    console.log(removableArray);
    for (const name of removableArray) {
        if (settings.removals[name]) {
            let links = document.querySelectorAll(`.link-title`);
            for (const link of links) {
                if (link.innerHTML.toLowerCase() == name.toLowerCase()) {
                    links = link;
                }
            }
            links.parentElement.parentElement.remove();
        }
    }
}
function createDate() {
    if (newPage) {
        const timer = document.createElement("div");
        timer.className = "timer-cst";
        const newDate = new Date();
        let midday = "PM";
        let hours = mod(newDate.getHours(),24);
        if (hours < 12) {
            midday = "AM";
        }
        hours = ((hours - 1) % 12) + 1;
        let minutes = JSON.stringify(newDate.getMinutes() % 60);
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        const date = `${hours}:${minutes} ${midday} CST`;
        timer.innerHTML = date;
        document.getElementById("notifications").prepend(timer);
    }
}
function updateDate() {
    const timer = document.querySelector(".timer-cst");
    const newDate = new Date();
    let midday = "PM";
    let hours = mod(newDate.getHours(),24);
    if (hours < 12) {
        midday = "AM";
    }
    hours = ((hours - 1) % 12) + 1;
    let minutes = JSON.stringify(newDate.getMinutes() % 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    const date = `${hours}:${minutes} ${midday} CST`;
    timer.innerHTML = date;
}

function convertToCST(time, trimStart) {
    trimStart = trimStart || false;
    const times = time.split(":")
    let midday = "PM";
    const convert = times.map((str, idx) => {
        let num = Number(str);
        if (idx == 0) {
            num = mod(num - 7,12);
            if (num < 12) {
                midday == "AM";
            }
            num = ((num - 1) % 12) + 1;
        }
        if (num < 10 && !trimStart) {
            num = "0" + num;
        } else {
            num.toString();
        }
        return num;
    });
    const suffix = (`${convert.join(":")} ${midday}`);
    return suffix;
}

function observatoryInfo() {
    const timeLabels = document.querySelectorAll('time-label');
    for (const label of timeLabels) {
        const time = label.parentElement.querySelector('.time-field');
        label.innerHTML = convertToCST(time);
    }
}

function missions() {
    const app = document.querySelector('.clearfix').querySelector('.clearfix');
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                let element = null;
                const hasClass = [].some.call(mutation.addedNodes, function (el) {
                    let containsClass = false;
                    try {
                        element = el;
                        containsClass = el.classList.contains('mission-tile');
                    } catch (error) {
                    }
                    return containsClass;
                });
                if (hasClass) {
                    console.log('time added');
                    const timeLabel = element.querySelector('.time');
                    const time = convertToCST(timeLabel.innerHTML,true);
                    document.querySelector(':root').style.setProperty('--time', `"${time}"`);
                }
            }
        });
    });
    observer.observe(app, { childList: true, subtree: true, characterData: true });
}

class Label {
    constructor(domTarget, labelQuery, cstLabel) {
        this.domTarget = domTarget;
        this.labelQuery = labelQuery;
        this.cstLabel = (text) => {
            const newLabel = cstLabel.replace("{label}", text);
            return newLabel;
        }
    }
}

const ustDomData = [
    new Label('upcoming-events-section-wrapper','time.upcoming-event-date',' ({label} CST)'),
    new Label('telescopes-section','time:not(upcoming-event-date)','\n({label} CST)'),
    new Label('mission-card-redesign','.section-title:not(.astronauts-title)',' ({label} CST)'),
    new Label('slick-slider','.title',' ({label} CST)')
]

function detectLabels() {
    const app = document.querySelector('#app');
    const neededObservers = [];
    console.log('Detecting labels')
    for (const domData of ustDomData) {
        const label = document.querySelector(domData.labelQuery);
        if (label !== null) {
            console.log(`${domData.labelQuery} existed! Whoops`);
            const labels = document.querySelectorAll(domData.labelQuery);
            for (const label of labels) {
                if (label.innerHTML.toLowerCase().includes('utc') && !label.innerHTML.toLowerCase().includes('cst')) {
                    const time = label.innerHTML.slice(label.innerHTML.length - 9, label.innerHTML.length - 4);
                    const cst = domData.cstLabel(convertToCST(time));
                    label.innerHTML += cst;
                }
            }
        } else {
            console.log(`${domData.labelQuery} does not exist`);
        }
    }
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                for (const domData of ustDomData) {
                    let element = null;
                    const hasClass = [].some.call(mutation.addedNodes, function (el) {
                        let containsClass = false;
                        try {
                            element = el;
                            containsClass = el.classList.contains(domData.domTarget);
                        } catch (error) {
                            element = null;
                            containsClass = false;
                        }
                        return containsClass;
                    });
                    if (hasClass) {
                        console.log(`${domData.labelQuery} has been added`);
                        const labels = element.querySelectorAll(domData.labelQuery);
                        for (const label of labels) {
                            if (label.innerHTML.toLowerCase().includes('utc') && !label.innerHTML.toLowerCase().includes('cst')) {
                                const time = label.innerHTML.slice(label.innerHTML.length - 9, label.innerHTML.length - 4);
                                const cst = domData.cstLabel(convertToCST(time));
                                label.innerHTML += cst;
                            }
                        }
                    }
                }
            }
        });
    });
    observer.observe(app, { childList: true, subtree: true, characterData: true });
}

function modifyNavbar() {
    if (settings.settings.state && newPage) {
        addLinks();
        removeLinks();
    }
    if (settings.settings.showcst) {
        createDate();
        setInterval(updateDate, 1000);
    }
}

function applyCST() {
    if (settings.settings.showcst) {
        if (location.href == 'https://app.slooh.com/NewDashboard') detectLabels();
        if (location.href == 'https://app.slooh.com/missions/bySlooh1000') missions();
        observatoryInfo();
    }
}

function initModification() {
    awaitLoad();
    applyCST();
}

async function fetchLocalStorage(keys) {
    for (const key of keys) {
        await chrome.storage.sync.getBytesInUse([key]).then(async function (bytes) {
            console.log(bytes);
            if (bytes < 1) {
                setToDefault(key);
            } else {
                await chrome.storage.sync.get(key).then((res) => {
                    settings[key] = res[key];
                });
            }
        });
    }
}


function awaitLoad() {
    const app = document.getElementById("app");
    if (document.querySelector(".wrapper") !== null) {
        console.log('Wrapper existed! Whoops');
        modifyNavbar();
    } else {
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                    const hasClass = [].some.call(mutation.addedNodes, function (el) {
                        return el.classList.contains('wrapper')
                    });
                    if (hasClass) {
                        console.log('wrapper added');
                        modifyNavbar();
                    }
                }
            });
        });
        observer.observe(app, { childList: true, attributes: true, characterData: true });
    }
}

function monitorPage() {
    let currentPage = location.href;
    initModification();

    setInterval(function()
    {
        if (currentPage != location.href)
        {
            newPage = false;
            currentPage = location.href;
            initModification();
        }
    }, 500);
}

let newPage = true;

window.onload = function () {
    console.log('Window loaded...');
    const keyArray = Object.keys(settings);
    fetchLocalStorage(keyArray).then(monitorPage);
}
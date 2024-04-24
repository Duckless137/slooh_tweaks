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
        "state": {
            "name": "Toggle Extension",
            "state": true
        },
        "showcst": {
            "name": "Show CST",
            "state": true
        },
    }
}

class BaseSettings {
    constructor() {
        this.additions = [
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
        ];
        this.removals = {
            "dashboard": false,
            "telescopes": false,
            "quests": false,
            "community": false,
            "workspaces": false,
            "guides": true
        };
        this.settings = {
            "state": {
                "name": "Toggle Extension",
                "state": true
            },
            "showcst": {
                "name": "Show CST",
                "state": true
            }
        };
    }
}

async function clearCache() {
    await chrome.storage.sync.clear().then(
        console.log("loaded data")
    );
}

function lockSettings(isOn) {
    const toLock = document.querySelector(".addl-settings");
    if (isOn) {
        toLock.style.opacity = ".3"
    } else {
        toLock.style.opacity = "1"
    }
    const inputs = toLock.querySelectorAll("input");
    for (const inputBox of inputs) {
        inputBox.disabled = isOn;
    }
}

async function setToDefault(toDefine) {
    const baseSetting = new BaseSettings()[toDefine];
    console.log(baseSetting);
    if (toDefine == 'additions') {
        await chrome.storage.sync.set({ "additions": baseSetting }).then(() => {
            console.log("Value is set")
        });
    } else if (toDefine == 'removals') {
        await chrome.storage.sync.set({ 'removals': baseSetting }).then(() => {
            console.log("Value is set")
        });
    } else if (toDefine == 'settings') {
        await chrome.storage.sync.set({ 'settings': baseSetting }).then(() => {
            console.log("Value is set")
        });
    } else {
        console.error(`"${toDefine}" is not a valid key.`)
    }
}


async function fetchLocalStorage(keys) {
    for (const key of keys) {
        await chrome.storage.sync.getBytesInUse([key]).then(async function(bytes) {
            console.log(bytes);
            if (bytes < 1) {
                setToDefault(key);
            } else {
                await chrome.storage.sync.get(key).then((res) => {
                    settings[key] = res[key];
                    console.log(res[key])
                    return 1;
                });
            }
        });
        console.log(key + " done")
    }
}

async function update(key) {
    const data = settings[key];
    if (key == 'additions') {
        await chrome.storage.sync.set({ "additions": data }).then(() => {
            console.log("Value is set")
        });
    } else if (key == 'removals') {
        await chrome.storage.sync.set({ 'removals': data }).then(() => {
            console.log("Value is set")
        });
    } else if (key == 'settings') {
        await chrome.storage.sync.set({ 'settings': data }).then(() => {
            console.log("Value is set")
        });
    } else {
        console.error(`"${key}" is not a valid key.`)
    }
}
function createCheckboxes() {
    const wrapper = document.querySelector(".checkboxes");
    const removalKeys = Object.keys(settings.removals)
    for (const key of removalKeys) {
        const isChecked = settings.removals[key];
        const container = document.createElement('div');
        container.className = "container";

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.setAttribute('link-name', key)
        checkbox.checked = isChecked;
        checkbox.addEventListener('change', (e) => {
            const linkName = e.target.getAttribute('link-name');
            settings.removals[linkName] = e.target.checked;
            const coverTwo = e.target.parentElement.querySelector('.cover-two');
            const rot = Number(coverTwo.style.rotate.replace('deg',''));
            coverTwo.style.rotate = `${rot + 90}deg`;
            update('removals');
            console.log(linkName);
        });

        const checkContainer = document.createElement('div');
        checkContainer.className = 'check-container';

        const checkboxCover = document.createElement('span');
        checkboxCover.className = "cover";
        
        const checkboxCoverTwo = document.createElement('span');
        checkboxCoverTwo.className = "cover-two";
        checkboxCoverTwo.style.rotate = `${(isChecked + 1)* 90}deg`

        const label = document.createElement('label');
        label.className = 'checkmark-label';
        label.innerHTML = key;

        checkContainer.appendChild(checkbox);
        checkContainer.appendChild(checkboxCover);
        checkContainer.appendChild(checkboxCoverTwo);
        container.appendChild(checkContainer);
        container.appendChild(label);
        wrapper.appendChild(container);
    }
}

class CustomLink {
    constructor(title, img, href, enabled, index) {
        const customWrapper = document.createElement('div');
        customWrapper.className = "custom-wrapper";
        customWrapper.setAttribute('index', index)
        
        const headingWrapper = document.createElement('div');
        headingWrapper.className = "heading-wrapper";

        const heading = document.createElement('input');
        heading.className = 'custom-heading';
        heading.value = title || "";
        heading.type = "text";

        const toggleCheck = document.createElement('input');
        toggleCheck.className = 'toggle-link';
        toggleCheck.type = "checkbox";
        toggleCheck.checked = enabled;

        const remove = document.createElement('button');
        remove.className = 'remove-link';
        remove.type = 'button';
        remove.setAttribute('link-name',title)
        remove.addEventListener('click', (e) => {
            const target = e.target;
            const title = target.getAttribute("link-name");
            const conf = confirm(`Are you sure you would like to delete link "${title}"?`);
            if (conf) {
                const myIndex = target.parentElement.parentElement.getAttribute('index');
                reduceIndexes(myIndex);
                target.parentElement.parentElement.remove();
                console.log(myIndex)
                settings.additions.splice(myIndex,1);
                console.log(settings.additions);
                update('additions');
            }
        });

        const switchContainer = document.createElement('label');
        switchContainer.className = "switch";
        const slider = document.createElement('span');
        slider.className = 'slider';

        const urlContainer = document.createElement('div');
        urlContainer.className = 'indent url-container'

        const urlLabel = document.createElement('label');
        urlLabel.className = 'url-label'
        urlLabel.innerHTML = "Image URL: "

        const urlInput = document.createElement('input');
        urlInput.type = 'text';
        urlInput.className = 'url-input';
        urlInput.value = img || "";
        urlInput.placeholder = 'https://example.png';

        const linkContainer = document.createElement('div');
        linkContainer.className = 'indent link-container'

        const linkLabel = document.createElement('label');
        linkLabel.className = 'link-label'
        linkLabel.innerHTML = "Path: "

        const linkInput = document.createElement('input');
        linkInput.type = 'text';
        linkInput.className = 'link-input';
        linkInput.value = href || "";
        linkInput.placeholder = 'ex: /photos or /quests';

        heading.addEventListener("change", (e) => {
            const newVal = e.target.value;
            const idx = e.target.parentElement.parentElement.getAttribute('index');
            console.log(`Value: ${newVal} \nIdx: ${idx}`);
            settings.additions[idx].title = newVal;
            update('additions');
        });
        urlInput.addEventListener("change", (e) => {
            const newVal = e.target.value;
            const idx = e.target.parentElement.parentElement.getAttribute('index');
            console.log(`Value: ${newVal} \nIdx: ${idx}`);
            settings.additions[idx].img = newVal;
            update('additions');
        });
        linkInput.addEventListener("change", (e) => {
            const newVal = e.target.value;
            const idx = e.target.parentElement.parentElement.getAttribute('index');
            console.log(`Value: ${newVal} \nIdx: ${idx}`);
            settings.additions[idx].href = newVal;
            update('additions');
        });
        toggleCheck.addEventListener("change", (e) => {
            const target = e.target;
            const newVal = target.checked;
            const idx = target.parentElement.parentElement.parentElement.getAttribute('index');
            console.log(`Value: ${newVal} \nIdx: ${idx}`);
            settings.additions[idx].enabled = newVal;
            update('additions');
        });


        urlContainer.appendChild(urlLabel);
        urlContainer.appendChild(urlInput);

        linkContainer.appendChild(linkLabel);
        linkContainer.appendChild(linkInput);

        switchContainer.appendChild(toggleCheck);
        switchContainer.appendChild(slider);

        headingWrapper.appendChild(remove);
        headingWrapper.appendChild(switchContainer);
        headingWrapper.appendChild(heading);

        customWrapper.appendChild(headingWrapper);
        customWrapper.appendChild(urlContainer);
        customWrapper.appendChild(linkContainer);

        document.querySelector(".additions").appendChild(customWrapper);

        this.title = title;
        this.img = img;
        this.href = href;
        this.enabled = enabled;
    }
}

function createCustomLinks() {
    let index = 0
    for (const link of settings.additions) {
        console.log(link);
        new CustomLink(link.title, link.img, link.href, link.enabled, index);
        index += 1;
    }
}

class SettingSwitch {
    constructor(key) {
        const data = settings.settings[key]; 
        console.log(data);
        const wrapper = document.createElement('div');
        wrapper.className = 'setting-wrapper';

        const label = document.createElement('label');
        label.innerHTML = data.name;

        const container = document.createElement('label');
        container.className = `large-switch toggle-${key}`;

        const input = document.createElement('input');
        input.type = "checkbox";
        input.checked = data.state;
        this.input = input;

        const span = document.createElement('span');
        span.className = "large-slider";

        container.appendChild(input);
        container.appendChild(span);

        wrapper.appendChild(label);
        wrapper.appendChild(container);

        return document.querySelector('.main-settings').appendChild(wrapper);
    }
}

function applySettings() {
    const keys = Object.keys(settings.settings);
    for (const key of keys) {
        console.log(key);
        console.log(settings.settings[key])
        new SettingSwitch(key);
        const element = document.querySelector(`.toggle-${key}`);
        element.querySelector(`input`).addEventListener("change", (e) => {
            const target = e.target;
            const keyClassList = target.parentElement.classList;
            let key = true
            for (const keyClass of keyClassList) {
                if (keyClass.includes("toggle-")) {
                    key = keyClass.replace("toggle-","");
                }
            }
            if (key !== true) {
                settings.settings[key].state = target.checked;
                console.log(settings.settings)
                update('settings');
            }
        });
        if (key == 'state') {
            element.addEventListener("change", (e) => {
                const lock = (e.target.checked == false);
                lockSettings(lock);
            });
        }
    }
}

function monitorLinkInjector() {
    const linkInjector = document.querySelector(".link-injector");
    linkInjector.addEventListener("click", (e) => {
        console.log("clicked");
        const newElement = new CustomLink("New Link", undefined, undefined, true, settings.additions.length);
        const additions = document.querySelector(".additions");
        additions.scrollTo(0, additions.scrollHeight);
        settings.additions.push(newElement);
        update('additions');
    });
}

function reduceIndexes(minIndex) {
    const links = document.querySelectorAll(".custom-wrapper");
    for (let i = minIndex; i < links.length; i++) {
        console.log(links)
        const elementIndex = links[i].getAttribute('index');
        links[i].setAttribute('index', (elementIndex - 1));
    }
}

async function monitorDefault() {
    const defaultButton = document.querySelector('.reset-defaults');
    defaultButton.addEventListener('click', async function() {
        console.log("refresh");
        const conf = confirm('Are you SURE you would like to reset the settings?');
        if (conf) {
            await clearCache().then(async function () {
                await setToDefault('removals').then();
                await setToDefault('additions').then();
                await setToDefault('settings').then();
                refresh();
            });
        }
    });
}

function main() {
    console.log('maining');
    createCheckboxes();
    createCustomLinks();
    applySettings();
    monitorLinkInjector();
    monitorDefault();
}

window.onload = function () {
    const keyArray = Object.keys(settings);
    fetchLocalStorage(keyArray).then(() => {
        console.log('Returned Local Storage');
        main();
    });
}

function refresh() {
    const baseSettings = new BaseSettings();
    settings.additions = baseSettings.additions;
    settings.removals = baseSettings.removals;
    settings.settings = baseSettings.settings;
    console.log(baseSettings);

    console.log("refresh");
    document.querySelector('.toggle-state').querySelector('input').checked = settings.settings.state;
    document.querySelector('.toggle-showcst').querySelector('input').checked = settings.settings.state;

    const additions = document.querySelectorAll(".custom-wrapper");
    for (let index = 0; index < additions.length; index++) {
        const addition = additions[index];
        console.log(addition);
        const enabled = addition.querySelector(".toggle-link");
        const title = addition.querySelector(".custom-heading");
        const img = addition.querySelector(".url-input");
        const href = addition.querySelector(".link-input");
        console.log(enabled.checked);
        enabled.checked = settings.additions[index].enabled;
        console.log(enabled.checked);
        title.value = settings.additions[index].title;
        img.value = settings.additions[index].img;
        href.value = settings.additions[index].href;
    }

    const removals = document.querySelectorAll(".check-container");
    for (const checkBoxContainer of removals) {
        const checkBox = checkBoxContainer.querySelector('input');
        const removal = checkBox.getAttribute("link-name");
        if (checkBox.checked !== settings.removals[removal]) {
            const coverTwo = checkBox.parentElement.querySelector('.cover-two');
            const rot = Number(coverTwo.style.rotate.replace('deg',''));
            coverTwo.style.rotate = `${rot + 90}deg`;
        }
        checkBox.checked = settings.removals[removal];
    }
}
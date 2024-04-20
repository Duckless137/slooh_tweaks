const settings = {
    "additions": [
        {
            title: 'Photos',
            img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU/TiiIVETuIOGSo4mAXFXGsVShChVArtOpg8tI/aNKQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouUeF9SaBHjg8f7OO+dw333AkKjwjQrFAc03TbTyYSYza2K3a8IYQBAF8ZlZhlzkpSC7/q6R4CfdzGe5f/uz9Wn5i0GBETiODNMm3iDeGbTNjjvE0dYSVaJz4knTCqQ+JHrisdvnIsuCzwzYmbS88QRYrHYwUoHs5KpEU8TR1VNp3wh67HKeYuzVqmxVp38h+G8vrLMddojSGIRS5AgQkENZVRgI0anToqFNN0nfPzDrl8il0KuMhg5FlCFBtn1g8/gd2+twtSklxRO0GBeHOdjFOjeBZp1x/k+dpzmCRB8Bq70tr/aAGY/Sa+3tegR0L8NXFy3NWUPuNwBhp4M2ZRdKUhbKBSA9zMaUw4YvAV617y+te5x+gBkqFepG+DgEBgrUva6z797Ovv275tW/34AQnVyk8U+j5gAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfoBBEABzhMpYssAAACH0lEQVR42u1bO27DMAyVBBXoedo7dO/a1XsP471rV9+gV+gZumfr2ADuFMAIbEUkHykpErfAn4iP5CMpyv7p5e15PbvT99fnjzOUZZ7W7e/X9w/vCkhYz+70+PD36zqVaG352iS4zqV7AIoQzzUBliTCEQIDgM4lWsU7Jb63HKHNC15b8WuSOyLAW/doAREtFC/lSaYcsMzTmlKesvDUvWiAo7bVU8pcrqVcXsujYABoFzXaQHi08hT3PVIuBzxUpghWyt9VIXQvyrNCQKJ8ym0tix9oGuQoj64lLimYQ5RBYv0a3Z4KQqhxURb5n8wB0lSV86ykpuB6Z6jJ6iW8wVtaX0KYWl4QrKy/l/aO2Htv4cVL4Zx2NCeGc/YDJJxAbZu9dmxSlOc+I0nHXpuIuN2ctAsUeQAi3lKlLuI6ChSPIhdOGyxhcdS6o6Z7aQoqU4y5QKv7AagQGCQ40uAohGiKdlkKU7us3GaIGvPU/80BQWU6vDfgXOZp3S6I6klaWUZtR4gzLpPMFqvbEUJaTLPGIL2YizKHEyTvpwBmUgpzLKgxbxAD0ML4i7rGaBWPOcdjrK0vDgHJSGr7DGpwwjFOk+0wsk6IrStu0gtwFphT7Ox1fBpjsyIegDrWhjp5ViwEUkCklKN0jcWyAKdNRVgdWY/APUDrWFvxbhAZApSNk2YPS1unsyo4oEUZAPQOQLH2tppPZ0cIDAAGAF3LP9nODd/qI2h4AAAAAElFTkSuQmCC',
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
        "guides": false
    },
    "settings": {
        "state": true,
        "showcst": false
    }
}

function clearCache() {
    chrome.storage.sync.clear();
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
        chrome.storage.sync.set({ "additions": data }).then(() => {
            console.log("Value is set")
        });
    } else if (key == 'removals') {
        chrome.storage.sync.set({ 'removals': data }).then(() => {
            console.log("Value is set")
        });
    } else if (key == 'settings') {
        chrome.storage.sync.set({ 'settings': data }).then(() => {
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
        const container = document.createElement('div');
        container.className = "container";

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.setAttribute('link-name', key)
        checkbox.checked = settings.removals[key];
        checkbox.addEventListener('change', (e) => {
            const linkName = e.target.getAttribute('link-name');
            settings.removals[linkName] = e.target.checked;
            update('removals');
            console.log(linkName);
        });

        const label = document.createElement('label');
        label.className = 'checkmark-label';
        label.innerHTML = key;

        container.appendChild(checkbox);
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

function applySettings() {
    console.log(settings);
    console.log(settings.settings);
    const keys = Object.keys(settings.settings);
    for (const key of keys) {
        console.log(key);
        console.log(settings.settings[key])
        const element = document.querySelector(`.toggle-${key}`).querySelector('input');
        element.checked = settings.settings[key];
        element.addEventListener("change", (e) => {
            const target = e.target;
            const keyClassList = target.parentElement.classList;
            let key = true
            for (const keyClass of keyClassList) {
                if (keyClass.includes("toggle-")) {
                    key = keyClass.replace("toggle-","")
                }
            }
            if (key !== true) {
                settings.settings[key] = target.checked;
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

function main() {
    console.log('maining');
    createCheckboxes();
    createCustomLinks();
    applySettings();
    monitorLinkInjector();
}

window.onload = function () {
    const keyArray = Object.keys(settings);
    fetchLocalStorage(keyArray).then(() => {
        console.log('Returned Local Storage');
        main();
    });
}
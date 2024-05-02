const settings = new BaseSettings();

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
        new CustomLink(link.title, link.img, link.href, link.enabled, index);
        index += 1;
    }
}

class SettingSwitch {
    constructor(key) {
        const data = settings.settings[key]; 
        
        const wrapper = document.createElement('div');
        wrapper.className = 'setting-wrapper';
        
        const label = document.createElement('label');
        label.innerHTML = data.name;
        
        wrapper.appendChild(label);
        const settingsBody = document.querySelector('.main-settings');
        switch (data.type) {
            case "switch":
        
                const container = document.createElement('label');
                container.className = `large-switch toggle-${key}`;
        
                const input = document.createElement('input');
                input.type = "checkbox";
                input.checked = data.value;
                this.input = input;
        
                const span = document.createElement('span');
                span.className = "large-slider";
        
                container.appendChild(input);
                container.appendChild(span);
        
                wrapper.appendChild(container);
                break;
        
            case "dropdown":
                const dropdown = document.createElement('select');
                dropdown.className = `select-menu dropdown-${key}`;

                for (const val of data.options) {
                    const option = document.createElement("option");
                    option.innerHTML = val;
                    option.value = val;
                    dropdown.appendChild(option);
                }
                
                dropdown.value = data.value;
                wrapper.appendChild(dropdown);
                break;
        }
        settingsBody.appendChild(wrapper);
    }
}

function applySettings() {
    const keys = Object.keys(settings.settings);
    for (const key of keys) {
        new SettingSwitch(key);
        switch (settings.settings[key].type) {
            case "switch":
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
                        settings.settings[key].value = target.checked;
                        update('settings');
                    }
                });
                if (key == 'state') {
                    element.addEventListener("change", (e) => {
                        const lock = (e.target.checked == false);
                        lockSettings(lock);
                    });
                }       
                break;
        
            case "dropdown":
                const dropdownMenu = document.querySelector(`.dropdown-${key}`);
                dropdownMenu.addEventListener('change', (e) => {
                    const target = e.target;                    
                    const keyClassList = target.classList;
                    let key = true;
                    for (const keyClass of keyClassList) {
                        if (keyClass.includes("dropdown-")) {
                            key = keyClass.replace("dropdown-","");
                            console.log(key);
                        }
                    }
                    if (key !== true) {
                        settings.settings[key].value = target.value;
                        console.log(target.innerHTML);
                        update('settings');
                    }  
                });
                break;
        }
    }
}

function monitorLinkInjector() {
    const linkInjector = document.querySelector(".link-injector");
    linkInjector.addEventListener("click", (e) => {
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
    lockSettings(document.querySelector('.toggle-state').querySelector('input').checked == false);
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
    console.log("refresh");
    const keys = Object.keys(settings.settings);
    for (const key of keys) {
        const setting = settings.settings[key];
        switch (setting.type) {
            case "switch":
                const element = document.querySelector(`.toggle-${key}`);
                element.querySelector("input").checked = setting.value;
                break;
        
            case "dropdown":
                const dropdownMenu = document.querySelector(`.dropdown-${key}`);
                for (const option of dropdownMenu.querySelectorAll(`option`)) {
                    const valueName = option.value;
                    option.selected = (valueName == setting.value);
                }
                break;
        }
    }

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
class Telescope {
    constructor(name, status, msg, logo, url) {
        const wrapper = document.createElement('a');
        wrapper.className = "telescope-wrapper";
        wrapper.setAttribute('href','https://app.slooh.com' + url);

        const img = document.createElement('img');
        img.className = "telescope-logo";
        img.src = logo;

        const info = document.createElement('div');
        info.className = "telescope-info";

        const title = document.createElement('span');
        title.className = "telescope-name"
        title.innerHTML = name;

        const statusDesc = document.createElement('p');
        statusDesc.className = "telescope-status";
        if (status == "offline") {
            statusDesc.innerHTML = `🔴 ${status.proper()} (${msg})`;
        } else {
            statusDesc.innerHTML = `🟢 ${msg}`;
        }

        info.appendChild(title);
        info.appendChild(statusDesc);

        wrapper.appendChild(img);
        wrapper.appendChild(info);

        return wrapper;
    }
}

async function telescopes() {
    const data = await getTelescopeData();
    const observatoryContainer = document.querySelector('.observatories');
    try {
        observatoryContainer.querySelector('h2').remove();        
    } catch (error) {
        
    }
    for (let i = 0; i < data.observatoryList.length; i++) {
        const observatory = data.observatoryList[i];
        const name = observatory.obsShortName;
        for (const telescope of observatory.obsTelescopes) {
            const teleLabel = new Telescope(
                telescope.teleName, 
                telescope.teleOnlineStatus, 
                telescope.enhancedStatusMessageTelescopeMenu,
                telescope.teleLogoURL,
                telescope.teleDetailsURL
            );
            console.log(teleLabel);
            observatoryContainer.appendChild(teleLabel);
        }
    };
}

telescopes();
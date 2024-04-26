const settings = new BaseSettings();

function mod(x, y) {
  return ((x % y) + y) % y;
}

function createLink(modification) {
  if (modification.enabled) {
    const link = document.createElement("a");
    link.setAttribute("href", modification.href);
    link.setAttribute("class", "link no-border");

    const innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "jsx-1462157098 link-container");

    const img = document.createElement("img");
    img.setAttribute("src", modification.img);
    img.setAttribute("alt", "guides-icon");
    img.setAttribute("class", "jsx-1462157098 link-image");

    const title = document.createElement("h2");
    title.innerHTML = modification.title;
    title.setAttribute("class", "jsx-1462157098 link-title");

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
  const navbar = document.querySelector(".top-buttons-bar");
  for (const modification of settings.additions) {
    console.log(modification);

    navbar.lastElementChild.classList.remove("no-border");
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
    const date = getTime();
    if (settings.settings.showcst.value == "Append") {
        timer.innerHTML = date + " CST";
    } else {
        timer.innerHTML = date;
    }
    document.getElementById("notifications").prepend(timer);
  }
}
function updateDate() {
  const timer = document.querySelector(".timer-cst");
  const date = getTime();
  timer.innerHTML = date;
}

function convertToCST(time, trimStart) {
  trimStart = trimStart || false;
  const times = time.split(":");
  let midday = "PM";
  const convert = times.map((str, idx) => {
    let num = Number(str);
    if (idx == 0) {
      num = mod(num - 5, 24);
      if (num < 12) {
        midday = "AM";
      }
      num = ((num - 1) % 12) + 1;
    }
    if (num < 10 && (!trimStart || idx == 1)) {
      num = "0" + num;
    } else {
      num.toString();
    }
    return num;
  });
  const suffix = `${convert.join(":")} ${midday}`;
  return suffix;
}

function observatoryInfo() {
  const timeLabels = document.querySelectorAll("time-label");
  for (const label of timeLabels) {
    const time = label.parentElement.querySelector(".time-field");
    label.innerHTML = convertToCST(time);
  }
}

function missions() {
  const app = document.querySelector(".clearfix").querySelector(".clearfix");
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        let element = null;
        const hasClass = [].some.call(mutation.addedNodes, function (el) {
          let containsClass = false;
          try {
            element = el;
            containsClass = el.classList.contains("mission-tile");
          } catch (error) {}
          return containsClass;
        });
        if (hasClass) {
          console.log("time added");
          const timeLabel = element.querySelector(".time");
          const time = convertToCST(timeLabel.innerHTML, true);
          if (settings.settings.showcst.value == "Append") {
            document
              .querySelector(":root")
              .style.setProperty("--time", `"${time}"`);
          } else {
            timeLabel.innerHTML = time;
          }
        }
      }
    });
  });
  observer.observe(app, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}

class Label {
  constructor(domTarget, labelQuery, cstLabel) {
    this.domTarget = domTarget;
    this.labelQuery = labelQuery;
    this.cstLabel = (text) => {
      const newLabel = cstLabel.replace("{label}", text);
      return newLabel;
    };
  }
}

function getTime() {
  const newDate = new Date();
  let midday = "PM";
  let hours = mod(newDate.getHours(), 24);
  if (hours < 12) {
    midday = "AM";
  }
  hours = ((hours - 1) % 12) + 1;
  let minutes = JSON.stringify(newDate.getMinutes() % 60);
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${hours}:${minutes} ${midday}`;
}

const ustDomData = [
  new Label(
    "upcoming-events-section-wrapper",
    "time.upcoming-event-date",
    " ({label} CST)"
  ),
  new Label(
    "telescopes-section",
    "time:not(upcoming-event-date)",
    "\n({label} CST)"
  ),
  new Label(
    "mission-card-redesign",
    ".section-title:not(.astronauts-title)",
    " ({label} CST)"
  ),
  new Label("slick-slider", ".title", " ({label} CST)"),
  new Label("telescopes-section", "time", " ({label} CST)"),
  new Label("telescopes-section", ".status-info", " ({label} CST)"),
];

function detectLabels() {
  const app = document.querySelector("#app");
  console.log("Detecting labels");
  for (const domData of ustDomData) {
    const label = document.querySelector(domData.labelQuery);
    if (label !== null) {
      console.log(`${domData.labelQuery} existed! Whoops`);
      const labels = document.querySelectorAll(domData.labelQuery);
      for (const label of labels) {
        if (
          label.innerHTML.toLowerCase().includes("utc") &&
          !label.innerHTML.toLowerCase().includes("cst")
        ) {
          const time = label.innerHTML.slice(
            label.innerHTML.length - 9,
            label.innerHTML.length - 4
          );
          const cst = domData.cstLabel(convertToCST(time));
          if (settings.settings.showcst.value == "Append") {
            const cst = domData.cstLabel(convertToCST(time));
            label.innerHTML += cst;
          } else {
            label.innerHTML =
              label.innerHTML.slice(0, label.innerHTML.length - 9) +
              convertToCST(time);
          }
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
              if (
                label.innerHTML.toLowerCase().includes("utc") &&
                !label.innerHTML.toLowerCase().includes("cst")
              ) {
                const time = label.innerHTML.slice(
                  label.innerHTML.length - 9,
                  label.innerHTML.length - 4
                );
                if (settings.settings.showcst.value == "Append") {
                  const cst = domData.cstLabel(convertToCST(time));
                  label.innerHTML += cst;
                } else {
                  label.innerHTML = label.innerHTML.slice(0, label.innerHTML.length - 9) + convertToCST(time);
                  if (domData.domTarget = '.status-info' && label.innerHTML.includes(' - ')) {
                    label.innerHTML = convertToCST(label.innerHTML.slice(0,5)) + label.innerHTML.slice(5);
                  }
                }
              }
            }
          }
        }
      }
    });
  });
  observer.observe(app, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}

function modifyNavbar() {
  if (newPage) {
    addLinks();
    removeLinks();
  }
  if (settings.settings.showcst.value !== "Off") {
    if (settings.settings.showcst.value) {
        document.querySelector(':root').style.setProperty('--padding','0');
        document.querySelector(':root').style.setProperty('--width','0');
        document.querySelector(':root').style.setProperty('--font','0');
        document.querySelector(':root').style.setProperty('--border','"none"');
    }
    createDate();
    setInterval(updateDate, 1000);
  }
}

function applyCST() {
  if (settings.settings.showcst.value !== "Off") {
    if (location.href == "https://app.slooh.com/NewDashboard") detectLabels();
    if (location.href == "https://app.slooh.com/missions/bySlooh1000")
      missions();
    observatoryInfo();
  }
}

function initModification() {
  awaitLoad();
  applyCST();
}

function awaitLoad() {
  const app = document.getElementById("app");
  if (document.querySelector(".wrapper") !== null) {
    console.log("Wrapper existed! Whoops");
    modifyNavbar();
  } else {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          const hasClass = [].some.call(mutation.addedNodes, function (el) {
            return el.classList.contains("wrapper");
          });
          if (hasClass) {
            console.log("wrapper added");
            modifyNavbar();
          }
        }
      });
    });
    observer.observe(app, {
      childList: true,
      attributes: true,
      characterData: true,
    });
  }
}

function monitorPage() {
  let currentPage = location.href;
  initModification();

  setInterval(function () {
    if (currentPage != location.href) {
      newPage = false;
      currentPage = location.href;
      initModification();
    }
  }, 500);
}

let newPage = true;

window.onload = function () {
  console.log("Window loaded...");
  if (settings.settings.state.value) {
    const keyArray = Object.keys(settings);
    fetchLocalStorage(keyArray).then(monitorPage);
  } else {
    console.log("Extension not enabled!");
  }
};

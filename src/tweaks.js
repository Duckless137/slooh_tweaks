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
    const date = CST.getTime();
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
  const date = CST.getTime();
  timer.innerHTML = date;
}

function observatoryInfo() {
  const timeLabels = document.querySelectorAll("time-label");
  for (const label of timeLabels) {
    const time = label.parentElement.querySelector(".time-field");
    label.innerHTML = CST.convertToCST(time);
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
          const time = CST.convertToCST(timeLabel.innerHTML, false);
          if (settings.settings.showcst.value == "Append") {
            document
              .querySelector(":root")
              .style.setProperty("--time", `"${time}"`);
          } else {
            document
              .querySelector(":root")
              .style.setProperty("--time", `"${time.slice(6)}"`);
            timeLabel.innerHTML = time.slice(0, 5);
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

const ustDomData = [
  new CST.Label(
    "upcoming-events-section-wrapper",
    "time.upcoming-event-date",
    " ({label} CST)"
  ),
  new CST.Label(
    "telescopes-section",
    "time:not(upcoming-event-date)",
    "\n({label} CST)"
  ),
  new CST.Label(
    "mission-card-redesign",
    ".section-title:not(.astronauts-title)",
    " ({label} CST)"
  ),
  new CST.Label("slick-slider", ".title", " ({label} CST)"),
  new CST.Label("telescopes-section", "time", " ({label} CST)"),
  new CST.Label("telescopes-section", ".status-info", " ({label} CST)"),
  new CST.Label(
    "jsx-4149243949",
    ".center-label",
    " ({label} CST)",
    "https://app.slooh.com/object-details/*/missions"
  ),
  // new CST.Label("obs-visibility-root","")
];
function objectObserver() {
  const app = document.querySelector("#app");
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        let element = null;
        const hasClass = [].some.call(mutation.addedNodes, function (el) {
          let containsClass = false;
          try {
            element = el;
            containsClass = el.nodeName == "DIV";
          } catch (error) {
            element = null;
            containsClass = false;
          }
          return containsClass;
        });
        if (hasClass) {
          console.log(`${".large"} has been added`);
          const labels = element.querySelectorAll(".large");
          console.log(labels);
          for (const label of labels) {
            CST.changeLabel(label, ".large");
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

function detectLabels() {
  const app = document.querySelector("#app");
  console.log("Detecting labels");
  for (const domData of ustDomData) {
    if (domData.canRun) {
      const label = document.querySelector(domData.labelQuery);
      if (label !== null) {
        console.log(`${domData.labelQuery} existed! Whoops`);
        const labels = document.querySelectorAll(domData.labelQuery);
        for (const label of labels) {
          CST.changeLabel(label, domData.labelQuery);
        }
      } else {
        console.log(`${domData.labelQuery} does not exist`);
      }
    }
  }
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        for (const domData of ustDomData) {
          if (domData.canRun) {
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
              const labels = element.querySelectorAll(domData.labelQuery);
              for (const label of labels) {
                CST.changeLabel(label, domData.labelQuery);
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
      document.querySelector(":root").style.setProperty("--padding", "0");
      document.querySelector(":root").style.setProperty("--width", "0");
      document.querySelector(":root").style.setProperty("--font", "0");
      document.querySelector(":root").style.setProperty("--border", '"none"');
    }
    if (location.href == "https://app.slooh.com/missions/bySlooh1000") {
      missions();
    }
    createDate();
    setInterval(updateDate, 1000);
  }
}

function applyCST() {
  if (settings.settings.showcst.value !== "Off") {
    detectLabels();
    if (location.href.startsWith("https://app.slooh.com/object-details/"))
      objectObserver();
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

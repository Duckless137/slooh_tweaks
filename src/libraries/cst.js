const CST = {
  convertToCST: function (time, trimStart) {
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
  },
  getTime: function () {
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
  },
  Label: class {
    constructor(domTarget, labelQuery, cstLabel, href) {
      const intendedHref = href || "https://app.slooh.com/NewDashboard";
      this.canRun = location.href.is(intendedHref);
      this.domTarget = domTarget;
      this.labelQuery = labelQuery;
      this.cstLabel = (text) => {
        const newLabel = cstLabel.replace("{label}", text);
        return newLabel;
      };
    }
  },
  changeLabel: function(label, query) {
    if (label.innerHTML.toLowerCase().includes("utc")) {
      if (Object.keys(CST.exces).includes(query)) {
        CST.exces[query](label);
      } else {
        const indices = label.innerHTML.getIndicesOf("utc");
        for (const i of indices) {
          const index = label.innerHTML.toLowerCase().indexOf("utc");
          const time = label.innerHTML.slice(index - 6, index - 1);
          if (settings.settings.showcst.value == "Append") {
            const cst = domData.cstLabel(CST.convertToCST(time));
            label.innerHTML += cst;
          } else {
            label.innerHTML =
              label.innerHTML.slice(0, index - 6) +
              CST.convertToCST(time) +
              label.innerHTML.slice(index + 3);
          }
        }
      }
    }
  },
  exces: {
    ".large": function(element) {
      const label = element.innerHTML;
      const time = CST.convertToCST(label.slice(0,5));
      element.innerHTML = time.slice(0,5) + element.innerHTML.slice(5);
      element.querySelector(".timezone").innerHTML = time.slice(6);
      document.querySelector(":root").style.setProperty("--time", `"CST"`);
    }
  }
};

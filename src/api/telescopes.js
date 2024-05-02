const req = {
  at: "32",
  cid: "649746",
  locale: "en",
  amplitudeDeviceID: null,
  sourcePageViewedURL: "https://app.slooh.com/missions/bySlooh1000",
};

async function getTelescopeData() {
  const telescopeData = await fetch("https://app.slooh.com/api/obs/getAllObservatoryStatus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Host: "app.slooh.com",
      Origin: "https://app.slooh.com",
      Referer: "https://app.slooh.com/missions/bySlooh1000"
    },
    body: JSON.stringify(req),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {return data})
    .catch((error) => console.error("ERROR"));
  console.log(telescopeData);
  return telescopeData;
}
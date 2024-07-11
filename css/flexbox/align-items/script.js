$(document).ready(() => {
  const classes = ["center", "start", "end", "space-between", "space-around"];
  let testBox = $("#testBox");
  const buttonCenter = $("#center");
  const buttonStart = $("#start");
  const buttonEnd = $("#end");
  const buttonStretch = $("#stretch");
  const buttonBaseline = $("#baseline");

  buttonCenter.on("click", () => {
    testBox.attr("class", "container center");
  });

  buttonStart.on("click", () => {
    testBox.attr("class", "container start");
    console.log("start is clicked");
  });

  buttonEnd.on("click", () => {
    testBox.attr("class", "container end");
  });

  buttonStretch.on("click", () => {
    testBox.attr("class", "container stretch");
  });

  buttonBaseline.on("click", () => {
    testBox.attr("class", "container baseline");
  });
});

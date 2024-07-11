$(document).ready(() => {
  const classes = ["center", "start", "end", "space-between", "space-around"];
  let testBox = $("#testBox");
  const buttonCenter = $("#center");
  const buttonStart = $("#start");
  const buttonEnd = $("#end");
  const buttonSpaceBetween = $("#space-between");
  const buttonSpaceAround = $("#space-around");

  buttonCenter.on("click", () => {
    testBox.attr("class", "container center");
  });

  buttonStart.on("click", () => {
    testBox.attr("class", "container start");
  });

  buttonEnd.on("click", () => {
    testBox.attr("class", "container end");
  });

  buttonSpaceBetween.on("click", () => {
    testBox.attr("class", "container space-between");
  });

  buttonSpaceAround.on("click", () => {
    testBox.attr("class", "container space-around");
  });
});

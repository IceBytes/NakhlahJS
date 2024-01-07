function isMobile() {
  return window.innerWidth <= 699;
}

document.addEventListener("DOMContentLoaded", function () {
  if (isMobile()) {
    const splitInstance = Split(["#split-0", "#split-1"], {
      sizes: [0, 100],
      gutterAlign: "end",
      minSize: 0,
      gutterSize: 13,
    });
    let isRight = true;
    const gutter = document.querySelector(".gutter");
    gutter.addEventListener("touchstart", function () {
      if (isRight) {
        splitInstance.setSizes([100, 0]);
        isRight = false;
      } else {
        splitInstance.setSizes([0, 100]);
        isRight = true;
      }
    });
  } else {
    Split(["#split-0", "#split-1"], {
      sizes: [50, 50],
      gutterAlign: "end",
      minSize: 0,
      gutterSize: 13,
    });
  }
});

import "./styles.css";

var percentage = document.getElementById("percentage-viewed");

function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  console.log(h[st] || b[st], h[sh] || b[sh], h.clientHeight);
  var percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  percentage.innerText = Math.floor(percent);
}
window.addEventListener("scroll", getScrollPercent);

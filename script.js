const hourEl = document.getElementById("hour");

const minutesEl = document.getElementById("minute");

const secondsEl = document.getElementById("second");

const ampmEl = document.getElementById("ampm");

function updateClock() {
  // body...
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "Am";


  if (h > 12) {
    h = h - 12;
    ampm = "Pm";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock()
  }, 1000)
}
updateClock();
document.getElementById("profil").addEventListener("click", function () {
  window.location.href = "informasipribadi.html";
});

document.getElementById("vector").addEventListener("click", function () {
  window.location.href = "cari.html";
});

function selectType(type, frameSelector) {
  var types = document.querySelectorAll(frameSelector + " div");
  types.forEach(function (t) {
    t.classList.remove("selected");
  });

  type.classList.add("selected");
}

function resetFilters() {
  var typeFrames = document.querySelectorAll(
    ".frame-2 div, .frame-4 div, .frame-5 div"
  );
  typeFrames.forEach(function (type) {
    type.classList.remove("selected");
  });

  var numberInputs = document.querySelectorAll('input[type="number"]');
  numberInputs.forEach(function (input) {
    input.value = "";
  });

  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;

    var highlight = document.querySelector(".highlight");
    highlight.style.left = "0%";
    var filledCircle = document.querySelector(".filled-circle");
    filledCircle.style.left = "0%";
    var elementKm = document.querySelector(".element-km");
    elementKm.textContent = "0KM";
  });
}

var highlight = document.querySelector(".highlight");
var track = document.querySelector(".track-2");
var filledCircle = document.querySelector(".filled-circle");
var elementKm = document.querySelector(".element-km");

let isDragging = false;

highlight.addEventListener("mousedown", (e) => {
  isDragging = true;
  highlight.classList.add("dragging");
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const trackRect = track.getBoundingClientRect();
  const newX = Math.min(trackRect.right, Math.max(trackRect.left, e.clientX));
  const percent = (newX - trackRect.left) / trackRect.width;

  highlight.style.left = percent * 100 + "%";
  filledCircle.style.left = percent * 100 + "%";

  const distance = percent * 10;
  elementKm.textContent = distance.toFixed(1) + "KM";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  highlight.classList.remove("dragging");
});

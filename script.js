const box = document.getElementById("box");

box.addEventListener("click", function(e) {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  const rect = box.getBoundingClientRect();
  ripple.style.left = (e.clientX - rect.left) + "px";
  ripple.style.top = (e.clientY - rect.top) + "px";

  box.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});

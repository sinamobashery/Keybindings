document.addEventListener("keydown", (e) => {
  if (e.altKey && e.code == "KeyL") {
    document.documentElement.scrollLeft += 50;
  } else if (e.altKey && e.code == "KeyK") {
    document.documentElement.scrollTop -= 50;
  } else if (e.altKey && e.code == "KeyJ") {
    document.documentElement.scrollTop += 50;
  } else if (e.altKey && e.code == "KeyH") {
    document.documentElement.scrollLeft -= 50;
  }
});

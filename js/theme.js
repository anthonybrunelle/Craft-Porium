/* VARIABLES */

let root = document.documentElement;
var darkMode = false;


/* THEME TOGGLE */

function themeToggle(){
  if(darkMode){
    root.style.setProperty("--text-color", "#222");
    root.style.setProperty("--background-color", "#fefefe");
    root.style.setProperty("--background-color-2", "#dedede");
    root.style.setProperty("--background-color-3", "#cdcdcd");
    darkMode = false;
  } else {
    root.style.setProperty("--text-color", "#eee");
    root.style.setProperty("--background-color", "#111");
    root.style.setProperty("--background-color-2", "#323232");
    root.style.setProperty("--background-color-3", "#434343");
    darkMode = true;
  }
}

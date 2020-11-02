var scroll = new SmoothScroll('a[href*="#"]');
document.body.onkeyup = function(hidecharpopup) {
    if (hidecharpopup.keyCode == 32) {
        var x = document.getElementById("charpopup");
        if (x.classList.contains("show")) {
            x.classList.remove("show");
            x.classList.add("hidden");
        }
    }
}
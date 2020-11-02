function popup(name, desc, subtext) {
    var x = document.getElementById("charpopup");
    x.className = "show";

    var popuptexts = document.getElementsByClassName("chartext");
    var image = document.getElementsByClassName("charimgcontainer")[0];
    if (name == "Pengi") {
        image.style.backgroundImage = "url('charpopup/pengi.jpg')";
    } else if (name == "Pengo") {
        image.style.backgroundImage = "url('charpopup/pengo.jpg')";
    } else if (name == "Spud") {
        image.style.backgroundImage = "url('charpopup/spud.jpg')";
    } else if (name == "Buck") {
        image.style.backgroundImage = "url('charpopup/buck.jpg')";
    } else {
        //pass
    }

    var textstemp;
    var element;
    for (textstemp = 0; textstemp < popuptexts.length; textstemp++) {
        element = popuptexts[textstemp];
        if (element.classList.contains('chartitle')) {
            element.innerHTML = name;
        } else if (element.classList.contains('charsubtext')) {
            element.innerHTML = subtext;
        } else if (element.classList.contains('chardesc')) {
            element.innerHTML = desc;
        } else {
            //pass
        }
    }

    var descfade = document.getElementById("fade-in-special");
    descfade.classList.add("flicker-in-1");

    var y = document.getElementsByClassName("chartyped");
    var i;

    function addtype(array, number) {
        array[number].classList.add("type")
    }
    for (i = 0; i < y.length; i++) {
        setTimeout(addtype(y, i), 10000);
    }
}

function pengi() {
    desc = "The sharp shooter out of the four playable characters in Pengi Game. The fastest shooter out of four.";
    subtext = "Ability: Streamlined Bullets";
    popup("Pengi", desc, subtext);
}

function pengo() {
    desc = "A fist projectile that explodes upon impact, creating smaller rings of explosions around the target.";
    subtext = "Ability: Burst Fist";
    popup("Pengo", desc, subtext);
}

function spud() {
    desc = "Creates shortranged waves that hit the enemy. He also has a double jump/spin attack.";
    subtext = "Ability: Slap!";
    popup("Spud", desc, subtext);
}

function buck() {
    desc = "Tri-projectile gun, superjumps, and buck exclusive charge blast. He also has the fastest dash.";
    subtext = "Ability: Tri gun";
    popup("Buck", desc, subtext);
} 


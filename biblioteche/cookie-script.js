function setCookie(cookie_name, cookie_value, cookie_validity_in_days) {
    const d = new Date();
    d.setTime(d.getTime() + (cookie_validity_in_days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    // Path=/ makes the cookie readable on all pages of the site.
    document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/;SameSite=Lax";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    console.log("Valore recuperato dal cookie:", user);
    
    let displayElement = document.getElementById('salutation');


    if (user != "") {
        // if coockie exist we ask name
        displayElement.innerText = 'Bentornato ' + user + ', è un piacere rivederti su Webcomm!';
        displayElement.style.backgroundColor = "antiquewhite";
    } else {
        // if coockie doesn't exist ask name
        user = prompt("Inserisci la tua email per il log in", "");
        if (user != "" && user != null) {
            setCookie("username", user, 1); // Save for 1 day
            displayElement.innerText = 'Benvenuto ' + user + ', grazie per la visita!';
            displayElement.style.backgroundColor = "antiquewhite";
        }
    }
    if (user != "") {
    displayElement.innerText = 'Ciao ' + user + '! Benvenuto in Web Opac CSBNO 📚';
    displayElement.style.padding = "15px";
    displayElement.style.margin = "10px 0";
    displayElement.style.borderRadius = "8px";
    displayElement.style.border = "1px solid #d4a373";
    displayElement.style.backgroundColor = "#fefae0";
    displayElement.style.color = "#606c38";
}
}

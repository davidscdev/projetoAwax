function mostraMenu() {
    console.log('MENU Clicado...');
    if (document.getElementById("menu-navegacao").style.display == "flex") {
        document.getElementById("menu-navegacao").style.display = "none";
    } else {
        document.getElementById("menu-navegacao").style.display = "flex";
    };
}
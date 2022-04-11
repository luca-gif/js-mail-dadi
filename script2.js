document.getElementById("btn").addEventListener("click", function() {
    let randomComputer = Math.ceil(Math.random() * 6);
    let randomUtente = Math.ceil(Math.random() * 6);
    const play = document.getElementById("play");

    if (randomUtente > randomComputer) {
        play.innerHTML = "Hai vinto";
    } else if (randomUtente < randomComputer) {
        play.innerHTML = "Hai perso";
    } else {
        play.innerHTML = "Pareggio";
    }
});
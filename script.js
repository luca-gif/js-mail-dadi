document.getElementById("btn").addEventListener("click", function() {
    const emailUtente = prompt("Digita la tua email");

    const utentiAutorizzati = [
        "luca@gmail.com",
        "marco@hotmail.com",
        "pippo@gmail.com",
        "sara@gmail.com",
    ];

    const email = document.querySelector("#email");

    let flag = 0;

    for (let i = 0; i < utentiAutorizzati.length; i++) {
        if (emailUtente === utentiAutorizzati[i]) {
            flag = 1;
        }
    }

    if (flag === 1) {
        email.innerHTML = "La tua mail è idonea";
    } else email.innerHTML = "La tua mail non è idonea";
});
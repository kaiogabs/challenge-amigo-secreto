let participantes = [];

function adicionarParticipante() {
    let nome = document.getElementById("nome").value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    if (participantes.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    participantes.push(nome);
    atualizarLista();
    document.getElementById("nome").value = "";
}

function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    participantes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortear() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos dois participantes para realizar o sorteio.");
        return;
    }

    let sorteado = participantes[Math.floor(Math.random() * participantes.length)];
    document.getElementById("resultado").textContent = `🎉 Sorteado: ${sorteado}!`;
}
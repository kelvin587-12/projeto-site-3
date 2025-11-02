document.getElementById("cadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede envio automático

    // Remove mensagens anteriores
    document.querySelectorAll(".erro").forEach(el => el.remove());

    let formValido = true;

    // Função auxiliar para mostrar mensagem de erro
    function mostrarErro(campo, mensagem) {
        const span = document.createElement("span");
        span.className = "erro";
        span.style.color = "red";
        span.style.fontSize = "0.9em";
        span.textContent = mensagem;
        campo.insertAdjacentElement("afterend", span);
    }

    // Coleta dos campos
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const data = document.getElementById("data");
    const endereco = document.getElementById("endereco");
    const cep = document.getElementById("cep");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");

    // Validações básicas
    if (nome.value.trim().length < 5) {
        mostrarErro(nome, "Digite o nome completo (mínimo 5 caracteres).");
        formValido = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        mostrarErro(email, "Digite um e-mail válido.");
        formValido = false;
    }

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf.value)) {
        mostrarErro(cpf, "CPF inválido. Use o formato 000.000.000-00.");
        formValido = false;
    }

    const telRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
    if (!telRegex.test(telefone.value)) {
        mostrarErro(telefone, "Telefone inválido. Use o formato (00) 00000-0000.");
        formValido = false;
    }

    if (!data.value) {
        mostrarErro(data, "Informe sua data de nascimento.");
        formValido = false;
    }

    if (endereco.value.trim().length < 5) {
        mostrarErro(endereco, "Digite um endereço completo.");
        formValido = false;
    }

    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cepRegex.test(cep.value)) {
        mostrarErro(cep, "CEP inválido. Use o formato 00000-000.");
        formValido = false;
    }

    if (cidade.value.trim() === "") {
        mostrarErro(cidade, "Informe sua cidade.");
        formValido = false;
    }

    if (estado.value === "") {
        mostrarErro(estado, "Selecione um estado.");
        formValido = false;
    }

    // Se tudo estiver válido:
    if (formValido) {
        alert("✅ Cadastro enviado com sucesso!");
        this.reset(); // Limpa o formulário
    } else {
        alert("⚠️ Verifique os campos destacados e corrija antes de enviar.");
    }
});
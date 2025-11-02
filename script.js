function mudarTexto() {
  const titulo = document.getElementById('titulo');
  titulo.innerText = "Obrigado por apoiar nossa causa! ";
  titulo.style.color = "blue"; // altera cor via DOM
}
const projetos = [
  { nome: "Campanha do Agasalho", descricao: "Arrecadação de roupas para famílias carentes." },
  { nome: "Reforço Escolar", descricao: "Aulas gratuitas para crianças do bairro." },
  { nome: "Cesta Solidária", descricao: "Distribuição mensal de alimentos básicos." }
];

function criarCard(projeto) {
  return `
    <div class="card" style="border:1px solid #ccc; padding:10px; margin:10px 0; border-radius:8px;">
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
    </div>
  `;
}

// gera HTML dinamicamente
const lista = document.getElementById('listaProjetos');
projetos.forEach(p => lista.innerHTML += criarCard(p));
function mostrarSecao(secao) {
  const conteudo = document.getElementById('conteudo');
  
  if (secao === 'perfil') {
    conteudo.innerHTML = "<h2>Meu Perfil</h2><p>Nome: João da Silva</p><p>Tempo de voluntariado: 1 ano</p>";
  } else if (secao === 'tarefas') {
    conteudo.innerHTML = "<h2>Minhas Tarefas</h2><ul><li>Distribuição de alimentos</li><li>Aula de reforço</li></ul>";
  } else if (secao === 'mensagens') {
    conteudo.innerHTML = "<h2>Mensagens</h2><p>Você não possui novas mensagens.</p>";
  }
}

// Exibe a seção inicial
mostrarSecao('perfil');
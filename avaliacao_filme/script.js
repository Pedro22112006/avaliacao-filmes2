document.getElementById("movieForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Pega os valores do formulário
  const mediaType = document.getElementById("mediaType").value;
  const mediaTitle = document.getElementById("mediaTitle").value;
  const mediaRating = parseFloat(document.getElementById("mediaRating").value);

  // Valida se o título e a nota são válidos
  if (mediaTitle.trim() === "" || isNaN(mediaRating) || mediaRating < 0 || mediaRating > 10) {
    alert("Por favor, insira um título válido e uma nota entre 0 e 10.");
    return;
  }

  // Cria o item da lista com a informação sobre o tipo (Filme ou Série)
  const listItem = document.createElement("li");
  listItem.innerHTML = `<span>${mediaType}: ${mediaTitle}</span> - Nota: ${mediaRating.toFixed(1)}`;

  // Adiciona o item à lista
  document.getElementById("list").appendChild(listItem);

  // Limpa os campos após a submissão
  document.getElementById("movieForm").reset();
});

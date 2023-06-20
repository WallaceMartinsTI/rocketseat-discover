function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  const textLight =
    "Foto de Mayk Brito, usando oculos escuro, jaqueta preta e fundo gradiente de roxo para azul.";
  const textDark =
    "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.";

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", textLight);
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", textDark);
  }
}

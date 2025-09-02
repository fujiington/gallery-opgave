
const myLoadTime = 200;
 

document.addEventListener('DOMContentLoaded', init);
 
function init() {
  setTimeout(() => {
    const data = fetchData();
    renderGallery(data);
  }, myLoadTime);
}
 

function renderGallery(data) {
  const container = document.getElementById("gallery"); 
  container.innerHTML = "";
 
  data.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("galleryCard");
 
    card.innerHTML = `
      <img src="${item.picture}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>${item.shortDescription}</p>
    `;
 

    card.querySelector("img").addEventListener("click", () => toggleDetailedView(card, item));
 
    container.appendChild(card);
  });
}
 
function toggleDetailedView(selectedCard, item) {
  const isDetailed = selectedCard.classList.contains("detailed-view");
  const allCards = document.querySelectorAll("article");
 
  if (!isDetailed) {
   
    allCards.forEach(card => {
      if (card === selectedCard) {
        card.classList.remove("galleryCard");
        card.classList.add("detailed-view");
        card.innerHTML = `
          <img src="${item.picture}" alt="${item.name}">
          <p>${item.description}</p>
        `;
    
        card.querySelector("img").addEventListener("click", () => toggleDetailedView(card, item));
      } else {
        card.style.display = "none";
      }
    });
  } else {

    allCards.forEach(card => {
      card.style.display = "block";
      if (card === selectedCard) {
        card.classList.remove("detailed-view");
        card.classList.add("galleryCard");
        card.innerHTML = `
          <img src="${item.picture}" alt="${item.name}">
          <h2>${item.name}</h2>
          <p>${item.shortDescription}</p>
        `;
      
        card.querySelector("img").addEventListener("click", () => toggleDetailedView(card, item));
      }
    });
  }
}
 
function fetchData() {
  return [
    {
      name: 'Elefant',
      picture: 'assets/img/elephant.jpg',
      description: 'Loxodonta africana, også kendt som afrikansk elefant, er verdens største landdyr...',
      shortDescription: 'Loxodonta africana, også kendt som afrikansk elefant.'
    },
    {
      name: 'Tiger',
      picture: 'assets/img/standard_tiger.jpg',
      description: 'Panthera tigris, også kendt som tigeren, er en stor kat, der er hjemmehørende i Asien...',
      shortDescription: 'Panthera tigris, også kendt som tigeren.'
    },
    {
      name: 'Tarantel',
      picture: 'assets/img/Brachypelma_smithi.jpg',
      description: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel...',
      shortDescription: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel.'
    },
    {
      name: 'Koala',
      picture: 'assets/img/_WW236934.jpg',
      description: 'Phascolarctos cinereus, også kendt som koala, er en pungdyrart, der er hjemmehørende i Australien...',
      shortDescription: 'Phascolarctos cinereus, også kendt som koala.'
    },
    {
      name: 'Haj',
      picture: 'assets/img/great-white.jpg',
      description: 'Carcharodon carcharias, også kendt som en hvidhaj eller great white haj...',
      shortDescription: 'Carcharodon carcharias, også kendt som en hvidhaj.'
    }
  ];
}
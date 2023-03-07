// Récupérer l'ID de l'offre d'emploi à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const offerId = urlParams.get('id');

// Récupérer la div où vous voulez afficher les détails de l'offre d'emploi
const divContainerOffer = document.querySelector('.container_offer');

// Utiliser l'API Fetch pour récupérer les données JSON de l'offre d'emploi correspondante
fetch(`http://localhost:3000/offer/${offerId}`)
  .then(response => response.json()) // Convertir la réponse en JSON
  .then(data => {
    // Afficher les détails de l'offre d'emploi dans la div correspondante
    const title = document.createElement('h2');
    title.textContent = `Nom de l'offre : ${data.offer_name}`;
    title.classList.add('sub_title');
    divContainerOffer.appendChild(title);

  

    // Ajouter d'autres éléments HTML pour afficher d'autres détails de l'offre d'emploi
  })
  .catch(error => console.error(error));
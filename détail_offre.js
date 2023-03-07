// Récupérer l'ID de l'offre d'emploi à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const offerId = urlParams.get('id');

// Récupérer la div où vous voulez afficher les détails de l'offre d'emploi
const divContainerOffer = document.querySelector('.container_offer');

// Utiliser l'API Fetch pour récupérer les données JSON de l'offre d'emploi correspondante
fetch(`http://localhost:5000/offer/${offerId}`)
  .then(response => response.json()) // Convertir la réponse en JSON
  .then(data => {
    // Afficher les détails de l'offre d'emploi dans la div correspondante
    const title = document.createElement('h2');
    title.textContent = `Nom de l'offre : ${data.offer_name}`;
    title.classList.add('sub_title');
    divContainerOffer.appendChild(title);

    const company = document.createElement('h4');
    company.textContent = `Entreprise : ${data.company_name}`;
    title.classList.add('h4');
    divContainerOffer.appendChild(company);

    const ulDetails = document.createElement('ul');
    ulDetails.classList.add('ul_details_offer');

    const liPubdate= document.createElement('li');
    liPubdate.classList.add('li_detail');
    liPubdate.textContent = `date de la publication de l'offre : ${data.publication_date}`;
    ulDetails.appendChild(liPubdate);
  

    const liCandidacydate= document.createElement('li');
    liCandidacydate.classList.add('li_detail');
    liCandidacydate.textContent = `date de candidature : ${data.candidacy_date}`;
    ulDetails.appendChild(liCandidacydate);

    const liType= document.createElement('li');
    liType.classList.add('li_detail');
    liType.textContent = `Type de contrat : ${data.type}`;
    ulDetails.appendChild(liType);

    const liStatus= document.createElement('li');
    liStatus.classList.add('li_detail');
    liStatus.textContent = `Status: ${data.name}`;
    ulDetails.appendChild(liStatus);

    const liCandidacyStatus= document.createElement('li');
    liCandidacyStatus.classList.add('li_detail');
    liCandidacyStatus.textContent = `Status de la candidature: ${data.candidature}`;
    ulDetails.appendChild(liCandidacyStatus);
    
    divContainerOffer.appendChild(ulDetails);

  

    // Ajouter d'autres éléments HTML pour afficher d'autres détails de l'offre d'emploi
  })
  .catch(error => console.error(error));
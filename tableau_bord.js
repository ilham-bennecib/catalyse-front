// Récupérer la div où vous voulez afficher les données d'offres d'emploi

const divOffresEmploi = document.querySelector('.container_card_tb');

// Utiliser l'API Fetch pour récupérer les données JSON depuis la route "/"
fetch('http://localhost:5000/')
  .then(response => response.json()) // Convertir la réponse en JSON
  .then(data => {
    // Parcourir les données d'offres d'emploi
    for (let i = 0; i < data.length; i++) {
      // Créer une carte pour chaque offre d'emploi
      const carteOffreEmploi = document.createElement('div');
      carteOffreEmploi.classList.add('card_tb');
      

      // Ajouter le titre de l'offre d'emploi à la carte
      const title = document.createElement('p');
      title.textContent = `nom de l'offre : ${data[i].offer_name}`;
      title.classList.add('card_offer');
      carteOffreEmploi.appendChild(title);

      // Ajouter la description de l'offre d'emploi à la carte
      const company = document.createElement('p');
      company.textContent = `entreprise : ${data[i].company_name}`;
      company.classList.add('card_offer');
      carteOffreEmploi.appendChild(company);

      // on creer un bouton pour le détail de l'offre
        const newButton = document.createElement('button');
        newButton.textContent = `Voir plus de détails`;
        // on lui ajoute la class card_button
        newButton.classList.add('card_button');
        carteOffreEmploi.appendChild(newButton);

      // Ajouter la carte à la div
      divOffresEmploi.appendChild(carteOffreEmploi);
    }
  })
  .catch(error => console.error(error))

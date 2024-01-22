// Liste de catégories de messages
const categories = {
    salutation: ["Hi!", "Hello!"],
    Motivational: ["Hope you have a great day!", "Keep going, you got it", "wish you a good day"],
    Bye: ["Bye", "See you soon",]
};
// Fonction pour générer un message aléatoire
function genererMessage() {
    // Sélectionnez une catégorie au hasard
    const categorieAleatoire = choisirCategorie(categories);

    // Sélectionnez un message au hasard dans la catégorie choisie
    const messageAleatoire = choisirElementAleatoire(categories[categorieAleatoire]);

    // Affichez le message généré dans le document HTML
    const messageOutput = document.getElementById("messageOutput"); //renvoie un objet Element représentant l'élément dont la propriété id 
    messageOutput.textContent = `${categorieAleatoire}: ${messageAleatoire}`;
}
// Fonction pour choisir une catégorie au hasard
function choisirCategorie(categories) {
    const categorieKeys = Object.keys(categories);
    const categorieIndex = Math.floor(Math.random() * categorieKeys.length);
    return categorieKeys[categorieIndex];
}

// Fonction pour choisir un élément au hasard dans un tableau
function choisirElementAleatoire(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}
// Gestion du panier
let panier = [];
let total = 0;

const boutonsAjouter = document.querySelectorAll('.ajouter-panier');
const listePanier = document.getElementById('liste-panier');
const totalAffiche = document.getElementById('total');

boutonsAjouter.forEach((bouton, index) => {
    bouton.addEventListener('click', () => {
        const produitNom = bouton.previousElementSibling.previousElementSibling.textContent;
        const produitPrix = parseInt(bouton.previousElementSibling.textContent.split(' ')[1]);
        
        // Ajouter au panier
        panier.push({ nom: produitNom, prix: produitPrix });
        total += produitPrix;
        
        // Mettre à jour le panier dans l'interface
        afficherPanier();
    });
});

function afficherPanier() {
    listePanier.innerHTML = '';
    panier.forEach(produit => {
        const li = document.createElement('li');
        li.textContent = `${produit.nom} - ${produit.prix} DZD`;
        listePanier.appendChild(li);
    });

    totalAffiche.textContent = total;
}

// Déclaration des variables

var etages = [];
dernierRang = "";
premierRang = "";

cadreGauche = document.getElementById('cadre-1');
cadreDroite = document.getElementById('cadre-2');
star = document.getElementById('star');

// Déclaration des fonctions

function Pied() {
    piedDroit = document.createElement('span');
    piedDroit.innerHTML = "<span>|</span><br><span>|</span>";
    piedDroit.className = "pied";
    cadreDroite.appendChild(piedDroit);
    piedGauche = document.createElement('span');
    piedGauche.innerHTML = "<span>|</span><br><span>|</span>";
    piedGauche.className = "pied";
    cadreGauche.appendChild(piedGauche);
}

function Etoile() {
    etoile = document.createElement('span');
    etoile.innerHTML = "<span>&#9733</span>";
    etoile.className = "etoile";
    star.appendChild(etoile);
}

function Rang(e) {                                                   // Créer les rangs en ajoutant le nombre de \
    rang = premierRang;                                              // Le nombre de \ du premier rang est défini en fonction de l'étage précédent
    for (let i = 0; i < e + 1 ; i++) {                               // Le nombre de \ est l'index du rang + 1
        rang = rang + "\\";                                          // On ajoute à chaque tour un \ au précédent
    }
    dernierRang = rang;                                              // Affectation de la valeur du dernier rang
    return "<span>" + rang + "</span><br>";                          // Retourne le contenu html du rang
}

function Etage(e) {                                                  // créer les étages en ajoutant le nombre de rangs correpondant à l'étage
    etage = "";                                 
    for (i = 0; i < e + 3; i++) {                                    // On appelle la fonction rang 3 fois de plus que l'index de l'étage
        etage = etage + Rang(i);                                     // On appelle la fonction rang avec l'index de chaque rang en parametètre et on ajoute la valeur retournée à celle de l'étage en cours
    }
    return etage;                                                    // Retourne contenu html complet de l'étage
}

// Début du programme

nbr_etages = prompt ('Combien de niveaux sur votre sapin ?');

for (i = 0; i < nbr_etages; i++) {
    etages.push(i);                                                     //remplissage du tableau des étages
} 

for (let i = 0; i < nbr_etages; i++ ) {                                 // Créer le nombre d'étages souhaité
    premierRang = dernierRang.substring(0, dernierRang.length -1);      // La valeur premier rang de l'étage est égale celle du dernier rang de l'étage précédent -1 caractère (caractère échapé donc même nombre de \ affiché)
    Etage(i);                                                           // On appelle la fonction étage avec l'index de l'étage en paramètre 
    brancheGauche = document.createElement('span');
    brancheGauche.innerHTML= Etage(i);
    brancheDroite = document.createElement('span');
    brancheDroite.innerHTML= Etage(i);
    cadreGauche.appendChild(brancheGauche);
    cadreDroite.appendChild(brancheDroite);
}

Pied();
Etoile();

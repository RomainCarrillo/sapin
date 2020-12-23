// Déclaration des variables

var etages = [];

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

function Rang(e) { //le nombre de \ par rang
    rang = "";
    for (let i = 0; i < e + 1 ; i++) {        
        rang = rang + "\\";
    }
    return "<span>" + rang + "</span><br>";
}

function Etage(e) { //créer les étages en ajoutant le nombre de rangs correpondant à l'étage
    etage = "";
    for (i = 0; i < e + 3; i++) { 
        etage = etage + Rang(i);
    }
    return etage;
}

// Début du programme

nbr_etages = prompt ('Combien de niveaux sur votre sapin ?');

for (i = 0; i < nbr_etages; i++) {
    etages.push(i); //remplissage du tableau des étages
} 

for (let i = 0; i < nbr_etages; i++ ) { //créer le nombre d'étages souhaité
    Etage(i);
    brancheGauche = document.createElement('span');
    brancheGauche.innerHTML= Etage(i);
    brancheDroite = document.createElement('span');
    brancheDroite.innerHTML= Etage(i);
    cadreGauche.appendChild(brancheGauche);
    cadreDroite.appendChild(brancheDroite);
}

Pied();
Etoile();

/*ajouter 1 élements au tableau a chaque nombre d'étage*/

/* Pour chaque étage 3 rangs + [i]	
	le premier rang de chaque étage contient [i]\
Pour chaque rang 1 \ que le précédent	
Après le dernier rang ajouter le pied */
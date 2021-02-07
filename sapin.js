// Déclaration des variables

curseur = document.getElementById('etages');
cadreGauche = document.getElementById('cadre-1');
cadreDroite = document.getElementById('cadre-2');
star = document.getElementById('star');
bandeau = document.getElementById('bandeau');

var etages = [];
nbrEtages = "";
dernierRang = "";
premierRang = "";

// Déclaration des fonctions


function CreationEtages() {
    for (let i = 0; i < nbrEtages; i++ ) {                                 // Créer le nombre d'étages souhaité en faisant une itiration par étage
        PremierRang();
        etage = Etage(i);                                                   // On appelle la fonction étage avec l'index de l'étage en paramètre et on stocke la valeur retourée pour un usage ultérieur
        ElmtHtmlEtage(cadreGauche, etage);
        ElmtHtmlEtage(cadreDroite, etage);
    }
}

function Pied(c) {
    pied = document.createElement('span');
    pied.innerHTML = "<span>|</span><br><span>|</span>";
    pied.className = "pied";
    c.appendChild(pied);
}

function Etoile() {
    etoile = document.createElement('span');
    etoile.innerHTML = "<span>&#9733</span>";
    etoile.className = "etoile";
    star.appendChild(etoile);
}

function Bandeau() {
    texte = document.createElement('p');
    texte.innerHTML = "<p>Joyeux Noël !</p>";
    bandeau.appendChild(texte);
}

function texte() {
    texte = document.createElement('span');
    texte.innerHTML = "<span>&#9733</span>";
    texte.className = "texte";
    star.appendChild(texte);
}

function ElmtHtmlEtage(cadre, etage) {
    elmt = document.createElement('span');
    elmt.innerHTML= etage;
    cadre.appendChild(elmt);
}

function Rang(e) {                                                      // Créer les rangs en ajoutant le nombre de \
    rang = premierRang;                                               // Le nombre de \ du premier rang est défini en fonction de l'étage précédent
    for (let i = 0; i < e + 1 ; i++) {                                  // Le nombre de \ est l'index du rang + 1
        rang = rang + "\\";                                             // On ajoute à chaque tour un \ au précédent
    }
    dernierRang = rang;                                                 // Affectation de la valeur du dernier rang
    return "<span>" + rang + "</span><br>";                             // Retourne le contenu html du rang
}

function Etage(e) {                                                     // créer les étages en ajoutant le nombre de rangs correpondant à l'étage
    etage = "";                                 
    for (i = 0; i < e + 3; i++) {                                       // On appelle la fonction rang 3 fois de plus que l'index de l'étage
        etage = etage + Rang(i);                                        // On appelle la fonction rang avec l'index de chaque rang en parametètre et on ajoute la valeur retournée à celle de l'étage en cours
    }
    return etage;                                                       // Retourne contenu html complet de l'étage
}

function PremierRang() {                                                // Définit la valeur du premier en rang en fonction du celle du dernier rang de l'étage précedent
    premierRang = dernierRang.substring(0, dernierRang.length -1);      // La valeur premier rang de l'étage est égale celle du dernier rang de l'étage précédent -1 caractère (caractère échapé donc même nombre de \ affiché)
    return premierRang;
}

function Nettoyage() {
    Vidange(cadreDroite);
    Vidange(cadreGauche);
    Vidange(star);
    Vidange(bandeau);    
    nbrEtages = 0;
    premierRang = "";
    dernierRang = "";
}

function Vidange(a) {
    a.innerHTML = "";
    return a;
}

function Sapin() {
    Nettoyage();
    nbrEtages = curseur.value;
    CreationEtages();
    Pied(cadreGauche);
    Pied(cadreDroite);
    Etoile();
    Bandeau();
}

// Début du programme

curseur.addEventListener("input", Sapin)
;

/* 
Ajouter une fonction pour retirer x étages où x est la différence entre le nombre d'étages actuel et le nombre d'étages souhaité (itération sur x avec removechild)
Ajouter une condition qui compare les nombre d'étages actuel au nombre d'étage souhaité et appelle soit la fonction pour retirer des étages soit la fonction pour ajouter des étages
*/
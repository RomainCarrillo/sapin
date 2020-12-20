var etages = [];
nbr_etages = prompt ('Combien de niveaux sur votre sapin ?');
niveau = document.createElement('p')


cadre = Document.querySelectorAll('.cadre');

for (i = 0; i < nbr_etages; i++) {
    etages.push(i); //remplissage du tableau des étages
} 

function Rang(e) {
    for (let i = 0; i < e + 1; i++) {        
        console.log("\\"); 
    }
}

function Etage(e) {
    for (i = 0; i < e + 3; i++) {
        Rang(i);
        console.log("\n");
    }
}

for (let i = 0; i < nbr_etages; i++ ) {
    Etage(i);
}

function Pied() {

}

/*ajouter 1 élements au tableau a chaque nombre d'étage*/

/* Pour chaque étage 3 rangs + [i]	
	le premier rang de chaque étage contient [i]\
Pour chaque rang 1 \ que le précédent	
Après le dernier rang ajouter le pied */
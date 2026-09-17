import { apprenants } from './data.js';

export function normaliserNom(nom) {
    return String(nom).trim().toLowerCase();
}

export function validerResultat(jour, exercicesTermines, totalExercices, challengeTermine) {
    if (jour < 1 || jour > 7) {
        console.log("Erreur: Le jour doit être entre 1 et 7.");
        return false;
    }
    if (exercicesTermines < 0 || totalExercices < 0) {
        console.log("Erreur: Le nombre d'exercices terminés ne peut pas etre negative");
        return false;
    }
    if (exercicesTermines > totalExercices) {
        console.log("Erreur: Le nombre d'exercices terminés ne peut pas dépasser le total proposé.");
        return false;
    }
    if (challengeTermine !== Boolean){
        console.log("Erreur: must be boolien value ");
        return false;
    }
    return true;
}

export function ajouterApprenant(id, nomComplet, ville) {
    for (let i of apprenants) {
        if (id === i.id) {
            console.log("ID is already existing");
            return false;
        }
    }
    let obj = {
        id: id,
        nomComplet: nomComplet,
        ville: ville,
        resultats: [],
    }
    apprenants.push(obj);
    console.log("Added successfully");
    return true;
}

export function rechercherApprenant(critere){
    for ( let item of apprenants ){
        if ( normaliserNom(critere) === normaliserNom(item.nomComplet) || critere === item.id){
            return item;
        } 
    }
    console.log("Apprenant non trouvé");
        return null;
} 
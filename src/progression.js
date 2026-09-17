import { apprenants } from './data.js';

export function normaliserNom(nom) {
    return nom.trim().toLowerCase();
}

export function validerResultat(jour, exercicesTermines, totalExercices) {
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
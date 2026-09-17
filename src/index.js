import promptSync from "prompt-sync";
import {
  ajouterApprenant,
  rechercherApprenant,
  calculerProgression,
} from "./progression.js";

const prompt = promptSync();
let applicationActive = true;

while (applicationActive) {
  console.log("\n=== GESTION DES APPRENANTS ===");
  console.log("1. Ajouter un apprenant");
  console.log("2. Rechercher un apprenant");
  console.log("3. Calculer la progression");
  console.log("0. Quitter");
  console.log("==============================");

  let choix = prompt("Veuillez choisir une option (0-3) : ");

  switch (choix) {
    case "1":
      console.log("\n--- Ajout d'un apprenant ---");

      break;
    case "2":
      console.log("\n--- Recherche ---");

      break;
    case "3":
      console.log("\n--- Calcul de Progression ---");

      break;
    case "0":
      console.log("Fermeture de l'application. Au revoir !");
      applicationActive = false;
      break;
    default:
      console.log("Erreur : Option invalide.");
  }
}

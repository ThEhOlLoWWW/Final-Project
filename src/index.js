import promptSync from 'prompt-sync';
import { normaliserNom } from './progression.js';
import { validerResultat } from './progression.js';
import { ajouterApprenant } from './progression.js';

console.log(normaliserNom("   lOgOs   "));
validerResultat(8, 15, 10); // Should print an error and return false
validerResultat(3, 10, 20); // Should return true

// Test 1: Sara's ID (Should fail)
ajouterApprenant(1, "Hackerman", "Oujda");

// Test 2: New ID (Should succeed)
ajouterApprenant(3, "LOGOS", "Nador");

import { rechercherApprenant } from './progression.js';

console.log("--- TEST 1: The Perfect ID ---");
console.log(rechercherApprenant(1)); 

console.log("\n--- TEST 2: The Messy Name ---");
console.log(rechercherApprenant("   sArA dEv   ")); 

console.log("\n--- TEST 3: The Ghost ---");
console.log(rechercherApprenant(99));

import { calculerProgression } from './progression.js';

console.log(calculerProgression(1));
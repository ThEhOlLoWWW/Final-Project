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
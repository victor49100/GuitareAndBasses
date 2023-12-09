export interface Guitar {
  id: string;
  name: string;
  description: string;
  images: string[];
  corps: string; // Corps
  tables?: string; // Tables
  finition: string; // Finition
  manches: string; // Manches
  touche: string; // Touche
  radius: string; // Radius
  frettes: string; // Frettes
  diapason: string; // Diapason
  sillet: string; // Sillet
  chevalet: string; // Chevalet
  microManche?: string; // Micro manche
  mecaniques?: string;
  microMilieu?: string; // Micro milieu (rendu facultatif avec "?")
  microChevalet: string; // Micro chevalet
  potentiometres: string; // Potentiomètres
  selecteur: string; // Sélecteur
  attacheCourroie: string; // Attache courroie
}

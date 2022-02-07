var canevas, boutonCommencer, boutonCrayon, crayonTrace, enCours;

/**
 * Fonction exécutée une fois, au départ
 */
function actions_initiales() {
  document.body.style.paddingLeft="30px";
  enCours = false;
  crayonTrace = true;
  boutonCommencer = select('#'+'commencer');
  siClicPrudent("boutonCommencer",boutonCommencer,"clic_commencer",clic_commencer);
  boutonCrayon = select('#'+'crayon');
  siClicPrudent("boutonCrayon",boutonCrayon,"clic_crayon",clic_crayon);
  cacher_boutons_du_cadre();
}

/**
 * Fonction exécutée périodiquement, de façon répétée
 */
function actions_en_boucle() {
}

/**
 * Décrire cette fonction…
 */
function clic_commencer() {
  if (enCours) {
    transfertListeEntreCadresF(['recommencer'],'cadreTRACKER');
  } else {
    enCours = true;
    transfertListeEntreCadresF(['commencer'],'cadreTRACKER');
  }
}

/**
 * Décrire cette fonction…
 */
function clic_crayon() {
  crayonTrace = !crayonTrace;
  if (crayonTrace) {
    fixeContenuPrudent("boutonCrayon",boutonCrayon,'Lever le crayon');
  } else {
    fixeContenuPrudent("boutonCrayon",boutonCrayon,'Baisser le crayon');
  }
  transfertListeEntreCadresF(['crayon', crayonTrace],'cadreTRACKER');
}

/**
 * Décrire cette fonction…
 */
function cacher_boutons_du_cadre() {
  if (retournerSiCadreCharge('cadreTRACKER',"GENERIQUE")) {
    transfertListeEntreCadresF(['initialiser'],'cadreTRACKER');
  } else {
    faireDelaiPrudent("cacher_boutons_du_cadre",cacher_boutons_du_cadre,0.1);
  }
}

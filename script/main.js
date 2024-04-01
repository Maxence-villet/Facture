
let prixTotal = 0;


ajouter.onclick = function() {

    let Nom = document.getElementsByClassName("nom")[0].value;
    let quantite = document.getElementsByClassName("qte")[0].value;
    let prixUnitiare = document.getElementsByClassName("prixU")[0].value;
    let total = document.getElementsByClassName("total")[0].value;

    if (Nom === ""  ||  quantite === "" || prixUnitiare === ""){
  
      alert("veuillez remplir tout les champs");
  
    } else {
        
        let tableBody = document.querySelector("tbody");
        
        let nouvelleLigne = document.createElement("tr");

        // Créer les cellules et les ajouter à la ligne
        let celluleNom = document.createElement("td");
        celluleNom.textContent = Nom;
        nouvelleLigne.appendChild(celluleNom);
    
        let celluleQuantite = document.createElement("td");
        celluleQuantite.textContent = quantite;
        nouvelleLigne.appendChild(celluleQuantite);
    
        let cellulePrixUnitiare = document.createElement("td");
        cellulePrixUnitiare.textContent = prixUnitiare;
        nouvelleLigne.appendChild(cellulePrixUnitiare);
    
        let celluleTotal = document.createElement("td");
        celluleTotal.textContent = total;
        nouvelleLigne.appendChild(celluleTotal);
    
        // Ajouter la ligne au corps du tableau
        tableBody.appendChild(nouvelleLigne);

        prixTotal = prixTotal + parseInt(total);
        console.log(prixTotal);


        document.getElementsByClassName("totalAchat")[0].value = prixTotal;
    }
  
  };
  

refresh.onclick = function() {

    let quantite = document.getElementsByClassName("qte")[0].value;
    let prixUnitiare = document.getElementsByClassName("prixU")[0].value;
    let total = quantite * prixUnitiare;

    if (quantite === "" || prixUnitiare === ""){
    
        alert("veuillez remplir les champs : Quantité, Prix Unitaire");
    
    } else {

        document.getElementsByClassName("total")[0].value  = total;

    }

    
    
};
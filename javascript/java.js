// Données initiales
let data = JSON.parse(localStorage.getItem("element")) || [{
  id: 1,
  name: "ahmed",
  role: "Réceptionnistes",
  email: "ahmed@gmail.com",
  tele: "0689873354",
  dateDiffDays: 0,
  image: "https://yt3.googleusercontent.com/ytAIdro_n7Q8Nbuwr5RuqRCcLaj3xDIi_JAv87uoEFfBs5eh0kMLc=s900-c-k-c0x00ffffff-no-rj"
}];

// Afficher les données dans le tableau
function displaydata() {
  localStorage.setItem("element", JSON.stringify(data));

  let contenu = document.querySelector(".contenu");
  let content = "";

  data.forEach((object, index) => {
    content += `
      <tr>
        <td>${object.id}</td>
        <td><img src="${object.image}" width="50" height="50" style="border-radius:50%"></td>
        <td>${object.name}</td>
        <td>${object.role}</td>
        <td>${object.email}</td>
        <td>${object.tele}</td>
        <td>${object.dateDiffDays} jours</td>
      </tr>
    `;
  });

  contenu.innerHTML = content;
}

// Afficher le formulaire d'ajout
function creat() {
  document.querySelector(".add").style.display = "none";
  document.querySelector(".ajouter").style.display = "block";
}

// Ajouter un nouvel employé
function add() {
  let name = document.querySelector("#nom").value;
  let role = document.querySelector("#role").value;
  let email = document.querySelector("#email").value;
  let tele = document.querySelector("#tele").value;
  let img = document.querySelector("#img").value;
  let startDate = document.querySelector("#start").value;
  let endDate = document.querySelector("#now").value;

  // Vérifier que les dates sont correctes
  if (!startDate || !endDate || name || role || email || tele || img ) {
    alert("Veuillez remplire tout les information!");
    return;
  }



  let newperson = {
    id: data.length + 1,
    name: name,
    role: role,
    email: email,
    tele: tele,
    image: img,
  
  };

  data.push(newperson);

  // Réafficher le tableau
  displaydata();

  // Cacher le formulaire
  document.querySelector(".add").style.display = "block";
  document.querySelector(".ajouter").style.display = "none";

  // Vider les champs du formulaire
  document.querySelector("#nom").value = "";
  document.querySelector("#role").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#tele").value = "";
  document.querySelector("#img").value = "";
  document.querySelector("#start").value = "";
  document.querySelector("#now").value = "";
}

displaydata();

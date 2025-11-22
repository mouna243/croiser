 let data = [];
console.log(data);

// Afficher les données dans le tableau
function displaydata() {
    console.log("disply function");
    const content = document.querySelector(".content")
    data.forEach(function (object) {
        const Worker = document.createElement("div")
        Worker.innerHTML="";
        Worker.classList.add = "worker"
        Worker.innerHTML = `
             <img src=${object.img} alt="${object.name}" class="w-[50px] h-[50px] rounded-[50px]">
               <div class="info" >
        <p><strong>Rôle :</strong> ${object.role}</p>
        <p><strong>Email :</strong> ${object.email}</p>
        <p><strong>Téléphone :</strong> ${object.tele}</p>
        <p><strong>L'entreprise :</strong> ${object.local}</p>
        <p><strong>Son role dans le travaille :</strong> ${object.nameEx}</p>
        <p><strong>Début :</strong> ${object.startDate}</p>
        <p><strong>Fin :</strong> ${object.endDate}</p>
    </div>

         `
        content.appendChild(Worker)
    })

    // let info = document.querySelector(".info")
    // info.addEventListener("click", () => {
    //     info.style.display = "block"
    // })
}

// Afficher le formulaire d'ajout
function creat() {
    document.querySelector(".add").style.display = "none";
    document.querySelector(".ajouter").style.display = "block";
}
// for le managment des erreur 
function check(think) {
    console.log(think)
}
// Ajouter un nouvel employé
function add() {
    console.log("add function")
    let name = document.querySelector("#nom").value;
    let role = document.querySelector("#role").value;
    let email = document.querySelector("#email").value;
    let tele = document.querySelector("#tele").value;
    let img = document.querySelector("#img").value;
    let local = document.querySelector("#local").value;
    let nameEx = document.querySelector("#nameEx").value;
    let startDate = document.querySelector("#start").value;
    let endDate = document.querySelector("#end").value;
    check(endDate)

    // Vérifier que les dates sont correctes
    if (!startDate || !endDate || !name || !role || !email || !tele || !img || !nameEx || !local) {
        alert("Veuillez remplire tout les information!");
        return;
    } else {
        console.log("la formule a ete bien remplie")
    }


    let newperson = {
        name: name,
        role: role,
        email: email,
        tele: tele,
        img: img,
        nameEx: nameEx,
        local: local,
        startDate: startDate,
        endDate: endDate

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

function workers() {

    displaydata()
}
function formehidden(){
    document.querySelector(".ajouter").style.display ="none"
    document.querySelector(".add").style.display ="block"
}

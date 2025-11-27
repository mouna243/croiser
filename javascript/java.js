let index = 0;
let experiences = []

// data pour tester
let data = [{
        id: 1,
        name: "Ahmed El Fassi",
        role: "Nettoyage",
        email: "ahmed.fassi@gmail.com",
        tele: "0600000001",
        img: "https://randomuser.me/api/portraits/men/11.jpg",
        local: "unassigned",
        experiences: [{
            localEx: "Hotel Casablanca",
            nameEx: "Reception Manager",
            startDate: "2022-01-01",
            endDate: "2023-01-01",
        }]
    },
    {
        id: 2,
        name: "Sara Benali",
        role: "IT",
        email: "sara.benali@gmail.com",
        tele: "0600000002",
        img: "https://randomuser.me/api/portraits/women/12.jpg",
        local: "unassigned",
        experiences: [{
            localEx: "IT Department",
            nameEx: "Network Technician",
            startDate: "2021-03-01",
            endDate: "2022-12-31",
        }]
    },
    {
        id: 3,
        name: "Youssef Idrissi",
        role: "Manager",
        email: "y.idrissi@gmail.com",
        tele: "0600000003",
        img: "https://randomuser.me/api/portraits/men/13.jpg",
        local: "unassigned",
        experiences: [{
            localEx: "Hotel Casablanca",
            nameEx: "General Manager",
            startDate: "2020-06-01",
            endDate: "2024-06-01",
        }]
    },
    {
        id: 4,
        name: "Khadija El Amrani",
        role: "Securite",
        email: "khadija.amrani@gmail.com",
        tele: "0600000004",
        img: "https://randomuser.me/api/portraits/women/14.jpg",
        local: "unassigned",
        experiences: [{
            localEx: "Security Department",
            nameEx: "Security Guard",
            startDate: "2023-01-01",
            endDate: "2024-01-01",
        }]
    }
];


console.log(data);
let compt = 0
console.log(experiences)
// Afficher les données dans le tableau
function displaydata() {
    console.log("disply function");
    const content = document.querySelector(".content")
    let filtredData = data.filter(d => d.local === "unassigned");
    content.innerHTML = ""
    filtredData.forEach(function (object) {
        const Worker = document.createElement("div")
        Worker.classList.add("worker")
        Worker.innerHTML = `
             <img src=${object.img} alt="${object.name}" class="w-[50px] h-[50px] rounded-[50px]">
               <div class="info" >
        <p><strong>Nom :</strong> ${object.name}</p>
        <p><strong>Rôle :</strong> ${object.role}</p>

    </div>

         `
        Worker.style.borderRadius = "40px"
        Worker.style.backgroundColor = "#fda1c9"
        Worker.style.padding = "20px"
        Worker.style.width = "300px"
        Worker.style.display = "flex"
        Worker.style.margin = "20px"
        content.appendChild(Worker)
    })

}

displaydata();

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
    let id = index++
    let name = document.querySelector("#nom").value;
    let role = document.querySelector("#role").value;
    let email = document.querySelector("#email").value;
    let tele = document.querySelector("#tele").value;
    let img = document.querySelector("#img").value;
    const addexp = document.querySelector(".addexp")
    const exps = document.querySelector(".exps")
    // check(endDate)


    const toutexp = exps.querySelectorAll(".exp")
    Array.from(toutexp).forEach(exp => {
        let localEx = exp.querySelector("#local").value;
        let nameEx = exp.querySelector("#nameEx").value;
        let startDate = exp.querySelector("#start").value;
        let endDate = exp.querySelector("#end").value;

        if (!startDate || !endDate || !nameEx || !localEx) {
            alert("replire tout les champs de l'experience")
        } else {
            console.log("l'experience a ete bien remplie")

        }
        let experience = {
            localEx: localEx,
            nameEx: nameEx,
            startDate: startDate,
            endDate: endDate
        }

        experiences.push(experience)
    })
    // Vérifier que les dates sont correctes
    if (!name || !role || !email || !tele || !img) {
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
        experiences: experiences,
        local: "unassigned"
    };

    data.push(newperson);

    // reafficher le tableau
    displaydata();


    // pour fermer la formule 
    formehidden()

    // pour vider les champs du formulaire
    document.querySelector("#nom").value = "";
    document.querySelector("#role").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#tele").value = "";
    document.querySelector("#img").value = "";
    document.querySelector("#start").value = "";
    document.querySelector("#end").value = "";
}

function formehidden() {
    document.querySelector(".ajouter").style.display = "none"
    document.querySelector(".add").style.display = "block"
}

function displayforadd() {
    const all = document.querySelectorAll(".all");
    const element = document.querySelectorAll(".element");
    for (let i = 0; i < all.length; i++) {
        all[i].addEventListener("click", function () {
            element.forEach(e => e.hidden = true)
            element[i].hidden = !element[i].hidden
            return;
        })
    }
}



function creat() {
    const form = document.querySelector('.ajouter');
    const arrier = document.getElementById('arrier');

    form.classList.add('active');
    arrier.classList.add('active');
}

function formehidden() {
    const form = document.querySelector('.ajouter');
    const arrier = document.getElementById('arrier');

    form.classList.remove('active');
    arrier.classList.remove('active');
}


// Close form when clicking on arrier
document.getElementById('arrier').addEventListener('click', function () {
    formehidden();
});

const addexp = document.querySelector(".addexp")

addexp.addEventListener("click", () => {
    const exps = document.querySelector(".exps")
    const exp = document.createElement("div")
    exp.className = "exp border border-black p-4 rounded-lg bg-red-500 w-full"
    exp.innerHTML = ` <div class="input">

                                <label for="local">l'entreprise</label><br>
                                <input type="text" placeholder="entre le locale de votre experience" id="local"
                                    required><br>
                            </div>
                            <div class="input">

                                <label for="">le nom de post</label><br>
                                <input type="text" placeholder="entre le nom de poste de votre l'experience" id="nameEx"
                                    required><br>
                            </div>
                            <div class="input">

                                <label for="start">date de debut</label><br>
                                <input type="date" id="start" required><br>
                            </div>
                            <div class="input">

                                <label for="end">date de fin</label><br>
                                <input type="date" id="end" required><br>
                            </div>`
    exps.appendChild(exp)

})

function serveurs() {
    displayforadd();
    const content = document.querySelector(".serveurs.element");
    const emp = document.querySelector(".empSER");

    content.innerHTML = "";
    let filtredData = data.filter(d => d.role === "IT" && d.local !== "IT")
    filtredData.forEach(object => {

        const worker = document.createElement("div");
        worker.classList.add("worker");
        worker.dataset.id = object.id;
        worker.innerHTML = `
            <img src="${object.img}" alt="${object.name}" class="w-[50px] h-[50px] rounded-[50px]">
           
        `;

        content.appendChild(worker);

        worker.addEventListener("click", function () {
            let picked = document.createElement("div")
            picked.classList.add("emploi")
            object.local = "IT"
            picked.local = object.local
            picked.dataset.id = object.id
            picked.innerHTML = `
            <img src="${object.img}" alt="${object.name}" class="w-[50px] h-[50px] rounded-[50px]">
            <button class="delet bg-red-500 border rounded-[20px] h-[30px] w-[30px] text-[20px]"><i class="fa-solid fa-x"></i></button>
        `;
            picked.addEventListener("click", function () {
                content.appendChild(worker)
            })
            emp.appendChild(picked);
            const element = document.querySelectorAll(".element")
            element.forEach(e => e.hidden = "true")
            displaydata();
        });
    });
};
const delet = document.querySelector(".delet").document.addEventListener("click", () => {

})

function archives() {
    displayforadd();

    const content = document.querySelector(".archives.element");
    const emp = document.querySelector(".empA");

    content.innerHTML = "";
    let filtredData = data.filter(d => d.role !== "Nettoyage" && d.local != "archive")
    filtredData.forEach(object => {
        const worker = document.createElement("div");
        worker.classList.add("worker");
        worker.dataset.id = object.id;
        worker.innerHTML = `
            <img src="${object.img}" alt="${object.name}" class="w-[50px] h-[50px] rounded-[50px]">
        `;

        content.appendChild(worker);

        worker.addEventListener("click", function () {
            if (emp.querySelector(`[data-id="${object.id}"]`)) return;

            const picked = document.createElement("div");
            picked.classList.add("emploi");
            object.local = "archive"
            picked.local = object.local
            picked.dataset.id = object.id;
            picked.innerHTML = `
            <img src="${object.img}" alt="${object.name}" class="w-[50px] h-[50px] rounded-[50px]">
             <button class="delet bg-red-500 border rounded-[20px] h-[30px] w-[30px] text-[20px]"><i class="fa-solid fa-x"></i></button>
           
        `;


            picked.addEventListener("click", function () {
                content.appendChild(worker);
            });

            emp.appendChild(picked);
            const element = document.querySelectorAll(".element");
            element.forEach(e => e.hidden = true)
            displaydata();
        });
    });
};
function securite() {
    displayforadd();

    const content = document.querySelector(".securite.element");
    const emp = document.querySelector(".empS");

    content.innerHTML = "";
let filtredData = data.filter(d => d.role === "securite" && d.local !== "securite")
    filtredData.forEach(object => {

        const worker = document.createElement("div");
        worker.classList.add("worker");
        worker.dataset.id = object.id;
        worker.innerHTML = `
            <img src="${object.img}" alt="${object.name}" class="w-[50px] h-[50px] rounded-[50px]">
        `;
        content.appendChild(worker);

        worker.addEventListener("click", function () {
            if (emp.querySelector(`[data-id="${object.id}"]`)) return;

            const picked = document.createElement("div");
            picked.classList.add("worker");
            object.local = "securite"
            picked.local = object.local
            picked.dataset.id = object.id;
            picked.innerHTML = `
            <img src="${object.img}" alt="${object.name}" class="w-[50px] h-[50px] rounded-[50px]">
             <button class="delet bg-red-500 border rounded-[20px] h-[30px] w-[30px] text-[20px]"><i class="fa-solid fa-x"></i></button>
           
        `;

            emp.appendChild(picked);
            const element = document.querySelectorAll(".element")
            element.forEach(e => e.hidden = true);
            displaydata()
        });
    });
}
function personnel() {
    displayforadd();

    const content = document.querySelector(".personnel.element");
    const emp = document.querySelector(".empP");

    content.innerHTML = "";
  data.forEach(object => {
        const worker = document.createElement("div");
        worker.classList.add("worker");
        worker.dataset.id = object.id;
        worker.innerHTML = `
            <img src="${object.img}" alt="${object.name}" class="w-[50px] h-[50px] rounded-[50px]">
        `;
        content.appendChild(worker)
        worker.addEventListener("click", function () {
            if (emp.querySelector(`[data-id="${object.id}"]`)) return;
            const picked = document.createElement("div")
            picked.classList.add("emploi")
            object.local = "personnel"
            picked.local = object.local
            picked.dataset.id = object.id;
            picked.innerHTML = worker.innerHTML;

            emp.appendChild(picked);
            const element = document.querySelectorAll(".element");
            element.forEach(e => e.hidden = true)
            displaydata();

        })

    });
}
// Name: Maryum
// Reg No: __________

let form = document.getElementById("regForm");

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let programInput = document.getElementById("program");
let semesterInput = document.getElementById("semester");

let pName = document.getElementById("pName");
let pEmail = document.getElementById("pEmail");
let pProgram = document.getElementById("pProgram");
let pSemester = document.getElementById("pSemester");

let studentList = document.getElementById("studentList");

nameInput.addEventListener("input", function() {
    pName.textContent = nameInput.value;
});

emailInput.addEventListener("input", function() {
    pEmail.textContent = emailInput.value;
});

programInput.addEventListener("input", function() {
    pProgram.textContent = programInput.value;
});

semesterInput.addEventListener("input", function() {
    pSemester.textContent = semesterInput.value;
});

form.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("programError").textContent = "";
    document.getElementById("semesterError").textContent = "";

    let valid = true;

    if (nameInput.value.trim() === "") {
        document.getElementById("nameError").textContent = "Enter Name";
        valid = false;
    }

    if (emailInput.value.trim() === "") {
        document.getElementById("emailError").textContent = "Enter Email";
        valid = false;
    }

    if (programInput.value === "") {
        document.getElementById("programError").textContent = "Select Program";
        valid = false;
    }

    if (semesterInput.value === "") {
        document.getElementById("semesterError").textContent = "Enter Semester";
        valid = false;
    }

    if (valid) {

        let li = document.createElement("li");

        li.textContent =
            nameInput.value + " - " +
            programInput.value +
            " - Semester " +
            semesterInput.value;

        studentList.appendChild(li);

        form.reset();

        pName.textContent = "-";
        pEmail.textContent = "-";
        pProgram.textContent = "-";
        pSemester.textContent = "-";
    }
});

document.getElementById("darkBtn").addEventListener("click", function() {

    document.body.classList.toggle("dark");

});
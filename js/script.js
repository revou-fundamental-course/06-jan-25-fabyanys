function replaceName() {
    let name = prompt("Halo, nama kamu siapa?", "");
    document.getElementById("user-greating").innerHTML = name;
}

replaceName();

function validateForm() {
    const fullName = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["message"].value;

    if (fullName == "" || birthDate == "" || gender == "" || message == "") {
        alert("Semua field harus diisi!");
        return false;
    }

    // setSenderUI(fullName, birthDate, gender, message);

    setSenderUI(fullName, birthDate, gender, message);

    return false;

}

function setSenderUI(fullName, birthDate, gender, message) {
    document.getElementById("time").innerHTML = new Date();
    document.getElementById("sender-full-name").innerHTML = fullName;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
}
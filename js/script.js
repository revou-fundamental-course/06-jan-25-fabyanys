function replaceName() {
    let name = prompt("Halo, nama kamu siapa?", "");
    document.getElementById("user-greating").innerHTML = name;
}

replaceName();

var slidesIndex = 1;
showDivs(slidesIndex);

function plusDivs(n) {
    showDivs(slidesIndex += n);
}

function showDivs(n) {
    var i;
    var imglist = document.getElementsByClassName("img-slideshow");
    if (n > imglist.length) slidesIndex = 1;
    else if (n < 1) slidesIndex = imglist.length;

    for (i = 0; i < imglist.length; i++) {
        imglist[i].style.display = "none";
    }

    imglist[slidesIndex - 1].style.display = "block";
}

setInterval(() => {plusDivs(1)}, 3000);

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
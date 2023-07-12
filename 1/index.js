function showRedDiv() {
    const blueDiv = document.getElementById("blueDiv");
    const redDiv = document.getElementById("redDiv");

    blueDiv.style.display = "none";
    redDiv.style.display = "flex";
}

function showBlueDiv() {
    const blueDiv = document.getElementById("blueDiv");
    const redDiv = document.getElementById("redDiv");

    blueDiv.style.display = "flex";
    redDiv.style.display = "none";
}
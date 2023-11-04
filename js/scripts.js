



// "way to read the value connected"
function theirChoice(event) {
    event.preventDefault();
    const timeSelection = document.querySelector("time").value.
        window.addEventListener("load", function () {
            document.getElementById("questions").addEventListener("submit", theirChoice);
        });
}

// outputs "results" but is not connected to radio button
window.onload = function () {
    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        const morning = document.getElementById("Morning").value;
        const afternoon = document.getElementById("Afternoon").value;
        const night = document.getElementById("Night").value;

        document.querySelector("span#check").innerText = morning;
        document.querySelector("span#check2").innerText = afternoon;
        document.querySelector("span#check3").innerText = night;

        document.querySelector("div#story").removeAttribute("class");

        event.preventDefault();
    });
};

// BRANCH
// if (timeSelection === "Morning") {
//     document.querySelector("span#check").innerText = morning;
// } else (timeSelection === "Afternoon"){
//     document.querySelector("span#check2").innerText = afternoon;
// } else if (timeSelection === "Night") {
//     document.querySelector("span#check3").innerText = night;
// };

// if (morning === "Morning") {
//     document.querySelector("span#check").innerText = morning;
// } else if (afternoon === "Afternoon") {
//     document.querySelector("span#check2").innerText = afternoon;
// } else if (night === "Night") {
//     document.querySelector("span#check3").innerText = night;
// } else {
//     "Error"
// }

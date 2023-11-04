




// function theirChoice(event) {
//     event.preventDefault
//     const timeSelection = document.querySelector("time:checked").value.
//     };


// const timeSelection = document.querySelector("time:checked").value;



window.onload = function () {
    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        const morning = document.getElementById("Morning").value;

        document.querySelector("span#check").innerText = morning;

        document.querySelector("div#story").removeAttribute("class");

        event.preventDefault();
    });
};

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

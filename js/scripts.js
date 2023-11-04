










window.onload = function () {
    // function theirChoice(event) {
    //     event.preventDefault
    //     const timeSelection = document.querySelector("time:checked").value.
    // }


    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        const timeSelection = document.querySelector("time:checked").value.

        const morning = document.getElementById("Morning").value;
        const afternoon = document.getElementById("Afternoon").value;
        const night = document.getElementById("Night").value;

        if (timeSelection === "Morning") {
            document.querySelector("span#check").innerText = morning;
            // document.querySelector("span#check2").removeAttribute("C#");

        } else if (timeSelection === "Afternoon") {
            document.querySelector("span#check2").innerText = afternoon;
        } else if (timeSelection === "Night") {
            document.querySelector("span#check3").innerText = night;
        } else {
            "Error"
        }

        document.querySelector("div#story").removeAttribute("class");

        event.preventDefault();
    });
};


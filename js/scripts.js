







window.onload = function () {
    let form = document.querySelector("form");
    window.addEventListener("submit", function (event) {
        event.preventDefault()
        const answer1 = document.querySelector("Morning").value;
        const answer2 = document.querySelector("Afternoon").value;
        const answer3 = document.querySelector("Night").value;

        let results;

        if (answer1 = "Morning") {
            results = "Learn Python"
        } else if (answer2 = "Afternoon") {
            results = "Learn C#"
        } else if (answer3 = "Night") {
            results = "Learn JavaScript"
        }

        document.getElementById("results").innerText = results;

    });
}


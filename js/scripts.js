










window.onload = function () {
    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        const morning = document.getElementById("Morning").value;

        document.querySelector("span#check").innerText = morning;

        document.querySelector("div#story").removeAttribute("class");

        event.preventDefault();
    });
};


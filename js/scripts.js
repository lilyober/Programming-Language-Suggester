
window.onload = function () {
    let form = document.getElementById("questions");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const checkedRadio = document.querySelector("input[name='time']:checked").value;
        const morning = document.getElementById("Morning").value;
        const afternoon = document.getElementById("Afternoon").value;
        const night = document.getElementById("Night").value;

        function radioResults() {
            if (checkedRadio === morning) {
                document.querySelector("span#answer").innerText = morning
            } else if (checkedRadio === afternoon) {
                document.querySelector("span#answer").innerText = afternoon
            } else if (checkedRadio === night) {
                document.querySelector("span#answer").innerText = night
            }
        }

        radioResults();

        document.querySelector("div#result").removeAttribute("class");
        document.querySelector("div#button2").removeAttribute("class");

    });
};
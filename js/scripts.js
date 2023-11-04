window.onload = function () {
    let button = document.querySelector("button");
    button.addEventListener("click", function(event) {
        const Morning = document.getElementById("Morning");
        Morning.addEventListener("submit", (event) => {
            const answer1 = document.getElementById("name").value;

        document.getElementById("results").innerText = answer1;
        event.preventDefault()


        });
        });
    };

//         event.preventDefault()







//         const answer1 = document.querySelector("Morning").value;
//         const answer2 = document.querySelector("Afternoon").value;
//         const answer3 = document.querySelector("Night").value;

//         let results;

//         if (answer1 = "Morning") {
//             results = "Learn Python"
//         } else if (answer2 = "Afternoon") {
//             results = "Learn C#"
//         } else if (answer3 = "Night") {
//             results = "Learn JavaScript"
//         }

//         document.getElementById("results").innerText = results;
 
//     });
// }


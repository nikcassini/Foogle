let searchBtn = document.getElementById("searchBtn");

let clearBtn = document.getElementById("clearBtn");

searchBtn.addEventListener("click", () => {
    let searchValue = document.getElementById("searchValue").value;
    if (searchValue != "") {
        open("https://www.google.cz/search?q=" + searchValue, "_blank");
    }
});

clearBtn.addEventListener("click", () => {
    document.getElementById("searchValue").value = "";
});

document.addEventListener("keypress", function(event) {
    if (event.code === 'Enter') {
        let searchValue = document.getElementById("searchValue").value;
        if (searchValue != "") {
            open("https://www.google.cz/search?q=" + searchValue, "_blank");
        }
    }
});
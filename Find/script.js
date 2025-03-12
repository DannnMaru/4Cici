document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("cari");
    const suggestionsBox = document.getElementById("saran");

    const suggestions = [
        "berapa lama hubungan kita?",
        "kenapa cici sayang aku",
        "cara nikahin cewek",
        "ceweku pendek, apa solusinya",
        "ayangku kenapa imut dan cantik",
        "kapan yah bisa meluk cici",
        "iikkhhh pepekkk",
        "cara sayang ke cici pake banget",
        "cara nyenegnin kucing pendek",
        "kenapa ayangku birahi denger suara aku"
    ];

    function showSuggestions() {
        const inputValue = searchInput.value.toLowerCase();
        suggestionsBox.innerHTML = "";

        const filteredSuggestions = suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(inputValue)
        );

        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach((suggestion) => {
                const div = document.createElement("div");
                div.classList.add("kotak-saran");
                div.textContent = suggestion;

                div.addEventListener("click", function () {
                    searchInput.value = suggestion;
                    suggestionsBox.classList.remove("show");
                });

                suggestionsBox.appendChild(div);
            });

            suggestionsBox.classList.add("show");
        } else {
            suggestionsBox.classList.remove("show");
        }
    }

    searchInput.addEventListener("input", showSuggestions);
    searchInput.addEventListener("focus", showSuggestions);

    document.addEventListener("click", function (e) {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.classList.remove("show");
        }
    });
});




//Fungsi Kosongkan Pencarian//
function clearButton() {
    const input = document.getElementById("cari");
    const clearBtn = document.getElementById("clearBtn");

    if (input.value.length > 0) {
        clearBtn.style.display = "block";
    } else {
        clearBtn.style.display = "none";
    }
}

function clearSearch() {
    document.getElementById("cari").value = "";
    clearButton();
}
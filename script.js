/*  Menonaktifkan Klik Kanan Pada Mouse */
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});





/*  Fungsi Klik Pada Emoji Hati */
document.addEventListener("DOMContentLoaded", function() {
    var love = document.getElementById("love");
    
    if (love) {
        love.addEventListener("click", function() {
            window.location.href = "2.html";
        });
    } 
});





/*  Fungsi Lanjut Jika  Pencarian   Benar   Dan Memunculkan Notifikasi  Ketika  Salah   Memasukkan  Pencarian   */
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkSearch();
    }
});

document.getElementById("searchButton").addEventListener("click", function() {
    checkSearch();
});

function checkSearch() {
    let inputText = document.getElementById("searchInput").value.trim().toLowerCase();
    let correctPhrase = "isi surat dari Zizi yang ganteng";

    // Cek apakah sebagian besar kata cocok
    if (isSimilar(inputText, correctPhrase)) {
        window.location.href = "3.html";
    } else {
        showError();
    }
}

// Fungsi cek apakah input mirip
function isSimilar(input, target) {
    let inputWords = input.split(/\s+/);
    let targetWords = target.split(/\s+/);
    let matchCount = 0;

    inputWords.forEach(word => {
        if (targetWords.some(targetWord => targetWord.includes(word) || word.includes(targetWord))) {
            matchCount++;
        }
    });

    return matchCount / targetWords.length >= 0.5;
}

let isShowingError = false;

function showError() {
    if (isShowingError) return;

    isShowingError = true;
    let errorMsg = document.getElementById("error-message");

    if (!errorMsg) {
        console.error("Elemen dengan ID 'error-message' tidak ditemukan!");
        return;
    }

    errorMsg.style.display = "block";
    errorMsg.style.animation = "fadeInDown 0.5s ease forwards";

    setTimeout(() => {
        errorMsg.style.animation = "fadeOutUp 0.5s ease forwards";
        setTimeout(() => {
            errorMsg.style.display = "none";
            isShowingError = false;
        }, 500);
    }, 3000);
}





/*  Fungsi  Buka    Tutup   Amplop  */
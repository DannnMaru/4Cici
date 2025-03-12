/* Fungsi Untuk Waktu */
function Waktu() {
    const WaktuSekarang = new Date();
    const TanggalJadian = new Date("2024-02-12T00:00:00");
    const selisih = WaktuSekarang - TanggalJadian;

    if (selisih < 0) {
        document.getElementById("Hari").innerText = "0 Hari";
        document.getElementById("Waktu").innerText = "00 Jam : 00 Menit : 00 Detik";
        return;
    }

    const Hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const Jam = String(Math.floor((selisih / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const Menit = String(Math.floor((selisih / (1000 * 60)) % 60)).padStart(2, '0');
    const Detik = String(Math.floor((selisih / 1000) % 60)).padStart(2, '0');

    document.getElementById("Hari").innerText = `${Hari} Hari`;
    document.getElementById("Waktu").innerText = `${Jam} Jam : ${Menit} Menit : ${Detik} Detik`;
}
setInterval(Waktu, 1000);
Waktu();

/* Fungsi Untuk Hati */
function Background() {
    const Hati = document.createElement("div");
    Hati.innerHTML = "❤️";
    Hati.classList.add("hati");

    const size = Math.random() * 40 + 20;
    Hati.style.fontSize = `${size}px`;

    const posisiX = Math.random() * (window.innerWidth - size);
    Hati.style.left = `${posisiX}px`;

    document.body.appendChild(Hati);

    Hati.addEventListener("animationend", () => {
        Hati.remove();
    });
}
setInterval(Background, 1000);

/* Fungsi Navigasi */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tombol-navigasi").forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = button.getAttribute("onclick").replace("window.location.href='", "").replace("'", "");
        });
    });
});

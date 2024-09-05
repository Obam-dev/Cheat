// Fungsi untuk menampilkan notifikasi "Auto HS ON"
function activateAutoHS() {
    // Ambil elemen notifikasi
    var notification = document.getElementById("notification");

    // Tampilkan notifikasi
    notification.classList.remove("hidden");

    // Setelah 3 detik, sembunyikan notifikasi lagi
    setTimeout(function() {
        notification.classList.add("hidden");
    }, 3000);
}

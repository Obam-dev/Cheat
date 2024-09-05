// Fungsi untuk mengubah status tombol dari OFF ke ON dan sebaliknya
function toggleOption(button) {
    if (button.innerText === "OFF") {
        button.innerText = "ON";
        button.classList.add("active");
    } else {
        button.innerText = "OFF";
        button.classList.remove("active");
    }
}
    

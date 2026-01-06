document.getElementById("formCuti").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let nim = document.getElementById("nim").value;
    let prodi = document.getElementById("prodi").value;
    let semester = document.getElementById("semester").value;
    let alasan = document.getElementById("alasan").value;
    let pesan = document.getElementById("pesan");

    if (nama === "" || nim === "" || prodi === "" || semester === "" || alasan === "") {
        pesan.style.color = "red";
        pesan.innerText = "❌ Semua field wajib diisi!";
    } else {
        pesan.style.color = "green";
        pesan.innerText = "✅ Pengajuan surat cuti berhasil dikirim.";
        document.getElementById("formCuti").reset();
    }
});

document.getElementById('formCuti').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Ambil nilai input
    const nama = document.getElementById('nama').value.trim();
    const nim = document.getElementById('nim').value.trim();
    const prodi = document.getElementById('prodi').value.trim();
    const semester = document.getElementById('semester').value;
    const alasan = document.getElementById('alasan').value.trim();
    const pesan = document.getElementById('pesan');

    // Validasi sederhana
    if (!nama || !nim || !prodi || !semester || !alasan) {
        pesan.textContent = 'Harap isi semua field yang wajib!';
        pesan.style.color = 'red';
        return;
    }

    // Validasi NIM (misalnya, harus angka dan panjang tertentu)
    if (!/^\d{9,10}$/.test(nim)) { // Asumsikan NIM 9-10 digit
        pesan.textContent = 'NIM harus berupa angka dengan panjang 9-10 digit!';
        pesan.style.color = 'red';
        return;
    }

    // Simulasi pengiriman (ganti dengan fetch ke server)
    pesan.textContent = 'Pengajuan berhasil dikirim! Anda akan menerima konfirmasi dalam 3-5 hari kerja.';
    pesan.style.color = 'green';

    // Reset form setelah sukses
    this.reset();
});

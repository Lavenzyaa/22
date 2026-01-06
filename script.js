document.getElementById('formCuti').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil nilai dari form
    const nama = document.getElementById('nama').value.trim();
    const nim = document.getElementById('nim').value.trim();
    const prodi = document.getElementById('prodi').value.trim();
    const semester = document.getElementById('semester').value;
    const alasan = document.getElementById('alasan').value.trim();
    const dokumen = document.getElementById('dokumen').files;
    const pesan = document.getElementById('pesan');

    // Validasi: Pastikan field wajib diisi
    if (!nama || !nim || !prodi || !semester || !alasan) {
        pesan.textContent = '❌ Semua field wajib (*) harus diisi!';
        pesan.style.color = 'red';
        return;
    }

    // Validasi NIM
    if (isNaN(nim) || nim.length !== 10) {
        pesan.textContent = '❌ NIM harus berupa angka dengan panjang 10 digit!';
        pesan.style.color = 'red';
        return;
    }

    // Validasi semester
    if (semester < 1 || semester > 14) {
        pesan.textContent = '❌ Semester harus antara 1 hingga 14!';
        pesan.style.color = 'red';
        return;
    }

    // Validasi dokumen: Pastikan minimal 1 file dipilih
    if (dokumen.length === 0) {
        pesan.textContent = '❌ Harap upload minimal satu dokumen persyaratan!';
        pesan.style.color = 'red';
        return;
    }

    // Validasi tipe file dan ukuran (max 5MB per file)
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    for (let file of dokumen) {
        if (!allowedTypes.includes(file.type)) {
            pesan.textContent = '❌ File harus berformat PDF atau gambar (JPG/PNG)!';
            pesan.style.color = 'red';
            return;
        }
        if (file.size > maxSize) {
            pesan.textContent = '❌ Ukuran file maksimal 5MB per file!';
            pesan.style.color = 'red';
            return;
        }
    }

    // Simulasi pengiriman (dalam produksi, kirim file ke server via FormData dan fetch)
    console.log('Data pengajuan:', { nama, nim, prodi, semester, alasan, dokumen: Array.from(dokumen).map(f => f.name) });

    // Pesan sukses
    pesan.textContent = '✅ Pengajuan cuti berhasil dikirim! Proses akan memakan 3-5 hari kerja.';
    pesan.style.color = 'green';

    // Reset form setelah sukses
    document.getElementById('formCuti').reset();
});

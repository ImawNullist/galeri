let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "smooth";
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

// logika kode ini langkah demi langkah:

// 1. Inisialisasi Variabel:

// let scrollContainer = document.querySelector(".gallery");

// Kode ini mencari elemen HTML dengan kelas "gallery" dan menyimpan referensinya dalam variabel scrollContainer. Ini adalah elemen yang akan kita buat dapat digulir secara horizontal.
// let backBtn = document.getElementById("backBtn");

// Kode ini mencari elemen HTML dengan ID "backBtn" (kemungkinan tombol "kembali") dan menyimpan referensinya dalam variabel backBtn.
// let nextBtn = document.getElementById("nextBtn");

// Sama seperti di atas, ini mencari elemen dengan ID "nextBtn" (kemungkinan tombol "selanjutnya") dan menyimpan referensinya dalam variabel nextBtn.
// 2. Event Listener untuk Scrolling dengan Mouse Wheel:

// scrollContainer.addEventListener("wheel", (evt) => { ... });
// Ini menambahkan event listener ke scrollContainer yang akan dipicu ketika pengguna menggulir roda mouse atau trackpad di atasnya.

// evt.preventDefault();

// Ini mencegah perilaku default dari event "wheel" (yang biasanya menggulir halaman secara vertikal).
// scrollContainer.scrollLeft += evt.deltaY;

// Ini menggerakkan posisi horizontal scroll dari scrollContainer berdasarkan seberapa banyak pengguna menggulir secara vertikal (evt.deltaY). Ini memungkinkan pengguna untuk menggulir konten secara horizontal dengan menggunakan roda mouse atau trackpad.
// scrollContainer.style.scrollBehavior = "smooth";

// Ini membuat animasi scrolling menjadi halus, sehingga konten bergerak dengan mulus ke posisi yang baru, bukannya langsung melompat.
// 3. Event Listener untuk Tombol "Kembali" dan "Selanjutnya":

// backBtn.addEventListener("click", () => { ... });
// Ini menambahkan event listener ke tombol "kembali" yang akan dipicu ketika tombol diklik.

// scrollContainer.style.scrollBehavior = "smooth";

// Membuat animasi scrolling menjadi halus.
// scrollContainer.scrollLeft -= 900;

// Menggerakkan posisi horizontal scroll dari scrollContainer ke kiri sebesar 900 piksel, secara efektif menggulir konten ke "halaman" sebelumnya.
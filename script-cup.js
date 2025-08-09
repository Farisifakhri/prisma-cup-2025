// Menunggu seluruh konten halaman dan CSS dimuat SEBELUM semua script dijalankan
document.addEventListener('DOMContentLoaded', () => {

    // ===================================
    // BAGIAN 1: LOGIKA UNTUK INTRO SCREEN
    // ===================================
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.querySelector('.main-content-wrapper');

    // Kunci scroll di body saat intro aktif
    document.body.style.overflow = 'hidden';

    // Atur durasi intro dalam milidetik (contoh: 4000ms = 4 detik)
    const introDuration = 4000; 

    setTimeout(() => {
        introScreen.style.opacity = '0';
        introScreen.style.visibility = 'hidden';
        mainContent.style.visibility = 'visible';
        mainContent.classList.add('loaded');
        document.body.style.overflow = 'auto'; // Buka kembali kunci scroll
    }, introDuration);


    // =======================================
    // BAGIAN 2: LOGIKA UNTUK COUNTDOWN TIMER
    // =======================================
    const targetDate = new Date('Oct 25, 2025 08:00:00').getTime(); // Menggunakan tanggal yang sudah diupdate
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const interval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = "<h2>ACARA TELAH DIMULAI!</h2>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerText = days < 10 ? '0' + days : days;
        hoursEl.innerText = hours < 10 ? '0' + hours : hours;
        minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
    }

});

// ===========================================
    // BAGIAN 3: LOGIKA UNTUK MENU HAMBURGER
    // ===========================================
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    hamburgerBtn.addEventListener('click', () => {
        // Toggle class 'active' pada menu
        navLinks.classList.toggle('active');
    });
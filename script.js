
// MENU NAVIGASI
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuToggle.innerHTML = isOpen
    ? `<svg viewBox="0 0 24 24">
         <path d="m6 6 12 12M18 6 6 18"/>
       </svg>`
    : `<svg viewBox="0 0 24 24">
         <path d="M3 6h18M3 12h18M3 18h18"/>
       </svg>`;
});

// TUTUP MENU SETELAH DIKLIK
document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M3 6h18M3 12h18M3 18h18"/>
      </svg>`;
  });
});

// VALIDASI FORMULIR KONSULTASI
const consultForm = document.getElementById("consultForm");
const formStatus = document.getElementById("formStatus");

consultForm.addEventListener("submit", event => {

  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const telepon = document.getElementById("telepon").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9+()\-\s]{9,18}$/;

  let error = "";

  if (nama.length < 3) {
    error = "Nama harus terdiri dari minimal 3 karakter.";
  }

  else if (!emailPattern.test(email)) {
    error = "Masukkan alamat email yang valid.";
  }

  else if (!phonePattern.test(telepon)) {
    error = "Masukkan nomor telepon yang valid.";
  }

  else if (pesan.length < 10) {
    error = "Pesan atau pertanyaan minimal 10 karakter.";
  }

  if (error) {
    formStatus.textContent = error;
    formStatus.className = "form-status error";
    return;
  }

  formStatus.textContent =
    "Terima kasih, " + nama +
    ". Formulir berhasil divalidasi.";

  formStatus.className = "form-status success";

  consultForm.reset();
});

// TOMBOL KEMBALI KE ATAS
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  backToTop.classList.toggle(
    "show",
    window.scrollY > 350
  );

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

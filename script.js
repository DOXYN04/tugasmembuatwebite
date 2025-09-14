function validateForm() {
  let nama = document.forms["myForm"]["nama"].value;
  let pesan = document.forms["myForm"]["alasan"].value;

  if (nama === "") {
    alert("Nama tidak boleh kosong!");
    return false;
  }
  if (pesan === "") {
    alert("Pesan harus diisi!");
    return false;
  }

  let welcomeMessage = document.getElementById("welcomeMessage");
  if (welcomeMessage) {
    welcomeMessage.textContent = `Selamat datang, ${nama}!`;
    welcomeMessage.style.display = "block";
  } else {
    alert(`Selamat datang, ${nama}!`);
  }

  
  return false; 
}

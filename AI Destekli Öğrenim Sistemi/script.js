// İletişim Formu Kontrolü
function mesajGonder(event) {
    event.preventDefault(); 
    
    var isim = document.getElementById("isim").value;
    
    if(isim == "") {
        alert("Lütfen isminizi giriniz, isimsiz şiir olmaz :)");
    } else {
        // Şiir temalı mesaj
        alert("Sayın " + isim + ", mesajınız bize ulaştı. En kısa sürede dönüş yapacağız.");
        document.getElementById("contactForm").reset();
    }
}

// Galeri Lightbox Fonksiyonları
function acResim(resimSrc) {
    var lightbox = document.getElementById("myLightbox");
    var lightboxImg = document.getElementById("img01");
    
    lightbox.style.display = "flex"; 
    lightboxImg.src = resimSrc; 
}

function kapatResim() {
    document.getElementById("myLightbox").style.display = "none";
}

document.addEventListener('keydown', function(event) {
    if(event.key === "Escape") {
        kapatResim();
    }
});
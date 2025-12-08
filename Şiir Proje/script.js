/* Proje: Mısraların Sesi Web Sitesi
   Dosya: script.js
   Açıklama: Tüm sayfaların etkileşim kodları burada bulunur.
*/

// --- BÖLÜM 1: İLETİŞİM FORMU KONTROLÜ ---
// İletişim.html sayfasındaki "Gönder" butonuna basınca çalışır.
function mesajGonder(event) {
    // 1. Sayfanın yenilenmesini engelle (Form submit olunca sayfa yenilenir, bunu durduruyoruz)
    event.preventDefault();

    // 2. İsim kutusundaki değeri al
    // Not: getElementById ile HTML'deki id="isim" olan kutuyu buluyoruz.
    var isimKutusu = document.getElementById("isim");
    var isim = isimKutusu.value;

    // 3. Basit bir kontrol yapalım
    if (isim.trim() === "") {
        // Eğer isim yazılmamışsa uyarı ver
        alert("Lütfen adınızı giriniz. İsimsiz mektup kabul etmiyoruz :)");
    } else {
        // İsim yazılmışsa başarı mesajı ver
        alert("Teşekkürler Sayın " + isim + ".\nŞiiriniz veya mesajınız tarafımıza başarıyla ulaştı.\nEn kısa sürede dönüş yapacağız.");

        // 4. Formu temizle (Kutuların içini boşalt)
        document.getElementById("contactForm").reset();
    }
}


// --- BÖLÜM 2: GALERİ / LIGHTBOX (BÜYÜK RESİM) ---
// Galeri.html ve tablolar.html sayfalarında resme tıklayınca çalışır.

// Resmi Açma Fonksiyonu
function acResim(tiklananResimAdresi) {
    // HTML sayfasındaki gizli duran siyah perdeyi (lightbox) bul
    var lightboxKutusu = document.getElementById("myLightbox");
    
    // Siyah perdenin içindeki boş resim etiketini bul
    var buyukResim = document.getElementById("img01");

    // Gizli olan kutuyu görünür yap (CSS'de display:none idi)
    lightboxKutusu.style.display = "flex";

    // Tıklanan küçük resmin adresini (src), büyük resim çerçevesine koy
    buyukResim.src = tiklananResimAdresi;
}

// Resmi Kapatma Fonksiyonu (Çarpı işaretine basınca)
function kapatResim() {
    // Siyah perdeyi tekrar gizle
    document.getElementById("myLightbox").style.display = "none";
}


// --- BÖLÜM 3: KLAVYE KONTROLÜ (BONUS) ---
// Kullanıcı fare yerine klavyeden "ESC" tuşuna basarsa da resim kapansın.
// Bu kısım hocanın gözünde seni bir adım öne taşır.

document.addEventListener('keydown', function(event) {
    // Eğer basılan tuş "Escape" (ESC) ise
    if(event.key === "Escape") {
        // Kapatma fonksiyonunu çalıştır
        kapatResim();
    }
});
/* --- BÖLÜM 4: RASTGELE ŞİİR MOTORU --- */

// 1. Şiir Havuzu (Dizi/Array)
const siirHavuzu = [
    // --- SEMSEM'İN ŞİİRLERİ ---
    {
        baslik: "Umut",
        icerik: "Umut bekle beni, bekle beni geleceğim<br>Bir gün gelecek yine sana döneceğim<br>Elimde çiçeklerle kapına geleceğim<br>İşte o zaman, sen benim geleceğim<br><br>Unutma, unutma beni geleceğim<br>Gözlerinde kendimi göreceğim<br>Gelip tüm kalbimi sana vereceğim<br>İşte o zaman ellerinde geleceğim",
        sair: "- Semsem"
    },
    {
        baslik: "Geri Dönüş",
        icerik: "Bir gün gelir misin geri<br>Yoksa sadece ben mi ağlarım geceleri<br>Anlam kazanır mı kelimeler<br>Dokunur mu yüreklere",
        sair: "- Semsem"
    },
    {
        baslik: "Sorgu",
        icerik: "Bir kelebeğin rüyası kadar kısa mıdır mutluluğum<br>Hiç sahip olamadıklarım mıdır varlığım<br>Hayatıma nüfüz edenler midir sevdiklerim<br>Yoksa kısacık hayat gibi biten herşey mi",
        sair: "- Semsem"
    },
    {
        baslik: "O Adam",
        icerik: "Bu adam bir gün ölecek<br>Bilinsin ki tek amaç için yaşadı<br>Ama istediği karşılığı bulamadı<br>Ancak o bir kazanandır bilinsin",
        sair: "- Semsem"
    },
    {
        baslik: "Dilek",
        icerik: "Mutluluğunu görmek beni çok mutlu ediyor<br>İnşallah bu hayatta hep mutlu olursun<br>Ne olursa olsun mutluluğunu kaybetme<br>Yüzünden gülümsemeni hiç eksiltme<br>Çünkü gülmek sana çok yakışıyor",
        sair: "- Semsem"
    },
    {
        baslik: "Kayboluş",
        icerik: "Ben her an sende kaybolmuşum<br>Her gün her saat bir varmışım bi yokmuşum<br>Sensiz yaşayamaz olmuşum<br>Ama gerçekten anladım ben yok olmuşum",
        sair: "- Semsem"
    },
    {
        baslik: "Yakarış",
        icerik: "Naçiz ve emanet bedenimdeki<br>İnce ve derin ruhumu, cennetteki<br>Sularınla yıka Allahım, yıka ki<br>Buralardan biraz uzaklaşayım",
        sair: "- Semsem"
    },
    {
        baslik: "Kalp",
        icerik: "Atar kalbimin pili hazince<br>Kalbim her an temaşa içinde<br>Narin duran sıla hasretinde<br>Sokakta bulur kendini biçare",
        sair: "- Semsem"
    },
    {
        baslik: "Uçurtmalar",
        icerik: "Yaparım duygulardan tutkulu uçurtmalar<br>Gün gelir ipsiz uçurtmalar camını kurcalar<br>Baksana getirmişler bir düzine solmuş gül<br>Koklasana son kez korkarlar mı hâlâ umutlar",
        sair: "- Semsem"
    },
    {
        baslik: "Hasar",
        icerik: "Havada bulut yok ama gözlerim yaş<br>Kalbimde hasar çok ama sen yoksun<br>Karanlıkta yürürüm her gün her gece<br>Ayaklarımın götürdüğü yerlere",
        sair: "- Semsem"
    },
    {
        baslik: "Sokak Lambaları",
        icerik: "Sokak lambalarının turunculuğundaki derbeder adam<br>Gece yürüdüğüm sokaklarda bombalar beni bulur<br>Ağzımda kan tadı",
        sair: "- Semsem"
    },
    {
        baslik: "Kundaklanmış Kalpler",
        icerik: "Boşluğa derin çizikler eşliğinde<br>Kundaklanmış kalpler<br>Büyüleyici beyazlık ışığında<br>Bitmeyen gülüşler",
        sair: "- Semsem"
    },

    // --- ÜNLÜ ŞAİRLER ---
    {
        baslik: "Sessiz Gemi",
        icerik: "Artık demir almak günü gelmişse zamandan,<br>Meçhule giden bir gemi kalkar bu limandan.<br>Hiç yolcusu yokmuş gibi sessizce alır yol;<br>Sallanmaz o kalkışta ne mendil ne de bir kol.",
        sair: "- Yahya Kemal Beyatlı"
    },
    {
        baslik: "Otuz Beş Yaş",
        icerik: "Yaş otuz beş! Yolun yarısı eder.<br>Dante gibi ortasındayız ömrün.<br>Delikanlı çağımızdaki cevher,<br>Yalvarmak, yakarmak nafile bugün,<br>Gözünün yaşına bakmadan gider.",
        sair: "- Cahit Sıtkı Tarancı"
    },
    {
        baslik: "Güzel Günler",
        icerik: "Güzel günler göreceğiz çocuklar,<br>Güneşli günler göreceğiz.<br>Motorları maviliklere süreceğiz çocuklar,<br>Işıklı maviliklere süreceğiz...",
        sair: "- Nazım Hikmet"
    },
    {
        baslik: "Ben Sana Mecburum",
        icerik: "Ben sana mecburum bilemezsin<br>Adını mıh gibi aklımda tutuyorum<br>Büyüdükçe büyüyor gözlerin<br>Ben sana mecburum bilemezsin<br>İçimi seninle ısıtıyorum.",
        sair: "- Attila İlhan"
    },
    {
        baslik: "Lavinia",
        icerik: "Sana gitme demeyeceğim.<br>Üşüyorsun ceketimi al.<br>Günün en güzel saatleri bunlar.<br>Yanımda kal.",
        sair: "- Özdemir Asaf"
    },
    /// --- Dışardan Gelenler --- ///
    {
        baslik: "Sebat",
        icerik: "Kolay değildi, yollar hep yokuş.<br>Her adımda bir düş, her düşte bir suç.<br>Ama yılmadım, gözümde bir nur.<br>Işık göründü, kalbim artık dur.<br><br>Dönmem artık, sahi bir daha dönmem<br>Karanlık çağrsa da ona hiç sönem.<br>Geceler anlatsın kim neyi bildi<br>Ben yürüdüm ve bu da bir zaferdi.<br><br>Şimdi bahar gibi içimde serin<br>Her umut tomurcuk, her sevda derin.<br>Yeniden yaşamak, işte bu gerek.<br>Düşüp kalksam da yine de yürümek",
        sair:"- Taha Şahin"
    },
    {
        baslik:"Aşk Yok Olmaktır",
        icerik:"Destan olur yazsam seni,<br>Kalbim yener her düşü, her seni.<br>Bakışınla dağılır aklımın sesi,<br>Kendimden koparım, sensin sebebi <br><br>Saçların suvuru anı rüzgara, <br>Feryadın düşer gecenin bağrına. <br>Kor alevler yanar içimin tamına, <br>Bu nasıl bir aşk sığmaz tanıma. <br><br>Yakıyor adınla her bir nefes, <br>Ne söz yeter buna ne de heves. <br>Ben susarken bile sen, çağırdım <br>Aşk bu, ben çoktan yandım.",
        sair:"- Taha Şahin"
    },
    {
        baslik:"Araf",
        icerik:"Kafamda oluştu sessizlik<br>Fakat bilmiyorum,iyi mi kötü mü sensizlik<br>Kafamdaki sessizliğin sonucu hissizlik<br>Hissizlikle beraber yitirdi anlamını gerçeklik",
        sair:"- Mehmet Sedat Ergüzen"
    }
];


// 2. Rastgele Şiir Seçme Fonksiyonu
function rastgeleSiirGetir() {
    // Sadece Anasayfa'da çalışması için kontrol:
    // Eğer sayfada "gunun-siiri-kutusu" yoksa (mesela İletişim sayfasındaysak) bu kod çalışmasın.
    var kutu = document.getElementById("gunun-siiri-kutusu");
    
    if (kutu) {
        // Matematiksel işlem: 0 ile şiir sayısı arasında rastgele sayı tut
        var rastgeleSayi = Math.floor(Math.random() * siirHavuzu.length);
        
        // Havuzdan o sıradaki şiiri al
        var secilenSiir = siirHavuzu[rastgeleSayi];
        
        // HTML'e yazdır
        document.getElementById("siir-baslik").innerHTML = secilenSiir.baslik;
        document.getElementById("siir-icerik").innerHTML = secilenSiir.icerik;
        document.getElementById("siir-sair").innerHTML = secilenSiir.sair;
    }
}

// 3. Sayfa Yüklendiği Anda Çalıştır
// Kullanıcı siteye girdiği an bir şiir seçilmiş olsun.
document.addEventListener("DOMContentLoaded", function() {
    rastgeleSiirGetir();
});
/* Not: Bu kodun çalışması için HTML sayfalarının en altında
   <script src="script.js"></script> satırının olması şarttır.
*/
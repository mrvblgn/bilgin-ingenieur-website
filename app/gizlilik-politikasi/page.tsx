import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'GDPR ve DSGVO uyumlu gizlilik politikası',
  alternates: {
    canonical: '/gizlilik-politikasi',
    languages: {
      'de': '/datenschutz',
      'tr': '/gizlilik-politikasi',
      'x-default': '/datenschutz',
    },
  },
};

export default function GizlilikPolitikasiPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-6 md:py-8 bg-white pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#8B7355]">
              Gizlilik Politikası
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
              
              <section>
                <h2 className="text-2xl font-semibold text-black">1. Genel Bakış</h2>
                
                <h3 className="text-xl font-semibold text-black mb-2">Genel Bilgiler</h3>
                <p className="mb-3">
                  Aşağıdaki bilgiler, bu web sitesini ziyaret ettiğinizde kişisel verilerinizin nasıl işlendiği hakkında kısa bir genel bakış sağlamaktadır. Kişisel veriler, sizi kişisel olarak tanımlayabilecek tüm verilerdir. Gizlilik konusunda ayrıntılı bilgiler için aşağıdaki gizlilik bildirimimize bakabilirsiniz.
                </p>
                
                <h3 className="text-xl font-semibold text-black mb-2">Bu Web Sitesinde Veri Toplama</h3>
                <p className="mb-2"><strong>Bu web sitesinde veri toplamadan kim sorumludur?</strong></p>
                <p className="mb-3">
                  Bu web sitesindeki veri işleme, web sitesi operatörü tarafından yapılmaktadır. İletişim bilgileri bu gizlilik bildiriminin "Sorumlu Taraf Hakkında Bilgi" bölümünde bulunabilir.
                </p>
                
                <p className="mb-2"><strong>Verilerinizi nasıl topluyoruz?</strong></p>
                <p className="mb-3">
                  Verileriniz bir yandan bize bildirdiğiniz şekilde toplanır. Örneğin, bir iletişim formuna girdiğiniz veriler bu kapsamda olabilir. Diğer veriler, web sitesini ziyaret ederken IT sistemlerimiz tarafından otomatik olarak veya izninizle toplanır. Bunlar öncelikle teknik verilerdir (örneğin internet tarayıcısı, işletim sistemi veya sayfa görüntüleme saati). Bu verilerin toplanması, bu web sitesine girdiğiniz anda otomatik olarak gerçekleşir.
                </p>
                
                <p className="mb-2"><strong>Verilerinizi hangi amaçla kullanıyoruz?</strong></p>
                <p className="mb-3">
                  Verilerin bir kısmı, web sitesinin hatasız bir şekilde sağlanmasını garanti etmek için toplanır. Diğer veriler kullanıcı davranışınızın analizi için kullanılabilir.
                </p>
                
                <p className="mb-2"><strong>Verilerinizle ilgili hangi haklara sahipsiniz?</strong></p>
                <p className="mb-3">
                  Kayıtlı kişisel verilerinizin kaynağı, alıcısı ve amacı hakkında ücretsiz bilgi alma hakkınız vardır. Ayrıca bu verilerin düzeltilmesini veya silinmesini talep etme hakkınız da vardır. Veri işleme için onay vermişseniz, bu onayı gelecekte her zaman geri çekebilirsiniz. Ayrıca, belirli koşullar altında kişisel verilerinizin işlenmesinin kısıtlanmasını talep etme hakkınız vardır. Ayrıca, ilgili denetim otoritesine şikayette bulunma hakkınız da vardır.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">2. Barındırma</h2>
                <p className="mb-3">
                  <strong>Harici Barındırma</strong><br />
                  Bu web sitesi harici bir hizmet sağlayıcı (host) tarafından barındırılmaktadır. Bu web sitesinde toplanan kişisel veriler, host sunucularında saklanır. Bunlar özellikle IP adresleri, iletişim talepleri, meta ve iletişim verileri, sözleşme verileri, iletişim bilgileri, isimler, web sitesi erişimleri ve bir web sitesi aracılığıyla oluşturulan diğer veriler olabilir.
                </p>
                <p className="mb-4">
                  <strong>Not:</strong> Lütfen buraya hosting firmanızı ekleyin (ör. Vercel, IONOS, Strato, vb.)
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">3. Genel Bilgiler ve Zorunlu Bildirimler</h2>
                
                <h3 className="text-xl font-semibold text-black mb-2">Gizlilik</h3>
                <p className="mb-3">
                  Bu sayfaların operatörleri kişisel verilerinizin korunmasına çok önem verir. Kişisel verilerinizi gizli tutuyoruz ve yasal veri koruma düzenlemelerine ve bu gizlilik bildirimine uygun olarak işliyoruz.
                </p>
                
                <h3 className="text-xl font-semibold text-black mb-2">Sorumlu Taraf Hakkında Bilgi</h3>
                <p className="mb-3">
                  Bu web sitesindeki veri işlemeden sorumlu taraf:
                </p>
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <p className="mb-2"><strong>Bilgin Ingenieurbüro & Deca Architektur</strong></p>
                  <p className="mb-2">Speyerer Str. 4</p>
                  <p className="mb-2">74078 Heilbronn</p>
                  <p className="mb-2">Almanya</p>
                  <p className="mb-2">Telefon: +49 176 24433958</p>
                  <p className="mb-2">E-Posta: projekte@deca-online.de</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">4. Google Fonts</h2>
                <p className="mb-3">
                  Bu sayfa, Google tarafından sağlanan Google Fonts olarak adlandırılan yazı tiplerini kullanır. Bir sayfayı açtığınızda, tarayıcınız metinleri ve yazı tiplerini doğru şekilde göstermek için gerekli fontları tarayıcı önbelleğinize yükler.
                </p>
                <p className="mb-3">
                  Bu amaçla kullandığınız tarayıcının Google'ın sunucularına bağlanması gerekir. Bu şekilde Google, IP adresiniz üzerinden bu web sitesinin ziyaret edildiğini öğrenir. Google Fonts'un kullanımı, GDPR Madde 6 (1) (f) hükmüne dayanmaktadır. Meşru menfaat, çevrimiçi tekliflerimizin birleşik, çekici sunumunda yatmaktadır.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">5. Google Maps</h2>
                <p className="mb-4">
                  Bu sayfa, bir API üzerinden Google Maps harita hizmetini kullanır. Sağlayıcı Google Ireland Limited'tir („Google"), Gordon House, Barrow Street, Dublin 4, İrlanda.
                </p>
                <p className="mb-3">
                  Google Maps'in işlevlerini kullanmak için IP adresinizi saklamak gerekir. Bu bilgiler genellikle ABD'deki bir Google sunucusuna aktarılır ve orada saklanır. Bu sayfanın sağlayıcısının bu veri aktarımı üzerinde hiçbir etkisi yoktur.
                </p>
                <p className="mb-4 text-red-600 font-semibold">
                  <strong>⚠️ ÖNEMLİ:</strong> Google Maps için bir çerez onay banner'ı gereklidir!
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">6. Haklarınız</h2>
                <p className="mb-4">
                  Aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Bilgi Alma Hakkı (GDPR Madde 15):</strong> Hakkımızda saklanan kişisel verileriniz hakkında bilgi talep edebilirsiniz.</li>
                  <li><strong>Düzeltme Hakkı (GDPR Madde 16):</strong> Yanlış verilerin düzeltilmesini veya kişisel verilerinizin tamamlanmasını talep edebilirsiniz.</li>
                  <li><strong>Silme Hakkı (GDPR Madde 17):</strong> Kişisel verilerinizin silinmesini talep edebilirsiniz.</li>
                  <li><strong>İşlemeyi Kısıtlama Hakkı (GDPR Madde 18):</strong> Kişisel verilerinizin işlenmesinin kısıtlanmasını talep edebilirsiniz.</li>
                  <li><strong>İtiraz Hakkı (GDPR Madde 21):</strong> Kişisel verilerinizin işlenmesine itiraz edebilirsiniz.</li>
                  <li><strong>Veri Taşınabilirliği (GDPR Madde 20):</strong> Verilerinizin yapılandırılmış, yaygın ve makine tarafından okunabilir bir formatta size verilmesini talep edebilirsiniz.</li>
                  <li><strong>Şikayet Hakkı:</strong> Bir denetim otoritesine, özellikle ikamet yerinizin, işyerinizin veya ihlalin meydana geldiği yerin üye devletinde şikayette bulunabilirsiniz.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">7. Bu Gizlilik Politikasındaki Değişiklikler</h2>
                <p className="mb-3">
                  Bu gizlilik bildirimini, mevcut yasal gerekliliklere uygun olacak şekilde veya gizlilik bildiriminde hizmetlerimizdeki değişiklikleri uygulamak için, örneğin yeni hizmetler tanıtıldığında uyarlama hakkını saklı tutarız. Tekrar ziyaret ettiğinizde yeni gizlilik bildirimi geçerlidir.
                </p>
                <p className="mb-8">
                  <strong>Tarih:</strong> {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </section>
              
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

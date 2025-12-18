import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Künye',
  description: 'Yasal bilgiler ve iletişim',
  alternates: {
    canonical: '/kunye',
    languages: {
      'de': '/impressum',
      'tr': '/kunye',
      'x-default': '/impressum',
    },
  },
};

export default function KünyePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-6 md:py-8 bg-white pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#8B7355]">
              Künye
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
              
              <section>
                <h2 className="text-2xl font-semibold text-black">Yasal Bilgiler</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <p className="mb-2"><strong>Bilgin Ingenieurbüro & Deca Architektur</strong></p>
                  <p className="mb-2">Speyerer Str. 4</p>
                  <p className="mb-2">74078 Heilbronn</p>
                  <p className="mb-4">Almanya</p>
                  
                  <p className="mb-2"><strong>İletişim:</strong></p>
                  <p className="mb-2">Telefon: +49 176 24433958</p>
                  <p className="mb-2">E-Posta: projekte@deca-online.de</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">İçerikten Sorumlu</h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <p className="mb-2"><strong>Bilal Bilgin</strong></p>
                  <p className="mb-2">Speyerer Str. 4</p>
                  <p className="mb-2">74078 Heilbronn</p>
                  <p className="mb-2">Almanya</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">Sorumluluk Reddi</h2>
                
                <h3 className="text-xl font-semibold text-black mb-2">İçerik Sorumluluğu</h3>
                <p className="mb-3">
                  Hizmet sağlayıcı olarak, genel yasalara göre bu sayfalardaki kendi içeriklerimizden sorumluyuz. Ancak, hizmet sağlayıcı olarak, iletilen veya saklanan yabancı bilgileri izleme veya yasa dışı faaliyetleri gösteren durumları araştırma yükümlülüğümüz bulunmamaktadır.
                </p>
                <p className="mb-4">
                  Genel yasalara göre bilgilerin kaldırılması veya kullanımının engellenmesi yükümlülükleri bundan etkilenmez. Ancak, bu tür bir sorumluluk ancak somut bir yasal ihlalin bilinmesinden itibaren mümkündür. İlgili yasal ihlallerin öğrenilmesi durumunda, bu içerikleri derhal kaldıracağız.
                </p>
                
                <h3 className="text-xl font-semibold text-black mb-2">Bağlantı Sorumluluğu</h3>
                <p className="mb-3">
                  Teklifimiz, içerikleri üzerinde hiçbir etkimiz olmayan üçüncü tarafların harici web sitelerine bağlantılar içermektedir. Bu nedenle, bu yabancı içerikler için de garanti veremeyiz. Bağlantı verilen sayfaların içeriklerinden her zaman ilgili sağlayıcı veya sayfa operatörü sorumludur. Bağlantı verilen sayfalar, bağlantı zamanında olası yasal ihlaller açısından kontrol edilmiştir. Yasadışı içerikler bağlantı zamanında tanınabilir durumda değildi.
                </p>
                <p className="mb-4">
                  Ancak, somut bir yasal ihlal göstergesi olmadan bağlantı verilen sayfaların sürekli içerik kontrolü makul değildir. Yasal ihlallerin öğrenilmesi durumunda, bu tür bağlantıları derhal kaldıracağız.
                </p>
                
                <h3 className="text-xl font-semibold text-black mb-2">Telif Hakkı</h3>
                <p className="mb-3">
                  Sayfa operatörleri tarafından oluşturulan bu sayfalardaki içerikler ve çalışmalar Alman telif hakkına tabidir. Telif hakkının sınırları dışında çoğaltma, işleme, dağıtım ve her türlü kullanım, ilgili yazar veya oluşturucunun yazılı iznini gerektirir. Bu sayfanın indirilmesi ve kopyalanması yalnızca özel, ticari olmayan kullanım için izinlidir.
                </p>
                <p className="mb-8">
                  Bu sayfadaki içerikler operatör tarafından oluşturulmadıysa, üçüncü tarafların telif haklarına saygı gösterilir. Özellikle üçüncü taraf içerikleri buna göre işaretlenir. Yine de bir telif hakkı ihlaline dikkat çekilirse, lütfen buna uygun bir bildirimde bulunun. Yasal ihlallerin öğrenilmesi durumunda, bu tür içerikleri derhal kaldıracağız.
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

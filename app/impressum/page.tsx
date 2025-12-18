import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Angaben gemäß § 5 TMG',
  alternates: {
    canonical: '/impressum',
    languages: {
      'de': '/impressum',
      'tr': '/kunye',
      'x-default': '/impressum',
    },
  },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-6 md:py-8 bg-white pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#8B7355]">
              Impressum
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
              
              <section>
                <h2 className="text-2xl font-semibold text-black">Angaben gemäß § 5 TMG</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="mb-2"><strong>Bilgin Ingenieurbüro & Deca Architektur</strong></p>
                  <p className="mb-2">Speyerer Str. 4</p>
                  <p className="mb-2">74078 Heilbronn</p>
                  <p className="mb-4">Deutschland</p>
                  
                  <p className="mb-2"><strong>Kontakt:</strong></p>
                  <p className="mb-2">Telefon: +49 176 24433958</p>
                  <p className="mb-2">E-Mail: projekte@deca-online.de</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="mb-2"><strong>Bilal Bilgin</strong></p>
                  <p className="mb-2">Speyerer Str. 4</p>
                  <p className="mb-2">74078 Heilbronn</p>
                  <p className="mb-2">Deutschland</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">Haftungsausschluss (Disclaimer)</h2>
                
                <h3 className="text-xl font-semibold text-black mb-3">Haftung für Inhalte</h3>
                <p className="mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="mb-4">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
                
                <h3 className="text-xl font-semibold text-black mb-3">Haftung für Links</h3>
                <p className="mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p className="mb-4">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
                
                <h3 className="text-xl font-semibold text-black mb-3">Urheberrecht</h3>
                <p className="mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p className="mb-8">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
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

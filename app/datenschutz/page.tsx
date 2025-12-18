import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung gemäß DSGVO',
  alternates: {
    canonical: '/datenschutz',
    languages: {
      'de': '/datenschutz',
      'tr': '/gizlilik-politikasi',
      'x-default': '/datenschutz',
    },
  },
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-6 md:py-8 bg-white pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#8B7355]">
              Datenschutzerklärung
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
              
              <section>
                <h2 className="text-2xl font-semibold text-black">1. Datenschutz auf einen Blick</h2>
                
                <h3 className="text-xl font-semibold text-black mb-3">Allgemeine Hinweise</h3>
                <p className="mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
                
                <h3 className="text-xl font-semibold text-black mb-3">Datenerfassung auf dieser Website</h3>
                <p className="mb-2"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                <p className="mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
                
                <p className="mb-2"><strong>Wie erfassen wir Ihre Daten?</strong></p>
                <p className="mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>
                
                <p className="mb-2"><strong>Wofür nutzen wir Ihre Daten?</strong></p>
                <p className="mb-4">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
                
                <p className="mb-2"><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
                <p className="mb-4">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">2. Hosting</h2>
                <p className="mb-4">
                  <strong>Externes Hosting</strong><br />
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
                <p className="mb-4">
                  <strong>Hinweis:</strong> Bitte geben Sie hier Ihre Hosting-Firma ein (z. B. Vercel, IONOS, Strato, etc.)
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                
                <h3 className="text-xl font-semibold text-black mb-3">Datenschutz</h3>
                <p className="mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
                </p>
                
                <h3 className="text-xl font-semibold text-black mb-3">Hinweis zur verantwortlichen Stelle</h3>
                <p className="mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <p className="mb-2"><strong>Bilgin Ingenieurbüro & Deca Architektur</strong></p>
                  <p className="mb-2">Speyerer Str. 4</p>
                  <p className="mb-2">74078 Heilbronn</p>
                  <p className="mb-2">Deutschland</p>
                  <p className="mb-2">Telefon: +49 176 24433958</p>
                  <p className="mb-2">E-Mail: projekte@deca-online.de</p>
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-3">Speicherdauer</h3>
                <p className="mb-4">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </p>
                
                <h3 className="text-xl font-semibold text-black mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="mb-4">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
                
                <h3 className="text-xl font-semibold text-black mb-3">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen</h3>
                <p className="mb-4">
                  WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN.
                </p>
                
                <h3 className="text-xl font-semibold text-black mb-3">SSL- bzw. TLS-Verschlüsselung</h3>
                <p className="mb-4">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">4. Datenerfassung auf dieser Website</h2>
                
                <h3 className="text-xl font-semibold text-black mb-3">Kontaktformular</h3>
                <p className="mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="mb-4">
                  <strong>Hinweis:</strong> Falls Sie kein Kontaktformular verwenden, können Sie diesen Abschnitt entfernen.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">5. Google Fonts</h2>
                <p className="mb-4">
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                </p>
                <p className="mb-4">
                  Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der einheitlichen, ansprechenden Darstellung unserer Online-Angebote.
                </p>
                <p className="mb-4">
                  Weitere Informationen zu Google Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" className="text-[#8B7355] hover:underline" target="_blank" rel="noopener noreferrer">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" className="text-[#8B7355] hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.
                </p>
                <p className="mb-4">
                  <strong>Hinweis:</strong> Next.js optimiert Google Fonts lokal, daher wird die IP-Adresse möglicherweise nicht an Google übertragen. Bitte prüfen Sie dies.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">6. Google Maps</h2>
                <p className="mb-4">
                  Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="mb-4">
                  Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
                </p>
                <p className="mb-4">
                  Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                </p>
                <p className="mb-4">
                  Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" className="text-[#8B7355] hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.
                </p>
                <p className="mb-4 text-red-600 font-semibold">
                  <strong>⚠️ WICHTIG:</strong> Für Google Maps benötigen Sie ein Cookie-Banner mit Einwilligung!
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">7. Ihre Rechte</h2>
                <p className="mb-4">
                  Sie haben folgende Rechte:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten verlangen.</li>
                  <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger oder die Vervollständigung Ihrer personenbezogenen Daten verlangen.</li>
                  <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer personenbezogenen Daten verlangen.</li>
                  <li><strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</li>
                  <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Verarbeitung Ihrer personenbezogenen Daten widersprechen.</li>
                  <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können verlangen, dass wir Ihnen Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format übergeben.</li>
                  <li><strong>Beschwerderecht:</strong> Sie können sich bei einer Aufsichtsbehörde beschweren, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-black">8. Änderungen dieser Datenschutzerklärung</h2>
                <p className="mb-4">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
                <p className="mb-8">
                  <strong>Stand:</strong> {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
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

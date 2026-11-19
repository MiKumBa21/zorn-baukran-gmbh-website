
import './Datenschutzerklärung.css';
import { company } from "../../data/company.ts";
import { Headline1 } from "../../components/Headline/Headline.tsx";

function Datenschutzerklaerung() {
    return (
        <div className="datenschutzerklaerung">
            <title>Datenschutz | Zorn Baukran GmbH</title>
            <Headline1 text="Datenschutz" subtitle="Erklärung zur Informationspflicht"/>
            <div className="datenschutzerklaerung-container">
                <section>
                    <div className="datenschutzerklaerung-card">
                        <h3>Allgemein</h3>
                        <p>
                            In folgender Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der
                            Datenverarbeitung im Rahmen unserer Webseite. Wir erheben und verarbeiten personenbezogene
                            Daten nur auf Grundlage der gesetzlichen Bestimmungen (Datenschutzgrundverordnung,
                            Telekommunikationsgesetz 2003).
                        </p>
                        <p>
                            Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese besuchen wird Ihre
                            IP-Adresse, Beginn sowie Beginn und Ende der Sitzung erfasst. Dies ist technisch bedingt und stellt
                            somit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.
                        </p>
                    </div>

                    <div className="datenschutzerklaerung-card">
                        <h3>Kontakt mit uns</h3>
                        <p>
                            Wenn Sie uns per Email kontaktieren, dann werden die von Ihnen an uns übermittelten Daten
                            zwecks Bearbeitung Ihrer Anfrage oder für den Fall von weiteren Anschlussfragen für sechs Monate bei uns gespeichert.
                            Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe Ihrer übermittelten Daten.
                        </p>
                    </div>

                    <div className="datenschutzerklaerung-card">
                        <h3>Cookies</h3>
                        <p>
                            Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien,
                            die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an.
                            Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf
                            Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser
                            beim nächsten Besuch wiederzuerkennen. Wenn Sie dies nicht wünschen, so können Sie Ihren Browser
                            so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im
                            Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website
                            eingeschränkt sein.
                        </p>
                    </div>

                    <div className="datenschutzerklaerung-card">
                        <h3>Ihre Rechte als Betroffener</h3>
                        <p>
                            Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns gespeichert sind
                            grundsätzlich ein Recht auf:
                        </p>
                        <ul>
                            <li>Auskunft</li>
                            <li>Löschung der Daten</li>
                            <li>Berichtigung der Daten</li>
                            <li>Übertragbarkeit der Daten</li>
                            <li>Wiederruf und Widerspruch zur Datenverarbeitung</li>
                            <li>Einschränkung</li>
                        </ul>
                        <p>
                            Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verstöße gegen das
                            Datenschutzrecht passiert sind, so haben Sie die Möglichkeit sich bei uns () oder der Datenschutzbehörde zu
                            beschweren.
                        </p>
                    </div>

                    <div className="datenschutzerklaerung-card">
                        <h3>Sie erreichen uns unter folgenden Kontaktdaten:</h3>
                        <p>
                            Webseitenbetreiber: {company.name}<br />
                            Telefonnummer: {company.phone} <br />
                            Email: {company.email}
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Datenschutzerklaerung;
import {Headline1} from "../../components/Headline/Headline";
import {company} from "../../data/company";
import "./Contact.css";

function Contact() {
    const address = `${company.street}, ${company.zip} ${company.city}`;
    const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;

    return (
        <div className="contact-container">
            <title>Kontakt | Zorn Baukran GmbH</title>
            <meta name="description"
                  content="Kontakt zur Zorn Baukran GmbH in Ried im Traunkreis: Beratung, Verkauf und Vermietung von Baukranen."/>
            <Headline1 text="Kontakt" subtitle="Rufen Sie uns an oder schreiben Sie uns – wir beraten Sie gerne."/>

            <section className="contact-grid">
                <div className="contact-card">
                    <h2>Telefon</h2>
                    <a className="LinkButton" href={"tel:" + company.phone}>{company.phone}</a>
                </div>
                <div className="contact-card">
                    <h2>E-Mail</h2>
                    <a className="LinkButton" href={`mailto:${company.email}`}>{company.email}</a>
                </div>
                <div className="contact-card">
                    <h2>Adresse</h2>
                    <address>
                        {company.name}<br/>{company.street}<br/>{company.zip} {company.city}
                    </address>
                    <a className="LinkButton" href={mapUrl} target="_blank" rel="noopener noreferrer">Auf Karte
                        ansehen</a>
                </div>
            </section>
        </div>
    );
}

export default Contact;
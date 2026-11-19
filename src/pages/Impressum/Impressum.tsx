import "./Impressum.css"
import {Headline1} from "../../components/Headline/Headline.tsx";

function Impressum() {
    return(
      <div className="impressum">
          <title>Impressum | Zorn Baukran GmbH</title>
          <Headline1 text="Impressum" />
        <div className="impressum-container">
            <div>
                <strong>Post- & Firmenanschrift</strong>
                ZORN Baukran GmbH <br/>
                Gewerbestraße 5 <br/>
                A - 4551 Ried im Traunkreis
            </div>
            <div>
                <strong>Kontakt</strong>
                Telefon: +43(0)664 3336271 <br/>
                E-Mail: karl.zorn@aon.at
            </div>
            <div>
                <strong>UID-Nummer</strong>
                ATU77871956
            </div>
            <div>
                <strong>Firmenbuch</strong>
                FN 575298 b
            </div>
            <div>
                <strong>Dienstgebernummer</strong>
                202282193
            </div>
            <div>
                <strong>Haftungsausschluss</strong>
                Der Autor dieser Webseiten ist bestrebt, die hier angebotenen Informationen nach bestem Wissen und Gewissen vollständig und richtig darzustellen und aktuell zu halten. <br/><br/>
                Dennoch kann er keinerlei Haftung für Schäden übernehmen, die sich aus der Nutzung der angebotenen Informationen ergeben können – auch wenn diese auf die Nutzung von allenfalls unvollständigen bzw. fehlerhaften Informationen zurückzuführen sind.<br/><br/>
                Verweise auf fremde Webseiten liegen außerhalb des Verantwortungsbereiches des Autors.
                Eine Haftung für die Inhalte von verlinkten Seiten ist ausgeschlossen. <br/><br/>
                Die Ware bleibt bis zur vollständigen Bezahlung mein Eigentum! <br/>
                Gerichtsstand: Kirchdorf/Krems
            </div>
            <div>
                <strong>Urheberrecht</strong>
                Jede den Bestimmungen des Urheberrechtsgesetzes widersprechende Verwendung jeglicher Inhalte dieser Webseiten ist ohne schriftliche Zustimmung des Autors untersagt. Davon ausgenommen sind ausdrücklich zum Download gekennzeichnete Dateien.
            </div>
        </div>
      </div>
    );
}
export default Impressum;
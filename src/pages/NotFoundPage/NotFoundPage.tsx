import { Link } from "react-router-dom";
import { Headline1 } from "../../components/Headline/Headline";

function NotFoundPage() {
    return (
        <div>
            <title>Seite nicht gefunden | Zorn Baukran GmbH</title>
            <meta name="robots" content="noindex" />
            <Headline1 text="404 – Seite nicht gefunden" subtitle="Die gesuchte Seite existiert nicht (mehr)." />
            <p style={{ textAlign: "center" }}>
                <Link to="/" className="LinkButton">Zur Startseite</Link>
            </p>
        </div>
    );
}
export default NotFoundPage;
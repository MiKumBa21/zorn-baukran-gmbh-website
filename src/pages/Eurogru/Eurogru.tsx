import { Headline1 } from "../../components/Headline/Headline";
import { InternLinkButton } from "../../components/Button/Button"
import Layout from "../../components/Layout/Layout";
import "./Eurogru.css"

function Eurogru() {
    return (
        <div>
            <Layout>
                <Headline1 text='Eurogru - Partner' subtitle="Offizieller Partner von Eurogru"></Headline1>
                <section className="eurogru-text-container">
                    <img src="/Images/Eurogru/Eurogru_Example.jpg" alt="Eurogru Kran" />
                    <div>
                        <p>Als offizieller Partner von <strong><a href="https://www.eurogru.de/" target="_blank" rel="noopener noreferrer">Eurogru</a></strong> bieten wir das vollständige
                            Sortiment an Bau- und Schnellmontagekranen direkt an. Eurogru steht für
                            Qualität, Innovation und Zuverlässigkeit in der Kranbranche.
                        </p>
                        <a href="https://www.eurogru.de/" target="_blank" rel="noopener noreferrer">
                            <img src="/Images/Eurogru/eurogru_logo.jpg" alt="Eurogru Logo" className="eurogru-image" />
                        </a>
                    </div>

                    <InternLinkButton url="/Krane" text="Eurogru Krane ansehen →" />
                </section>
            </Layout>

        </div>
    );
}
export default Eurogru;


import Layout from "../../components/Layout/Layout";
import "./Home.css";
import { BigHeadline, Headline2 } from "../../components/Headline/Headline";
import { InternLinkButton } from "../../components/Button/Button";
import { ImageCarousel } from "../../components/Carousel/carousel";

function Home() {
    return (
        <div>
            <Layout>
                <div className="HeadContainer">
                    <div className="HeadContent">
                        <BigHeadline text={<>Zorn Baukran <br /> GmbH</>} />
                        <div className="HeadActions">
                            <InternLinkButton url="/Krane" text="Unser Sortiment" />
                            <InternLinkButton url="/Kontakt" text="Kontakt aufnehmen" />
                        </div>
                    </div>
                    <div className="HeadImageLayer">
                        <img src="/Images/DSCN4462.JPG" alt="LKW" />
                    </div>
                </div>

                

                <div>
                    <Headline2 text="Unsere Flotte" subtitle="Eindrücke aus den Einsätzen" />
                    <ImageCarousel />
                </div>
                
            </Layout>
        </div>
    );
}
export default Home;

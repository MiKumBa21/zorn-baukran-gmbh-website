import Layout from "../../components/Layout/Layout";
import './Home.css';
import { BigHeadline } from "../../components/Headline/Headline";
import { InternLinkButton } from "../../components/Button/Button";

function Home() {
    return (
        <div>
            <Layout>
                <div className="HeadContainer">
                    <BigHeadline text={<>Zorn Baukran <br/> GmbH</>} />
                    <InternLinkButton url="/Kontakt" text="Kontakt" />
                    <img src="/Images/DSCN4462.JPG" alt="" />
                </div>
            </Layout>
        </div>
    );
}
export default Home;
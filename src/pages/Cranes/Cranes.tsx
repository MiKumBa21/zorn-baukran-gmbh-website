import BigCard from "../../components/Cards/BigCard/BigCard";
import Layout from "../../components/Layout/Layout";
import QuickErectCranesImg from "../../assets/Images/Cranes/QuickErectCranes/Schnellmontagekran.jpg"
import { Headline1 } from "../../components/Headline/Headline";

function Cranes() {
    return (
        <>
            <Layout>
                <Headline1 text={"Krane"}></Headline1>
                <div className="">

                    <BigCard link="/Krane/Baukrane" image={null} title="Baukrane" text="This is the first crane in our fleet."></BigCard>

                    <BigCard link="/Krane/Schnelleinsatzkran" image={QuickErectCranesImg} title="Schnellmontagekrane"></BigCard>

                    <BigCard link="/Krane/Mobilkran" image={null} title="Mobilkrane" text="This is the first crane in our fleet."></BigCard>
                </div>
            </Layout>

        </>
    );
}
export default Cranes;
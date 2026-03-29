import BigCard from "../../components/Cards/BigCard/BigCard";
import Layout from "../../components/Layout/Layout";
import QuickErectCranesImg from "/Images/Cranes/QuickErectCranes/Schnellmontagekran.jpg"
import ConstCranesImg from "/Images/Cranes/ConstCranes/Baukran.svg"
import MobilCranesImg from "/Images/Cranes/MobilCranes/Mobilkran.jpg"
import { Headline1 } from "../../components/Headline/Headline";
import './Cranes.css';

function Cranes() {
    return (
        <>
            <Layout>
                <Headline1 text={"Krane"}></Headline1>
                <div className="cranesContainer">

                    <BigCard link="/Krane/Baukrane" image={ConstCranesImg} title="Baukrane" description=""></BigCard>

                    <BigCard link="/Krane/Schnelleinsatzkran" image={QuickErectCranesImg} title="Schnellmontagekrane" description=" Für Dachdecker"></BigCard>

                    <BigCard link="/Krane/Mobilkran" image={MobilCranesImg} title="Mobilkrane" description=""></BigCard>
                </div>
            </Layout>

        </>
    );
}
export default Cranes;
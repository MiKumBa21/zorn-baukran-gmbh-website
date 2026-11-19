import { BigCard } from "../../components/Cards/card";
import { Headline1 } from "../../components/Headline/Headline";
import './Cranes.css';

function Cranes() {
    return (
        <>
            <title>Krane | Zorn Baukran GmbH</title>

                <Headline1 text={"Krane"}></Headline1>
                <div className="cranesContainer">

                    <BigCard link="/Krane/Baukrane" image="/Images/Cranes/ConstCranes/Baukran.svg" title="Baukrane" description=""></BigCard>

                    <BigCard link="/Krane/Schnelleinsatzkran" image="/Images/Cranes/QuickErectCranes/Schnellmontagekran.jpg" title="Schnellmontagekrane" description=""></BigCard>

                    <BigCard link="/Krane/Mobilkran" image="/Images/Cranes/MobilCranes/Mobilkran.jpg" title="Mobilkrane" description=""></BigCard>
                </div>


        </>
    );
}
export default Cranes;
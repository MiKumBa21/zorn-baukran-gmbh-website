import BigCard from "../../Components/Cards/big Cards/BigCrad";
import Header from "../../Components/Header/Header";
import "./Cranes.css";
import QuickErectCranesImg from "../../assets/Images/Cranes/QuickErectCranes/Schnellmontagekran.jpg"
import Headline1 from "../../Components/Headline/Headline";

function Cranes() {
    return (
        <>
            <Header></Header>
            <Headline1 text={"Krane"}></Headline1>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                <BigCard link="/cranes/constcranes" image={null} title="Baukrane" text="This is the first crane in our fleet."></BigCard>

                <BigCard link="/cranes/quickerectcranes" image={QuickErectCranesImg} title="Schnellmontagekrane" text="This is the first crane in our fleet."></BigCard>

                <BigCard link="/cranes/mobilcranes" image={null} title="Mobilkrane" text="This is the first crane in our fleet."></BigCard>

            </div>

        </>
    );
}
export default Cranes;
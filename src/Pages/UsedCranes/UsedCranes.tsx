import HorizontalCard from "../../Components/Cards/horizontal Cards/HorizontalCard";
import Header from "../../Components/Header/Header";
import Headline1 from "../../Components/Headline/Headline";

function UsedCranes() {
    return (
        <div>
            <Header></Header>
            <Headline1 text='Gebraucht Krane' ></Headline1>

            <HorizontalCard imgSrc={null} title={"LH 34K"} marke={"Liebherr"} maxLast={4000} spitzenLast={1100} hakenhöhe={26} ausladung={33} beschreibung={"Bj. 1994"} showDescription={true}></HorizontalCard>
        </div>
    );
}  
export default UsedCranes;
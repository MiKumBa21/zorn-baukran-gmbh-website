import HorizontalCard from "../../components/Cards/horizontal Cards/HorizontalCard";
import Header from "../../components/Header/Header";
import Headline1 from "../../components/Headline/Headline";

function UsedCranes() {
    return (
        <div>
            <Header></Header>
            <Headline1 text='Gebraucht Krane' ></Headline1>

            <HorizontalCard imgSrc={null} title={"LH 34K"} marke={"Liebherr"} maxLast={4000} spitzenLast={1100} hakenhöhe={26} ausladung={33} beschreibung={"Top Gewartet und Einsatzbereit\nBj. 1994"} showOptional={true}></HorizontalCard>
        </div>
    );
}  
export default UsedCranes;
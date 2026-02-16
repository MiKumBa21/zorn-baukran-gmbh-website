import Header from "../../../components/Header/Header";
import Headline1 from "../../../components/Headline/Headline";  
import HorizontalCard from "../../../components/Cards/horizontal Cards/HorizontalCard";

function MobilCranes() {
    return (
        <div>
            <Header></Header>

            <Headline1 text='Baukrane' ></Headline1>

            <HorizontalCard imgSrc={null} title={"MK 45"} marke={"Liebherr"} maxLast={6000} spitzenLast={1500} hakenhöhe={17.7} ausladung={27} dataSheet={null}></HorizontalCard>
            </div>
    );
}  
export default MobilCranes;
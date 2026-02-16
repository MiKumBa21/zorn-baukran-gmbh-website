import HorizontalCard from "../../components/Cards/horizontal Cards/HorizontalCard";
import Header from "../../components/Header/Header";
import Headline1 from "../../components/Headline/Headline";

function UsedCranes() {
    return (
        <div>
            <Header></Header>
            <Headline1 text='Gebraucht Krane' ></Headline1>

            <HorizontalCard imgSrc={null} title={"LH 26K"} marke={"Liebherr"} maxLast={2500} spitzenLast={1100} hakenhöhe={20} ausladung={26} dataSheet={null} beschreibung={"top gewartet und einsatzbereit\nBj. 1999"} showUsedCraneOptions={true}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"E 3010"} marke={"Eurogru"} maxLast={4000} spitzenLast={1050} hakenhöhe={21.5} ausladung={30} dataSheet={null} beschreibung={"top gewartet und einsatzbereit\nBj. 2016"} showUsedCraneOptions={true}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"LH 34K"} marke={"Liebherr"} maxLast={4000} spitzenLast={1100} hakenhöhe={26} ausladung={33} dataSheet={null} beschreibung={"top gewartet und einsatzbereit\nverschiedene Baujahre"} showUsedCraneOptions={true}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"E 3310"} marke={"Eurogru"} maxLast={4000} spitzenLast={1000} hakenhöhe={20} ausladung={33} dataSheet={null} beschreibung={"top gewartet und einsatzbereit\nBj. 2006"} showUsedCraneOptions={true}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"LH 45K"} marke={"Liebherr"} maxLast={4000} spitzenLast={1250} hakenhöhe={22} ausladung={36} dataSheet={null} beschreibung={"top gewartet und einsatzbereit\nHub-FU neu\nBj. 1994"} showUsedCraneOptions={true}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"LH 71K"} marke={"Liebherr"} maxLast={6000} spitzenLast={1200} hakenhöhe={35} ausladung={45} dataSheet={null} beschreibung={"top gewartet und einsatzbereit\nBj. 2007"} showUsedCraneOptions={true}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"LH 81K"} marke={"Liebherr"} maxLast={6000} spitzenLast={1400} hakenhöhe={40.5} ausladung={45} dataSheet={null} beschreibung={"top gewartet und einsatzbereit\nverschiedene Baujahre"} showUsedCraneOptions={true}></HorizontalCard>
            //LH 34K, 35K, 40K, 42K, 42K.1 mit/ohne Betriebsauflage jeweils mehrere Stück verfügbar
        </div>
    );
}  
export default UsedCranes;
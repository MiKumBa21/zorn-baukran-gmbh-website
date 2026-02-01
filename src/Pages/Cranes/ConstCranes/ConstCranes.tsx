import Header from '../../../Components/Header/Header';
import Headline1 from '../../../Components/Headline/Headline';
import HorizontalCard from '../../../Components/Cards/horizontal Cards/HorizontalCard';

import E3010DataSheet from '/home/mbruckl/Dokumente/Arbeit/Zorn Baukran GmbH/zorn-baukran-gmbh-website/src/assets/Datasheets/ConstCranes/E3010.pdf'
import E3010Img from '../../../assets/Images/Cranes/ConstCranes/E3010.svg'
import E3310DataSheet from '/home/mbruckl/Dokumente/Arbeit/Zorn Baukran GmbH/zorn-baukran-gmbh-website/src/assets/Datasheets/ConstCranes/E3310.pdf'
import E3810DataSheet from '/home/mbruckl/Dokumente/Arbeit/Zorn Baukran GmbH/zorn-baukran-gmbh-website/src/assets/Datasheets/ConstCranes/E3810.pdf'
import E4014DataSheet from '/home/mbruckl/Dokumente/Arbeit/Zorn Baukran GmbH/zorn-baukran-gmbh-website/src/assets/Datasheets/ConstCranes/E4210.pdf'
import E4210DataSheet from '/home/mbruckl/Dokumente/Arbeit/Zorn Baukran GmbH/zorn-baukran-gmbh-website/src/assets/Datasheets/ConstCranes/E4210.pdf'
import E4210Img from '../../../assets/Images/Cranes/ConstCranes/E4210.svg'
import E4510DataSheet from '/home/mbruckl/Dokumente/Arbeit/Zorn Baukran GmbH/zorn-baukran-gmbh-website/src/assets/Datasheets/ConstCranes/E4510.pdf'
import Footer from '../../../Components/Footer/Footer';

function ConstCranes() {
    return (
        <div>
            <Header></Header>

            <Headline1 text='Baukrane' ></Headline1>

            <HorizontalCard imgSrc={null} title={"LH 26K"} marke={"Liebherr"} maxLast={null} spitzenLast={1100} hakenhöhe={null} ausladung={26} dataSheet={null}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"LH 45 SE"} marke={"Liebherr"} maxLast={null} spitzenLast={1500} hakenhöhe={null} ausladung={27} dataSheet={null}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"LH 32K"} marke={"Liebherr"} maxLast={3500} spitzenLast={1000} hakenhöhe={22} ausladung={30} dataSheet={null}></HorizontalCard>
            <HorizontalCard imgSrc={E3010Img} title={"E 3010"} marke={"Eurogru"} maxLast={4000} spitzenLast={1050} hakenhöhe={21.5} ausladung={30} dataSheet={E3010DataSheet}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"E 3310"} marke={"Eurogru"} maxLast={4000} spitzenLast={1000} hakenhöhe={20} ausladung={33} dataSheet={E3310DataSheet}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"LH 34K"} marke={"Liebherr"} maxLast={4000} spitzenLast={1100} hakenhöhe={26} ausladung={33} dataSheet={null}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"LH 45K"} marke={"Liebherr"} maxLast={4000} spitzenLast={1250} hakenhöhe={22} ausladung={36} dataSheet={null}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"E 3810"} marke={"Eurogru"} maxLast={4000} spitzenLast={1000} hakenhöhe={22} ausladung={38} dataSheet={E3810DataSheet}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"E 4014"} marke={"Eurogru"} maxLast={4000} spitzenLast={1400} hakenhöhe={22.5} ausladung={40} dataSheet={E4014DataSheet}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"LH 65K"} marke={"Liebherr"} maxLast={4500} spitzenLast={1400} hakenhöhe={34.5} ausladung={40} dataSheet={null}></HorizontalCard>
            <HorizontalCard imgSrc={E4210Img} title={"E 4210"} marke={"Eurogru"} maxLast={4000} spitzenLast={1000} hakenhöhe={22} ausladung={42} dataSheet={E4210DataSheet}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"LH 71K"} marke={"Liebherr"} maxLast={6000} spitzenLast={1200} hakenhöhe={35} ausladung={45} dataSheet={null}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"E 4510"} marke={"Eurogru"} maxLast={4000} spitzenLast={1000} hakenhöhe={24} ausladung={45} dataSheet={E4510DataSheet}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"LH 81K"} marke={"Liebherr"} maxLast={6000} spitzenLast={1400} hakenhöhe={40.5} ausladung={45} dataSheet={null}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"LH 81.1K"} marke={"Liebherr"} maxLast={6000} spitzenLast={1350} hakenhöhe={40.5} ausladung={48} dataSheet={null}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"IGO T130"} marke={"Potain"} maxLast={8000} spitzenLast={1400} hakenhöhe={37.3} ausladung={50} dataSheet={null}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"LH 125K"} marke={"Liebherr"} maxLast={8000} spitzenLast={1300} hakenhöhe={41.5} ausladung={55} dataSheet={null}></HorizontalCard>
        
            <Footer></Footer>
        </div>
    );
}
export default ConstCranes;
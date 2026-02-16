import Header from '../../../components/Header/Header';
import Headline1 from '../../../components/Headline/Headline';
import HorizontalCard from '../../../components/Cards/horizontal Cards/HorizontalCard';

import E3010DataSheet from '/home/mbruckl/Dokumente/Arbeit/Zorn Baukran GmbH/zorn-baukran-gmbh-website/src/assets/Datasheets/ConstCranes/E3010.pdf'
import E3010Img from '../../../assets/Images/Cranes/ConstCranes/E3010.svg'
import E3310DataSheet from '/home/mbruckl/Dokumente/Arbeit/Zorn Baukran GmbH/zorn-baukran-gmbh-website/src/assets/Datasheets/ConstCranes/E3310.pdf'
import E3810DataSheet from '/home/mbruckl/Dokumente/Arbeit/Zorn Baukran GmbH/zorn-baukran-gmbh-website/src/assets/Datasheets/ConstCranes/E3810.pdf'
import E4014DataSheet from '/home/mbruckl/Dokumente/Arbeit/Zorn Baukran GmbH/zorn-baukran-gmbh-website/src/assets/Datasheets/ConstCranes/E4210.pdf'
import E4210DataSheet from '/home/mbruckl/Dokumente/Arbeit/Zorn Baukran GmbH/zorn-baukran-gmbh-website/src/assets/Datasheets/ConstCranes/E4210.pdf'
import E4210Img from '../../../assets/Images/Cranes/ConstCranes/E4210.svg'
import E4510DataSheet from '/home/mbruckl/Dokumente/Arbeit/Zorn Baukran GmbH/zorn-baukran-gmbh-website/src/assets/Datasheets/ConstCranes/E4510.pdf'
import Footer from '../../../components/Footer/Footer';

interface CraneData {
    imgSrc: string | null;
    title: string;
    marke: string;
    maxLast: number;
    spitzenLast: number;
    hakenhöhe: number;
    ausladung: number;
    dataSheet?: string;
}

const cranes: CraneData[] = [
    { imgSrc: null, title: "LH 26K", marke: "Liebherr", maxLast: 2500, spitzenLast: 1100, hakenhöhe: 20, ausladung: 26, dataSheet: undefined },
    { imgSrc: null, title: "LH 45 SE", marke: "Liebherr", maxLast: 6000, spitzenLast: 1500, hakenhöhe: 17.7, ausladung: 27, dataSheet: undefined },
    { imgSrc: E3010Img, title: "E 3010", marke: "Eurogru", maxLast: 4000, spitzenLast: 1050, hakenhöhe: 21.5, ausladung: 30, dataSheet: E3010DataSheet },
    { imgSrc: null, title: "E 3310", marke: "Eurogru", maxLast: 4000, spitzenLast: 1000, hakenhöhe: 20, ausladung: 33, dataSheet: E3310DataSheet },
    { imgSrc: null, title: "LH 34K", marke: "Liebherr", maxLast: 4000, spitzenLast: 1100, hakenhöhe: 26, ausladung: 33, dataSheet: undefined },
    { imgSrc: null, title: "LH 45K", marke: "Liebherr", maxLast: 4000, spitzenLast: 1250, hakenhöhe: 22, ausladung: 36, dataSheet: undefined },
    { imgSrc: null, title: "E 3810", marke: "Eurogru", maxLast: 4000, spitzenLast: 1000, hakenhöhe: 22, ausladung: 38, dataSheet: E3810DataSheet },
    { imgSrc: null, title: "E 4014", marke: "Eurogru", maxLast: 4000, spitzenLast: 1400, hakenhöhe: 22.5, ausladung: 40, dataSheet: E4014DataSheet },
    { imgSrc: null, title: "LH 56K", marke: "Liebherr", maxLast: 4500, spitzenLast: 1200, hakenhöhe: 32.7, ausladung: 40, dataSheet: undefined },
    { imgSrc: E4210Img, title: "E 4210", marke: "Eurogru", maxLast: 4000, spitzenLast: 1000, hakenhöhe: 22, ausladung: 42, dataSheet: E4210DataSheet },
    { imgSrc: null, title: "LH 71K", marke: "Liebherr", maxLast: 6000, spitzenLast: 1200, hakenhöhe: 35, ausladung: 45, dataSheet: undefined },
    { imgSrc: null, title: "E 4510", marke: "Eurogru", maxLast: 4000, spitzenLast: 1000, hakenhöhe: 24, ausladung: 45, dataSheet: E4510DataSheet },
    { imgSrc: null, title: "LH 81K", marke: "Liebherr", maxLast: 6000, spitzenLast: 1400, hakenhöhe: 40.5, ausladung: 45, dataSheet: undefined },
    { imgSrc: null, title: "LH 81K.1", marke: "Liebherr", maxLast: 6000, spitzenLast: 1350, hakenhöhe: 40.5, ausladung: 48, dataSheet: undefined },
    { imgSrc: null, title: "IGO T130", marke: "Potain", maxLast: 8000, spitzenLast: 1400, hakenhöhe: 37.3, ausladung: 50, dataSheet: undefined },
    { imgSrc: null, title: "LH 125K", marke: "Liebherr", maxLast: 8000, spitzenLast: 1300, hakenhöhe: 41.5, ausladung: 55, dataSheet: undefined },
];

function ConstCranes() {
    return (
        <div>
            <Header></Header>

            <Headline1 text='Baukrane' ></Headline1>

            {cranes.map((crane) => (
                <HorizontalCard
                    key={crane.title}
                    imgSrc={crane.imgSrc}
                    title={crane.title}
                    marke={crane.marke}
                    maxLast={crane.maxLast}
                    spitzenLast={crane.spitzenLast}
                    hakenhöhe={crane.hakenhöhe}
                    ausladung={crane.ausladung}
                    dataSheet={crane.dataSheet}
                />
            ))}

            <Footer></Footer>
        </div>
    );
}
export default ConstCranes;
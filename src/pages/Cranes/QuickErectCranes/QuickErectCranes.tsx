import Header from "../../../components/Header/Header";
import HorizontalCard from "../../../components/Cards/horizontal Cards/HorizontalCard";
import Headline1 from "../../../components/Headline/Headline";
import DS245Img from '../../../assets/Images/Cranes/QuickErectCranes/DS245V.svg'
import DS245dataSheet from '../../../assets/Datasheets/QuickErectCranes/DS245V.pdf'
import DS318Img from '../../../assets/Images/Cranes/QuickErectCranes/DS318.svg'
import DS318dataSheet from '/home/mbruckl/Dokumente/Arbeit/Zorn Baukran GmbH/zorn-baukran-gmbh-website/src/assets/Datasheets/QuickErectCranes/DS318.pdf'

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

const quickErectCranes: CraneData[] = [
    { imgSrc: DS245Img, title: "DS 245V", marke: "Eurogru", maxLast: 1800, spitzenLast: 500, hakenhöhe: 16.2, ausladung: 24, dataSheet: DS245dataSheet },
    { imgSrc: null, title: "DS 266V", marke: "Eurogru", maxLast: 1800, spitzenLast: 600, hakenhöhe: 18.5, ausladung: 26, dataSheet: undefined },
    { imgSrc: null, title: "DS 267", marke: "Eurogru", maxLast: 2500, spitzenLast: 750, hakenhöhe: 21, ausladung: 26, dataSheet: undefined },
    { imgSrc: null, title: "DS 278", marke: "Eurogru", maxLast: 2500, spitzenLast: 850, hakenhöhe: 21.8, ausladung: 27, dataSheet: undefined },
    { imgSrc: DS318Img, title: "DS 318", marke: "Eurogru", maxLast: 3000, spitzenLast: 800, hakenhöhe: 21, ausladung: 31, dataSheet: DS318dataSheet },
];

function QuickErectCranes() {
    return (
        <>
            <Header></Header>

            <Headline1 text={"Schnellmontagekrane"}></Headline1>

            {quickErectCranes.map((crane) => (
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
        </>
    );
}
export default QuickErectCranes;
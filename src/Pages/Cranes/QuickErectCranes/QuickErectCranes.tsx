import Header from "../../../Components/Header/Header";
import HorizontalCard from "../../../Components/Cards/horizontal Cards/HorizontalCard";
import './QuickErectCranes.css'
import DS245Img from '../../../assets/Images/Cranes/QuickErectCranes/DS245V.svg'
import DS245dataSheet from '../../../assets/DataSheets/QuickErectCranes/DS245V.pdf'
import DS318Img from '../../../assets/Images/Cranes/QuickErectCranes/DS318.svg'
import DS318dataSheet from '../../../assets/DataSheets/QuickErectCranes/DS318.pdf'

function QuickErectCranes() {
    return (
        <>
            <Header></Header>

            <div className="page-header">
                <h1>Schnellmontagekrane</h1>
            </div>

            <HorizontalCard imgSrc={DS245Img} title={"DS 245V"} maxLast={1800} spitzenLast={500} hakenhöhe={16.2} ausladung={24} dataSheet={DS245dataSheet}></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"DS 267"} maxLast={2500} spitzenLast={750} hakenhöhe={21} ausladung={26} ></HorizontalCard>
            <HorizontalCard imgSrc={null} title={"DS 278"} maxLast={2500} spitzenLast={850} hakenhöhe={21.8} ausladung={27}></HorizontalCard>
            <HorizontalCard imgSrc={DS318Img} title={"DS 318"} maxLast={3000} spitzenLast={800} hakenhöhe={21} ausladung={31} dataSheet={DS318dataSheet}></HorizontalCard>
        </>
    );
}
export default QuickErectCranes;
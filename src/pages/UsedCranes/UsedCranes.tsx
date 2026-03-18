import HorizontalCard from "../../components/Cards/HorizontalCard/HorizontalCard";
import { Headline1 } from "../../components/Headline/Headline";
import cranesData from "../../data/cranes.json"
import Layout from "../../components/Layout/Layout";

function UsedCranes() {
    return (
        <div>
            <Layout>
                <Headline1 text='Gebraucht Krane' ></Headline1>

                {cranesData.usedCranes.map(crane => (
                <HorizontalCard key={crane.id} {...crane} />
                ))}
            
                {/*LH 34K, 35K, 40K, 42K, 42K.1 mit/ohne Betriebsauflage jeweils mehrere Stück verfügbar*/}
            </Layout>
        </div>
    );
}  
export default UsedCranes;
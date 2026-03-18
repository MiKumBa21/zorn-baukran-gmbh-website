import { Headline1 } from "../../../components/Headline/Headline";
import cranesData from '../../../data/cranes.json';
import HorizontalCard from "../../../components/Cards/HorizontalCard/HorizontalCard";
import Layout from "../../../components/Layout/Layout";

function QuickErectCranes() {
    return (
        <div>
            <Layout>
                <Headline1 text={"Schnellmontagekrane"}></Headline1>
        
                {cranesData.quickErectCranes.map(crane => (
                <HorizontalCard key={crane.id} {...crane} />
                ))}
            </Layout>
        </div>
    
    );
}
export default QuickErectCranes;
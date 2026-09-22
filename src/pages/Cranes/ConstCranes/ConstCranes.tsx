import { Headline1 } from '../../../components/Headline/Headline';
import { HorizontalCard } from '../../../components/Cards/card';
import cranesData from '../../../data/cranes.json';
import Layout from '../../../components/Layout/Layout';

function ConstCranes() {
    return (
        <div>
            <Layout>
                <Headline1 text='Baukrane' />

                {cranesData.constCranes.map(crane => (
                    <HorizontalCard key={crane.id} {...crane} />
                ))}

            </Layout>
        </div>
    );
}
export default ConstCranes;
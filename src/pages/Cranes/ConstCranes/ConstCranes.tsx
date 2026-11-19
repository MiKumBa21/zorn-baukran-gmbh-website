import {Headline1} from '../../../components/Headline/Headline';
import {HorizontalCard} from '../../../components/Cards/card';
import cranesData from '../../../data/cranes.json';

function ConstCranes() {
    return (
        <div>
            <title>Baukrane | Zorn Baukran GmbH</title>
            <Headline1 text='Baukrane'/>

            {cranesData.constCranes.map(crane => (
                <HorizontalCard key={crane.id} {...crane} />
            ))}

        </div>
    );
}

export default ConstCranes;
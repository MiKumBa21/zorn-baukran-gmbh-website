import {Headline1} from "../../../components/Headline/Headline";
import {HorizontalCard} from "../../../components/Cards/card";
import cranesData from '../../../data/cranes.json';

function MobilCranes() {
    return (
        <div>
            <title>Mobilkrane | Zorn Baukran GmbH</title>
            <Headline1 text='Mobilkrane'></Headline1>

            {cranesData.mobilCranes.map(crane => (
                <HorizontalCard key={crane.id} {...crane} />
            ))}
        </div>
    );
}

export default MobilCranes;
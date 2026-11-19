import {Headline1} from "../../../components/Headline/Headline";
import cranesData from '../../../data/cranes.json';
import {HorizontalCard} from "../../../components/Cards/card";

function QuickErectCranes() {
    return (
        <div>
            <title>Schnellmontagekrane | Zorn Baukran GmbH</title>
            <Headline1 text={"Schnellmontagekrane"}></Headline1>

            {cranesData.quickErectCranes.map(crane => (
                <HorizontalCard key={crane.id} {...crane} />
            ))}

        </div>

    );
}

export default QuickErectCranes;
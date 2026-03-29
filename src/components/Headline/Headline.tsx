import type { ReactNode } from 'react';
import './Headline.css';

interface HeadlineProps {
    text: ReactNode;
    subtitle?: string;
}

export function Headline1(props: HeadlineProps) {
    return (
        <div className="headline">
            <h1>{props.text}</h1>
            {props.subtitle && <p>{props.subtitle}</p>}
        </div>
    );
}

export function Headline2(props: HeadlineProps) {
    return (
        <div className="headline">
            <h2>{props.text}</h2>
            {props.subtitle && <p>{props.subtitle}</p>}
        </div>
    );
}

export function BigHeadline(props: HeadlineProps) {
    return (
        <div className="headline">
            <div className="BigHeadline">
                <h1>{props.text}</h1>
            </div>
        </div>
    );
}


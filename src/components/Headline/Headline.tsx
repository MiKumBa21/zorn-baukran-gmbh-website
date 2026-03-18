import './Headline.css';

interface HeadlineProps {
    text: string;
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


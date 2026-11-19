export interface Crane {
    id: string;
    title: string;
    marke: string;
    maxLast: number;
    spitzenLast: number;
    hakenhöhe: number;
    ausladung: number;
    imgSrc: string;
    dataSheet: string;

    baujahr?: string;
    beschreibung?: string;
}

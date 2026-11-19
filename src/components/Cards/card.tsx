import "./card.css";
import {DownloadButton} from '../Button/Button';
import {Link} from "react-router-dom";
import {useState} from "react";
import type {Crane} from "../../types/crane.ts";

interface HorizontalCardProps extends Crane {
    showUsedCraneOptions?: boolean;
}

export function HorizontalCard(props: HorizontalCardProps) {
    const showUsedCraneOptions = props.showUsedCraneOptions ?? false;
    const [isImageOpen, setIsImageOpen] = useState(false);

    return (
        <div>
            <div className="horizontal-card-container">
                <div className="horizontal-card-body">
                    <div>
                        {props.imgSrc ? (<img
                            src={props.imgSrc}
                            className="horizontal-card-img"
                            alt={"Bild von einem " + props.title}
                            onClick={() => setIsImageOpen(true)}
                            loading="lazy"
                        />) : (<div className="image-placeholder">
                            <img src="/Images/noPicture.jpg" className="horizontal-card-img" alt="Kein Bild verfügbar"/>
                        </div>)}
                    </div>

                    <div className="horizontal-card-content">
                        <h5 className="horizontal-card-title">{props.title}</h5>
                        <h5 className='horizontal-card-subtitle'>{props.marke}</h5>

                        <div className='horizontal-card-table' aria-hidden="false">
                            <div className='horizontal-card-table-row'>
                                <div className='horizontal-card-table-cell label'>Ausladung</div>
                                <div className='horizontal-card-table-cell value'>{props.ausladung}m</div>
                                {showUsedCraneOptions && (
                                    <div className='horizontal-card-table-cell value'>Preis auf Anfrage</div>)
                                }
                            </div>
                            <div className='horizontal-card-table-row'>
                                <div className='horizontal-card-table-cell label'>Max. Last</div>
                                <div className='horizontal-card-table-cell value'>{props.maxLast}kg</div>
                            </div>
                            <div className='horizontal-card-table-row'>
                                <div className='horizontal-card-table-cell label'>Hackenhöhe</div>
                                <div className='horizontal-card-table-cell value'>{props.hakenhöhe}m</div>
                            </div>
                            <div className='horizontal-card-table-row'>
                                <div className='horizontal-card-table-cell label'>Spitzenlast</div>
                                <div className='horizontal-card-table-cell value'>{props.spitzenLast}kg</div>
                                <div>{props.dataSheet ? (
                                    <DownloadButton text="Datenblatt" path={props.dataSheet}></DownloadButton>) : (
                                    <div className="datasheet-placeholder">Kein Datenblatt verfügbar</div>)}</div>
                            </div>
                            {showUsedCraneOptions && (
                                <div className='horizontal-card-table-row'>
                                    <div className='horizontal-card-table-cell label'>Baujahr</div>
                                    <div className='horizontal-card-table-cell value'>{props.baujahr}</div>
                                </div>
                            )}
                            {showUsedCraneOptions && (
                                <div className='horizontal-card-table-row'>
                                    <div className='horizontal-card-table-cell label'>Beschreibung</div>
                                    <div className='horizontal-card-table-cell value'>{props.beschreibung}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
            {isImageOpen && props.imgSrc && (
                <div
                    className="image-lightbox-overlay"
                    onClick={() => setIsImageOpen(false)}
                >
                    <img
                        src={props.imgSrc}
                        className="image-lightbox-img"
                        alt="Bild vergrößert"
                    />
                </div>
            )}
        </div>
    );
}

interface BigCardProps {
    link: string;
    image: string | undefined;
    title: string;
    description: string;
}

export function BigCard(props: BigCardProps) {
    return (

        <div className='big-card-container'>
            <Link to={props.link} style={{textDecoration: "none"}}>
                <div className="big-card-content">
                    <img src={props.image} className="big-card-img" alt={props.title}></img>
                    <div className="big-card-body">
                        <h2 className="big-card-title">{props.title}</h2>
                        <div className='big-card-description'>{props.description}</div>
                    </div>
                </div>
            </Link>
        </div>

    );
}
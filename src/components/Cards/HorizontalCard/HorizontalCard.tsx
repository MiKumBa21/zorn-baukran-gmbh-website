import "./HorizontalCard.css";
import { DownloadButton } from '../../Button/Button';

function HorizontalCard(props: any) {
    const showUsedCraneOptions = props.showUsedCraneOptions ?? false;

    return (
        <div className="horizontal-card">
            <div className="card-body">
                <div className="col-md-4">
                    <img src={props.imgSrc} className="img-fluid rounded-start" alt="Bild" />
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h5 className='card-subtitle'>{props.marke}</h5>

                        <div className='card-table' aria-hidden="false">
                            <div className='card-table-row'>
                                <div className='card-table-cell label'>Ausladung</div>
                                <div className='card-table-cell value'>{props.ausladung}m</div>
                                {showUsedCraneOptions && (
                                    <div className='card-table-cell value'>Preis auf Anfrage</div>)
                                }
                            </div>
                            <div className='card-table-row'>
                                <div className='card-table-cell label'>Max. Last</div>
                                <div className='card-table-cell value'>{props.maxLast}kg</div>
                            </div>
                            <div className='card-table-row'>
                                <div className='card-table-cell label'>Hackenhöhe</div>
                                <div className='card-table-cell value'>{props.hakenhöhe}m</div>
                            </div>
                            <div className='card-table-row'>
                                <div className='card-table-cell label'>Spitzenlast</div>
                                <div className='card-table-cell value'>{props.spitzenLast}kg</div>
                                <div>
                                    <DownloadButton text="Datenblatt" path={props.dataSheet}></DownloadButton>
                                </div>
                            </div>
                            {showUsedCraneOptions && (
                                <div className='card-table-row'>
                                    <div className='card-table-cell label'>Beschreibung</div>
                                    <div className='card-table-cell value'>{props.beschreibung}</div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default HorizontalCard;
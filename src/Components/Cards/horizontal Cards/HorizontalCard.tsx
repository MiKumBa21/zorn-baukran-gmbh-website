import './HorizontalCard.css';

function HorizontalCard(props: any) {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.imgSrc} className="img-fluid rounded-start" alt="Bild"  />
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>

                        <div className='card-table' aria-hidden="false">
                            <div className='card-table-row'>
                                <div className='card-table-cell label'>Ausladung</div>
                                <div className='card-table-cell value'>{props.ausladung}m</div>
                            </div>
                            <div className='card-table-row'>
                                <div className='card-table-cell label'>Max. Last</div>
                                <div className='card-table-cell value'>{props.maxLast}kg</div>
                            </div>
                            <div className='card-table-row'>
                                <div className='card-table-cell label'>Max. Hackenhöhe</div>
                                <div className='card-table-cell value'>{props.hakenhöhe}m</div>
                            </div>
                            <div className='card-table-row'>
                                <div className='card-table-cell label'>Spitzenlast</div>
                                <div className='card-table-cell value'>{props.spitzenLast}kg</div>
                            </div>
                        </div>
                    <a href={props.dataSheet} target="_blank" className="btn btn-primary">Datenblatt</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HorizontalCard;
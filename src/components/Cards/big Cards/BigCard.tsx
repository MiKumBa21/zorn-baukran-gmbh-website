import "./BigCard.css";
import { Link } from 'react-router-dom';

function BigCard(props: any) {
    return (
        <>
            <Link to={props.link} style={{ textDecoration: "none" }}>
                <div className="col">
                    <div className="card h-100">
                        <img src={props.image} className="card-img-top" alt="Bild"></img>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
export default BigCard;
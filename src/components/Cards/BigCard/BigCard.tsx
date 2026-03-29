import { Link } from 'react-router-dom';
import './BigCard.css';

interface BigCardProps {
    link: string;
    image: string | undefined;
    title: string;
    description: string;
}

function BigCard(props: BigCardProps) {
    return (

        <div className='CardContainer'>
            <Link to={props.link} style={{ textDecoration: "none" }}>
                <div className="col">
                    <div className="card h-100">
                        <img src={props.image} className="card-img" alt="Bild"></img>
                        <div className="card-body">
                            <h2 className="card-title">{props.title}</h2>
                            <div className='description'>{props.description}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    );
}
export default BigCard;
import "./card.scss";

function Card({ data }) {
    const { id, title, cover } = data;
    
    return (
        <div className="card" id={id}>
            <p>{title}</p>
            <img src={cover} alt={title}/>
        </div>
    )
}

export default Card;
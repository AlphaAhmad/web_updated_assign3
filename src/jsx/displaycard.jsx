import "../css/card.css"


function Card({title,value,percentage})
{
    return(
        <div className="card">
            <div className="cardTitle">{title}</div>
            <div className="cardValue">{value}</div>
            <div className="stats"><span>{percentage}%</span> change in last week</div>
        </div>
    )
}


export default Card     
const Card = (props) => {
  return (<div className="Card">
    <h2>{props.name}</h2>
    <img src={props.link} alt={props.name} />
    <p>{props.data}</p>
    <p>{props.wyksztalcenie}</p>
    <p>{props.kraj}</p>
  </div>)
}

export default Card;
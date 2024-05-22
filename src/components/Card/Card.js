import './Card.css';

function Card(props) {
    return (
        <div className="hero">
            <h1 className="hero__name">{props.name}</h1>
            <img className="hero__pic" src={props.url} alt={props.name} />
            <div className="hero__text">Вселенная: {props.universe}</div>
            <div className="hero__text">Альтерэго: {props.alterego}</div>
            <div className="hero__text">
                Род деятельности: {props.occupation}
            </div>
            <div className="hero__text">Союзники: {props.friends}</div>
            <div className="hero__text">Способности: {props.superpowers}</div>
            <div className="hero__text">{props.info}</div>
        </div>
    );
}
export default Card;

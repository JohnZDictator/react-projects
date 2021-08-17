import './birthday-card.css';

const BirthdayCard = ({ img, name, age }) => {
    return (
        <div className="card">
            <img src={img} alt="profile" />
            <div className="description">
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
        </div>
    );
}

export default BirthdayCard;
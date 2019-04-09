import React from 'react';

// import 'tachyons';

const Card = (props) => {
    const { name, email, id } = props;
    return (
        <div className="bg-light-blue dib br3 pa2 ma2 dim bw2 shadow-5 tc">
            <img src={`https://robohash.org/${id}/128x128/`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
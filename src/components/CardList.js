import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {
    const peopleArray = people.map((user, i) => {
        return (
            <Card
                key={people[i].id}
                id={people[i].id}
                name={people[i].name}
                email={people[i].email}
            />
        );
    });
    return (
        <div>
            {peopleArray}
        </div>
    );
}

export default CardList;
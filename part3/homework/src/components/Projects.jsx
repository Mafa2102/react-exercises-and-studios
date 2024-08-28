import data from './../data.json';
import { useState } from 'react';

export default function MyProjects(){
    const [index, setIndex] = useState(0);
    let containedItem = data[index];


    function handleClick() {
        index < data.length - 1 ? setIndex(index + 1) : setIndex(0);
    };

    return (
        <>
            <button onClick={handleClick}>Next</button>
            <div>
                <h2>{containedItem.name}</h2>
                <h3>{containedItem.usefor}</h3>
                <h3>{containedItem.importance}</h3>
                <h3>{containedItem.link}</h3>
            </div>
        </>
        
    );
};
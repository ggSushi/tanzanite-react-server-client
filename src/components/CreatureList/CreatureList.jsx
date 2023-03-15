import { useState, useEffect } from 'react';
// We must import axios in each component that we want to use it
import axios from 'axios';



function CreatureList() {
    const [listOfCreatures, setListOfCreatures] = useState([]);

    const fetchCreatureList = () => {
        axios.get('/creature').then((response) => {
            //* Update the array, REACT does the rest!
            setListOfCreatures(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong');
        });
    }

    // ! Don't do this in REACT. It will potentially ruin React's timing
    // fetchCreatureList()
    
    useEffect(() => {
        // At this point, REACT is ready!
        fetchCreatureList();
    }, []); //! Remember the empty Array

    // All component return what you want to display on DOM
    return (
        <div>
            <h2>Creature List</h2>
            {
                // This turns our array into a string
                // (For testing only) This will confirm that your data is working
                // You can delete or comment this out after .map
                // JSON.stringify(listOfCreatures)
            }
            <ul>
                {
                    listOfCreatures.map((creature) => (
                        // what we want to render
                        <li key={creature.id}>
                            {creature.name} from {creature.origin}
                        </li>
                    ))
                }
            </ul>
        </div>

    );
}

// All components must export

export default CreatureList;
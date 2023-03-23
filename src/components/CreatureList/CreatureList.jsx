import { useState, useEffect } from 'react';
// We must import axios in each component that we want to use it
import axios from 'axios';
import CreatureForm from './CreatureForm.jsx';
import CreatureItem from './CreatureItem.jsx';


function CreatureList() {
    const [creatureName, setCreatureName] = useState('');
    const [creatureOrigin, setCreatureOrigin] = useState('');
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
            <CreatureForm 
                creatureName={creatureName}
                setCreatureName={setCreatureName}
                creatureOrigin={creatureOrigin}
                setCreatureOrigin={setCreatureOrigin}
                fetchCreatureList={fetchCreatureList} 
            />
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
                        <CreatureItem  
                            key={creature.id}
                            creature={creature}
                            creatureName={creature.name}
                            fetchCreatureList={fetchCreatureList}
                        />
                    ))
                }
            </ul>
        </div>

    );
}

// All components must export

export default CreatureList;
import axios from 'axios';

function CreatureItem({creature, creatureName, fetchCreatureList}) {
    // This same pattern can be used for update 
    // (marking something complete)
    const removeCreature = (e) => {
        console.log(`removeCreature ${creature.id}`)
        // Pass the id of creature to delete
        axios.delete(`/creature/${creature.id}`).then((response) => {
            //fetchCreatureList
            fetchCreatureList();
        }).catch((error) => {
            console.log(`Error in removeCreature ${error}`);
            alert('Something went wrong');
        })

    }

    return (
        <>
            {/* what we want to render */}
            <li>
                {creatureName} is from {creature.origin}
                <button onClick={(e) => removeCreature(e)}>Delete</button>
            </li>
        </>
    )
}

export default CreatureItem;
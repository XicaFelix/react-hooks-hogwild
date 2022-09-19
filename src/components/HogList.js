import react from 'react';
import HogCard from './HogCard';

function HogList({hogs}){
    const hogList = hogs.map((hog)=>
    <HogCard key={hog.name} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog['highest medal achieved']} image={hog.image}/>)
     return(
         <div className='ui grid container'>
             {hogList}
         </div>
     )
}

export default HogList;
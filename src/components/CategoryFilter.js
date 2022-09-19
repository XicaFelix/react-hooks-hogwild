


function CategoryFilter({onFilterPigs, greasyPig}){
    function onFilterGreasyPigs(){
        onFilterPigs();
    }
    return(
        <div>
           <button onClick={onFilterGreasyPigs}>{greasyPig ? "Show All Pigs": "I'm a Greasy Pig"}</button>
        </div>
    )
}

export default CategoryFilter;
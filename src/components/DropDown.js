function DropDown({setCategory, handleCategoryChange}){
    function onCategoryChange(event){
        setCategory(event.target.value)
        handleCategoryChange()
    }
    return(
        <form>
            <label htmlFor="Sort">Sort by Weight or Name</label>
                <select name="sort" id="sort" onChange={onCategoryChange}>
                    <option value='weight'>Weight</option>
                    <option value='name'>Name</option>
                </select>
        </form>
    )
}

export default DropDown;
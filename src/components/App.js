import React, {useState} from "react";
import Nav from "./Nav";
import CategoryFilter from "./CategoryFilter";
import DropDown from "./DropDown";

import hogs from "../porkers_data";
import HogList from "./HogList";

function App() {
	const [filterPigs, setFilterPigs]= useState(hogs);
	const [greasyPig, setGreasyPig] = useState(false)
	const [category, setCategory] = useState('weight')

	function handleFilterPigs(){
		setGreasyPig(!greasyPig);
		greasyPig ? setFilterPigs(hogs): setFilterPigs(hogs.filter(hog=> hog.greased !== false))
	}

	function handleCategoryChange(){
		if (category === 'weight') {
			setFilterPigs(filterPigs.sort((a,b)=> {
				const nameA = a.name.toUpperCase()
				const nameB =b.name.toUpperCase()
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
		 }))
		} else {
			setFilterPigs(filterPigs.sort((a,b)=> a.weight - b.weight));
		}
	}
	return (
		<div className="App">
			<Nav />
			<CategoryFilter onFilterPigs={handleFilterPigs} greasyPig={greasyPig}/>
			<br/>
			<DropDown setCategory={setCategory} handleCategoryChange={handleCategoryChange}/>
			<br/>
			<HogList hogs={filterPigs}/>
		</div>
	);
}

export default App;

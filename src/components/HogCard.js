import react, {useState} from "react";

function HogCard({name, image, medal, weight, greased}){
    const [showDetail, setDetail]= useState(true)
    function onShowDetail(){
        setDetail(!showDetail)
    }
    return(
        <div className="ui cards, ui eight wide column">
            <div className="ui card">
                <div className= 'image' onClick={onShowDetail}>
                    <h2>{name}</h2>
                    <img src={`${image}`}/>
                </div>
                <div className="content" style={{display: showDetail ? 'none' : 'block'}}>
                    <div className="description">
                        <p>Weight: {weight}</p>
                        <p>Greased: {greased ? 'Yes': 'No'}</p>
                        <p>Medal: {medal}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HogCard;
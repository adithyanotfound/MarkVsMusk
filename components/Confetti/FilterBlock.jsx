import React from "react";
import "./FilterBlock.css"
export default function FilterBlock(props){
    return(
        <main id="filterBlock" className="section-p">
            <select name="categories" id="categories" value={props.selectedVal} onChange={props.getSelectedVal}>
                <option value="">All Posts</option>
                <option value="Teens">Teens</option>
                <option value="Young Adults">Young Adults</option>
                <option value="Adults">Adults</option>
                <option value="Relationships">Relationships</option>
                <option value="Wellness">Wellness and Mindfulness</option>
            </select>
            <form action="" onSubmit={(event)=> event.preventDefault()}>
                <input type="text" placeholder="Search for blogs..." onKeyUp={props.searchBlog} onChange={props.getInputVal}/>
                <button type="submit" onClick={props.searchBlog}>
                    <img src="../../images/icons/magnifying-glass.svg" alt="" className="icon"/>
                </button>
            </form>
        </main>
    )
}
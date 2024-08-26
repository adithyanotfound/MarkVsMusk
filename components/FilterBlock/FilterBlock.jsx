import React from 'react';
import './FilterBlock.css'
const Filterblock = ({search, getSelectedVal, getInputVal}) => {
    return (
        <section id='filterBlock' className='section-p'>
                <select name="categories" id="categories" onChange={getSelectedVal}>
                    <option value="">All Categories</option>
                    <option value="Social Impact">Social Impact</option>
                    <option value="Technology">Technology</option>
                    <option value="Entrepreneurship">Entrepreneurship</option>
                    <option value="Future Vision">Future Vision</option>
                    <option value="Behaviour & Personality">Behaviour & Personality</option>
                    <option value="Media Presence & Public Perception">Media Presence & Public Perception</option>
                    <option value="Economic & Industrial Influence">Economic & Industrial Influence</option>
                </select>
                <form>
                    <input type="text" placeholder='Search for Blogs...' onChange={getInputVal} onKeyUp={search}/>
                    <button>
                        <img src="../../images/icons/search.svg" alt="search blogs button" />
                    </button>
                </form>
        </section>
    );
}

export default Filterblock;

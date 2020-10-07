import React from 'react';
import { Link } from 'react-router-dom';
import './volunteerCategory.css'




const VolunteerCategory = (props) => {

    const { img, title } = props.category;
    return (
        
            <div className="col-md-3 mb-5 text-center">
            <Link to={`/volunteer/${title}`}>
                    <img src={img} alt="" />
                    <h4 className="my-4 text_title">{title}</h4>
                </Link>
            </div>
        
    );
};

export default VolunteerCategory;
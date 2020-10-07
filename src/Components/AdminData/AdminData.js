import React from 'react';
import img from '../../Components/images/studyGroup.png'

const AdminData = (props) => {
    const { title, date } = props.works;
    return (
        <div className='col-md-6'>
            <div className="eventDetails">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <h4>{title}</h4>
                    <p>{date}</p>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AdminData;
import React from 'react';
import { category } from '../../fakeData/category';
import VolunteerCategory from '../VolunteerCategory/VolunteerCategory';

const Volunteer = () => {
    return (
        

         <section className="services mb-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-uppercase text-primary">Our services</h5>
                    <h1>Service We Provide</h1>
                </div>
                <div className="row mt-5 pt-5">
                    {
                        category.map(category => <VolunteerCategory key={category.id} category={category} ></VolunteerCategory>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
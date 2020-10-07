import React from 'react';
import { Button } from 'react-bootstrap';
import Volunteer from '../Volunteer/Volunteer';
import './Home.css'

const Home = () => {
    return (
        <div className='Main_Wrap'>
           <div className="Home">
                <div className="container">
                    <div className="main_Home">
                        <div className="home_content">
                            <h1>I grow by helping people in need.</h1>
                        </div>
                        <div className="home_input">
                            <input placeholder="Search ..." type="search" name="" id="" />
                            <Button className="search_btn" variant="primary"> Search </Button>
                        </div>
                    </div>
                </div>
           </div>
               <Volunteer></Volunteer>
        </div>
      

    );
};

export default Home;
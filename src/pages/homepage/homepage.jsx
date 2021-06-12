import React from 'react';
import './homepage.scss';
import Slider from '../../components/slider/slider';
import {SlideData} from '../../components/slider/slide.data';
import Directory from '../../components/directory/directory';

const Homepage = () => (
   <div className="homepage">
       <Slider slides={SlideData}/>
       <Directory/>
   </div>
)

export default Homepage;
import React, { Component } from 'react';
import Slide1 from './images/slide1.jpg';

import Image from '../../styled-components/Image';

class Banner extends Component {
    render() { 
        return (
            <Image image={Slide1} height="500px"></Image>
        );
    }
}
 
export default Banner;
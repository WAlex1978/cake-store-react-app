import React, { Component } from 'react';
import Img from '../images/main-banner.jpg';

import Image from '../../styled-components/Image';

class Banner extends Component {
    render() { 
        return (
            <Image image={Img} height="500px" position="100% 15%" />
        );
    }
}
 
export default Banner;
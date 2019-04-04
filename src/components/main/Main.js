import React, { Component } from 'react';

import CupCakes from './CupCakes';
import Banner from './Banner';

class Main extends Component {

    render() { 
        return (
            <div>
                <Banner />
                <CupCakes />
            </div>
        );
    }
}
 
export default Main;
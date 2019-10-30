import React from 'react';
import LandingPageMenu from '../components/LandingPageMenu';
import LandingPageText from '../components/LandingPageText';
import Background from '../SLIKI/plan2.jpg';

const slikaStyle = {
        backgroundImage:`url(${Background})` ,
        width:'100%',
        height:'700px',
        backgroundSize:'cover'
  
};

function LandingPage(){

    return(
        <div style={slikaStyle}>   
            <LandingPageMenu />
            <LandingPageText/>
        </div>
    )
}

export default LandingPage
import React, { useEffect, useState } from 'react';
import FeatureBox from '../FeatureBox';
import '../Dashboard.css';
import aperture_green from '../screens/images/aperture-green.png';
import aperture_red from '../screens/images/aperture-red-closed.png';
import check_mark from '../screens/images/check_mark.png';
import warning from '../screens/images/alert.png';

function SecureCode() {

    return (
        <div>
            <img className='healthSizingTopRow' src={aperture_red}/>
            <div className='title'>Secure Code</div>

            <div className='subtitle'>Key Capabilities</div>

            <div className='body'>Static Code Analysis
                <img className='indicator' src={warning}/>
            </div>

            <div className='body'>Dynamic Code Analysis
                <img className='indicator' src={check_mark}/>
            </div>

            <div className='body'>Encryption
                <img className='indicator' src={warning}/>
            </div>
        </div>
    )
}

export default SecureCode;
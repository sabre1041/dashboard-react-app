import React, { useEffect, useState } from 'react';
import FeatureBox from '../FeatureBox';
import '../Dashboard.css';
import aperture_green from '../screens/images/aperture-green.png';
import aperture_red from '../screens/images/aperture-red-closed.png';
import check_mark from '../screens/images/check_mark.png';
import warning from '../screens/images/alert.png';

function SecureMonitoring() {

    return (
        <div>
            <img className='healthSizingTopRow' src={aperture_red}/>
            <div className='title'>Secure Monitoring & Logging</div>

            <div className='subtitle'>Key Capabilities</div>

            <div className='body'>Access Monitoring
                <img className='indicator' src={warning}/>
            </div>

            <div className='body'>Log Centralization
                <img className='indicator' src={warning}/>
            </div>
        </div>
    )
}

export default SecureMonitoring;
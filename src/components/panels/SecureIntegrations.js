import React, { useEffect, useState } from 'react';
import FeatureBox from '../FeatureBox';
import '../Dashboard.css';
import aperture_green from '../screens/images/aperture-green.png';
import aperture_red from '../screens/images/aperture-red-closed.png';
import check_mark from '../screens/images/check_mark.png';
import warning from '../screens/images/alert.png';

function SecureIntegrations() {

    return (
        <div>
            <img className='healthSizingBottomRow' src={aperture_green}/>
            <div className='title'>Secure Integrations</div>

            <div className='subtitle'>Key Capabilities</div>

            <div className='body'>Authentication
                <img className='indicator' src={check_mark}/>
            </div>

            <div className='body'>Traffic Analysis
                <img className='indicator' src={check_mark}/>
            </div>

            <div className='body'>Exposure Protection
                <img className='indicator' src={check_mark}/>
            </div>

            <div className='body'>Secure Protocols
                <img className='indicator' src={check_mark}/>
            </div>
        </div>
    )
}

export default SecureIntegrations;
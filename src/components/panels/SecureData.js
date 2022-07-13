import React, { useEffect, useState } from 'react';
import FeatureBox from '../FeatureBox';
import '../Dashboard.css';
import aperture_green from '../screens/images/aperture-green.png';
import aperture_red from '../screens/images/aperture-red-closed.png';
import check_mark from '../screens/images/check_mark.png';
import warning from '../screens/images/alert.png';

function SecureData() {

    return (
        <div>
            <img className='healthSizingBottomRow' src={aperture_red}/>
            <div className='title'>Secure Data</div>

            <div className='subtitle'>Key Capabilities</div>

            <div className='body'>Classification
                <img className='indicator' src={warning}/>
            </div>

            <div className='body'>Vulnerability Scanning
                <img className='indicator' src={warning}/>
            </div>

            <div className='body'>Encryption
                <img className='indicator' src={check_mark}/>
            </div>
            <div className='body'>Loss Prevention
                <img className='indicator' src={check_mark}/>
            </div>
        </div>
    )
}

export default SecureData;
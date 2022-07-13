import React, { useState } from 'react';
import FeatureBox from './FeatureBox';
import './Dashboard.css';
import aperture_green from './screens/images/aperture-green.png';
import aperture_red from './screens/images/aperture-red-closed.png';
import check_mark from './screens/images/check_mark.png';
import warning from './screens/images/alert.png';
import { Card, CardBody, CardTitle, CardText
 } from 'reactstrap';

function FeatureBoxCollection() {
    return (
    <div id="page-container">
    <FeatureBox style={{
      marginLeft: 400,
      marginTop: 20
    }}><img className='healthSizingTopRow' src={aperture_green}/>
    <div className='title'>Secure Infrastructure</div>

    <div className='subtitle'>Key Capabilities</div>

    <div className='body'>Platform Hardening
        <img className='indicator' src={check_mark}/>
    </div>

    <div className='body'>Container Protection
        <img className='indicator' src={check_mark}/>
    </div>
    <div className='body'>Secure Images
        <img className='indicator' src={check_mark}/>
    </div>
    </FeatureBox>

    <FeatureBox style={{
      marginLeft: 400,
      marginTop: 20
    }}><img className='healthSizingBottomRow' src={aperture_red}/>
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
    </FeatureBox>
    
    <FeatureBox style={{
      marginLeft: 750,
      marginTop: -669,
    }}><img className='healthSizingTopRow' src={aperture_red}/>
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
    </FeatureBox>

    <FeatureBox style={{
      marginLeft: 750,
      marginTop: 20,
    }}><img className='healthSizingBottomRow' src={aperture_green}/>
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
    </FeatureBox>

    <FeatureBox style={{
      marginLeft: 1100,
      marginTop: -669,
    }}><img className='healthSizingTopRow' src={aperture_red}/>
    <div className='title'>Secure Monitoring & Logging</div>

    <div className='subtitle'>Key Capabilities</div>

    <div className='body'>Access Monitoring
        <img className='indicator' src={warning}/>
    </div>

    <div className='body'>Log Centralization
        <img className='indicator' src={warning}/>
    </div>
    </FeatureBox>
    </div>
    )
}

export default FeatureBoxCollection;
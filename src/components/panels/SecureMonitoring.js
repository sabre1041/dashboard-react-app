import React, { useEffect, useState } from 'react';
import FeatureBox from '../FeatureBox';
import '../Dashboard.css';
import aperture_green from '../screens/images/aperture-green.png';
import aperture_red from '../screens/images/aperture-red-closed.png';
import check_mark from '../screens/images/check_mark.png';
import warning from '../screens/images/alert.png';

function SecureMonitoring(props) {

    const [overall, setOverall] = useState();
    const [accessMonitoring, setAccessMonitoring] = useState();
    const [logCentralization, setLogCentralization] = useState();

    useEffect(() => {
        filterResponse(props.props)
    }, [props])

    const filterResponse = (props) => {
        if(props === undefined || props.subCategories === undefined) {
            return;
        }
        setOverall(props.status === "pass" ? aperture_green : aperture_red )
        for(const prop of props.subCategories) {
            if(prop.category === "Access Monitoring") {
                setAccessMonitoring(prop.status === "pass" ? check_mark : warning)
            }
            else if(prop.category === "Log Centralization") {
                setLogCentralization(prop.status === "pass" ? check_mark : warning)
            }
        }
    }

    return (
        <div>
            <img className='healthSizingTopRow' src={overall}/>
            <div className='title'>Secure Monitoring & Logging</div>

            <div className='subtitle'>Key Capabilities</div>

            <div className='body'>Access Monitoring
                <img className='indicator' src={accessMonitoring}/>
            </div>

            <div className='body'>Log Centralization
                <img className='indicator' src={logCentralization}/>
            </div>
        </div>
    )
}

export default SecureMonitoring;
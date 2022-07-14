import React, { useEffect, useState } from 'react';
import FeatureBox from '../FeatureBox';
import '../Dashboard.css';
import aperture_green from '../screens/images/aperture-green.png';
import aperture_red from '../screens/images/aperture-red-closed.png';
import check_mark from '../screens/images/check_mark.png';
import warning from '../screens/images/alert.png';

function SecureIntegrations(props) {

    const [overall, setOverall] = useState();
    const [authentication, setAuthentication] = useState();
    const [trafficAnalysis, setTrafficAnalysis] = useState();
    const [exposureProtection, setExposureProtection] = useState();
    const [secureProtocols, setSecureProtocols] = useState();

    useEffect(() => {
        filterResponse(props.props)
    }, [props])

    const filterResponse = (props) => {
        if(props === undefined || props.capabilities === undefined) {
            return;
        }
        setOverall(props.flag === "green" ? aperture_green : aperture_red )
        for(const prop of props.capabilities) {
            if(prop.name === "Authentication") {
                setAuthentication(prop.flag === "green" ? check_mark : warning)
            }
            else if(prop.name === "Traffic Analysis") {
                setTrafficAnalysis(prop.flag === "green" ? check_mark : warning)
            }
            else if(prop.name === "Exposure Protection") {
                setExposureProtection(prop.flag === "green" ? check_mark : warning)
            }
            else if(prop.name === "Secure Protocols") {
                setSecureProtocols(prop.flag === "green" ? check_mark : warning)
            }
        }
    }

    return (
        <div>
            <img className='healthSizingBottomRow' src={overall}/>
            <div className='title'>Secure Integrations</div>

            <div className='subtitle'>Key Capabilities</div>

            <div className='body'>Authentication
                <img className='indicator' src={authentication}/>
            </div>

            <div className='body'>Traffic Analysis
                <img className='indicator' src={trafficAnalysis}/>
            </div>

            <div className='body'>Exposure Protection
                <img className='indicator' src={exposureProtection}/>
            </div>

            <div className='body'>Secure Protocols
                <img className='indicator' src={secureProtocols}/>
            </div>
        </div>
    )
}

export default SecureIntegrations;
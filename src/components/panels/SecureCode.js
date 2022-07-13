import React, { useEffect, useState } from 'react';
import FeatureBox from '../FeatureBox';
import '../Dashboard.css';
import aperture_green from '../screens/images/aperture-green.png';
import aperture_red from '../screens/images/aperture-red-closed.png';
import check_mark from '../screens/images/check_mark.png';
import warning from '../screens/images/alert.png';

function SecureCode(props) {

    const [overall, setOverall] = useState();
    const [staticCodeAnalysis, setStaticCodeAnalysis] = useState();
    const [dynamicCodeAnalysis, setDynamicCodeAnalysis] = useState();
    const [encryption, setEncryption] = useState();

    useEffect(() => {
        filterResponse(props.props)
    }, [props])

    const filterResponse = (props) => {
        if(props === undefined || props.subCategories === undefined) {
            return;
        }
        setOverall(props.status === "pass" ? aperture_green : aperture_red )
        for(const prop of props.subCategories) {
            if(prop.category === "Static Code Analysis") {
                setStaticCodeAnalysis(prop.status === "pass" ? check_mark : warning)
            }
            else if(prop.category === "Dynamic Code Analysis") {
                setDynamicCodeAnalysis(prop.status === "pass" ? check_mark : warning)
            }
            else if(prop.category === "Encryption") {
                setEncryption(prop.status === "pass" ? check_mark : warning)
            }
        }
    }

    return (
        <div>
            <img className='healthSizingTopRow' src={overall}/>
            <div className='title'>Secure Code</div>

            <div className='subtitle'>Key Capabilities</div>

            <div className='body'>Static Code Analysis
                <img className='indicator' src={staticCodeAnalysis}/>
            </div>

            <div className='body'>Dynamic Code Analysis
                <img className='indicator' src={dynamicCodeAnalysis}/>
            </div>

            <div className='body'>Encryption
                <img className='indicator' src={encryption}/>
            </div>
        </div>
    )
}

export default SecureCode;
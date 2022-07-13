import React, { useEffect, useState } from 'react';
import FeatureBox from '../FeatureBox';
import '../Dashboard.css';
import aperture_green from '../screens/images/aperture-green.png';
import aperture_red from '../screens/images/aperture-red-closed.png';
import check_mark from '../screens/images/check_mark.png';
import warning from '../screens/images/alert.png';

function SecureInfrastructure(props) {
    const [overall, setOverall] = useState();
    const [platformHardening, setPlatformHardening] = useState();
    const [containerProtection, setContainerProtection] = useState();
    const [secureImages, setSecureImages] = useState();
    useEffect(() => {
        filterResponse(props.props)
    }, [props])

    const filterResponse = (props) => {
        if(props === undefined || props.subCategories === undefined) {
            return;
        }
        setOverall(props.status === "pass" ? aperture_green : aperture_red )
        for(const prop of props.subCategories) {
            if(prop.category === "Platform Hardening") {
                setPlatformHardening(prop.status === "pass" ? check_mark : warning)
            }
            else if(prop.category === "Container Protection") {
                setContainerProtection(prop.status === "pass" ? check_mark : warning)
            }
            else if(prop.category === "Secure Images") {
                setSecureImages(prop.status === "pass" ? check_mark : warning)
            }
        }
    }

    return (
        <div>
            <img className='healthSizingTopRow' src={overall}/>
            <div className='title'>Secure Infrastructure</div>

            <div className='subtitle'>Key Capabilities</div>

            <div className='body'>Platform Hardening
                <img className='indicator' src={platformHardening}/>
            </div>

            <div className='body'>Container Protection
                <img className='indicator' src={containerProtection}/>
            </div>
            <div className='body'>Secure Images
                <img className='indicator' src={secureImages}/>
            </div>
        </div>
    )
}

export default SecureInfrastructure;
import React, { useEffect, useState } from 'react';
import '../Dashboard.css';
import aperture_green from '../screens/images/aperture-green.png';
import aperture_red from '../screens/images/aperture-red-closed.png';
import check_mark from '../screens/images/check_mark.png';
import warning from '../screens/images/alert.png';

function SecureData(props) {
    const [overall, setOverall] = useState();
    const [classification, setClassification] = useState();
    const [vulnerabilityScanning, setVulnerabilityScanning] = useState();
    const [encryption, setEncryption] = useState();
    const [lossPrevention, setLossPrevention] = useState();

    useEffect(() => {
        filterResponse(props.props)
    }, [props])

    const filterResponse = (props) => {
        if(props === undefined || props.subCategories === undefined) {
            return;
        }
        setOverall(props.status === "pass" ? aperture_green : aperture_red )
        for(const prop of props.subCategories) {
            if(prop.category === "Classification") {
                setClassification(prop.status === "pass" ? check_mark : warning)
            }
            else if(prop.category === "Vulnerability Scanning") {
                setVulnerabilityScanning(prop.status === "pass" ? check_mark : warning)
            }
            else if(prop.category === "Encryption") {
                setEncryption(prop.status === "pass" ? check_mark : warning)
            }
            else if(prop.category === "Loss Prevention") {
                setLossPrevention(prop.status === "pass" ? check_mark : warning)
            }
        }
    }
    return (
        <div>
            <img className='healthSizingBottomRow' src={overall}/>
            <div className='title'>Secure Data</div>

            <div className='subtitle'>Key Capabilities</div>

            <div className='body'>Classification
                <img className='indicator' src={classification}/>
            </div>

            <div className='body'>Vulnerability Scanning
                <img className='indicator' src={vulnerabilityScanning}/>
            </div>

            <div className='body'>Encryption
                <img className='indicator' src={encryption}/>
            </div>
            <div className='body'>Loss Prevention
                <img className='indicator' src={lossPrevention}/>
            </div>
        </div>
    )
}

export default SecureData;
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
        if(props === undefined || props.capabilities === undefined) {
            return;
        }
        setOverall(props.flag === "green" ? aperture_green : aperture_red )
        for(const prop of props.capabilities) {
            if(prop.name === "Classification") {
                setClassification(prop.flag === "green" ? check_mark : warning)
            }
            else if(prop.name === "Vulnerability Scanning") {
                setVulnerabilityScanning(prop.flag === "green" ? check_mark : warning)
            }
            else if(prop.name === "Encryption") {
                setEncryption(prop.flag === "green" ? check_mark : warning)
            }
            else if(prop.name === "Loss Prevention") {
                setLossPrevention(prop.flag === "green" ? check_mark : warning)
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

import React, { useEffect, useState } from 'react';
import FeatureBox from './FeatureBox';
import './Dashboard.css';
import SecureInfrastructure from './panels/SecureInfrastructure';
import SecureData from './panels/SecureData';
import SecureCode from './panels/SecureCode';
import SecureIntegrations from './panels/SecureIntegrations';
import SecureMonitoring from './panels/SecureMonitoring';
import axios from 'axios';

function FeatureBoxCollection() {

    const [infra, setInfra] = useState({});
    const [data, setData] = useState({});
    const [code, setCode] = useState({});
    const [integration, setIntegration] = useState({});
    const [monitoring, setMonitoring] = useState({}); 

    useEffect(() => {
        axios.get(`http://localhost:9000/api/category/all`)
        .then(res => {
            //console.log(res.data.domains);
            filterResponse(res.data.domains)
        })
    }, [])

    const filterResponse = (responses) => {
        for(const response of responses) {
            if(response.name === "infrastructure") {
                setInfra(response); 
            }
        }
    } 

    return (
        <div id="page-container">
            <FeatureBox style={{ marginLeft: 400,marginTop: 20}}>
                <SecureInfrastructure props={infra}/>
            </FeatureBox>

            <FeatureBox style={{ marginLeft: 400, marginTop: 20}}>
                <SecureData />
            </FeatureBox>
        
            <FeatureBox style={{ marginLeft: 750, marginTop: -669}}>
                <SecureCode />
            </FeatureBox>

            <FeatureBox style={{ marginLeft: 750, marginTop: 20}}>
                <SecureIntegrations />
            </FeatureBox>

            <FeatureBox style={{ marginLeft: 1100, marginTop: -669}}>
                <SecureMonitoring />
            </FeatureBox>
        </div>
    )
}

export default FeatureBoxCollection;
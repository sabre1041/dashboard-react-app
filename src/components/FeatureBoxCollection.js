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
    const [integrations, setIntegrations] = useState({});
    const [monitoring, setMonitoring] = useState({}); 

    useEffect(() => {
        axios.get(`https://telescope-backend-telescope-backend-prod.apps.cluster-9k69b.9k69b.sandbox1712.opentlc.com/domains`)
        .then(res => {
            //console.log(res.data.domains);
            filterResponse(res.data)
        })
        const pageRefreshTimer = setInterval(() => {
            axios.get(`https://telescope-backend-telescope-backend-prod.apps.cluster-9k69b.9k69b.sandbox1712.opentlc.com/domains`)
            .then(res => {
                //console.log(res.data.domains);
                filterResponse(res.data)
            })
        }, 5000); 
        return () => {
            clearInterval(pageRefreshTimer)
        };
    }, []);

    const filterResponse = (responses) => {
        for(const response of responses) {
            if(response.name === "Secure Infrastructure") {
                setInfra(response); 
            }
            else if(response.name === "Secure Data") {
                setData(response); 
            }
            else if(response.name === "Secure Code") {
                setCode(response)
            }
            else if(response.name === "Secure Integrations") {
                setIntegrations(response)
            }
            else if(response.name === "Secure Monitoring & Logging") {
                setMonitoring(response)
            }
        }
    } 

    return (
        <div id="page-container">
            <FeatureBox style={{ marginLeft: 400,marginTop: 20}}>
                <SecureInfrastructure props={infra}/>
            </FeatureBox>

            <FeatureBox style={{ marginLeft: 400, marginTop: 20}}>
                <SecureData props={data}/>
            </FeatureBox>
        
            <FeatureBox style={{ marginLeft: 750, marginTop: -669}}>
                <SecureCode props={code}/>
            </FeatureBox>

            <FeatureBox style={{ marginLeft: 750, marginTop: 20}}>
                <SecureIntegrations props={integrations}/>
            </FeatureBox>

            <FeatureBox style={{ marginLeft: 1100, marginTop: -669}}>
                <SecureMonitoring props={monitoring}/>
            </FeatureBox>
        </div>
    )
}

export default FeatureBoxCollection;
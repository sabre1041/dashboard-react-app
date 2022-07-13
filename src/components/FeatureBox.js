import React, { useState } from 'react';
import './Dashboard.css';

function FeatureBox({
    children,
    backgroundColor,
    borderRadius,
    color,
    minHeight,
    padding,
    marginLeft,
    marginTop,
    style,
     ...props}) {
    return <div {...props}
    style={{
        backgroundColor: '#D3D3D3',
        borderRadius: 4,
        color: '#222',
        minHeight: 200,
        padding: 12,
        width: 300,
        height: 300,
        marginLeft,
        marginTop,
         ...style,
    }}>
        {/*<div style={{color: 'gray', bottom: 50}}>Key Capabilities</div>*/}
        {children}</div>
    
}

export default FeatureBox;
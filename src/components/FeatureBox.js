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
        // backgroundColor: '#e4e7ed',
        borderRadius: 4,
        borderWidth: 1,
        border: '1px solid #e4e7ed',
        color: '#222',
        minHeight: 200,
        padding: 12,
        width: 300,
        height: 300,
        marginLeft: 20,
        marginTop: 20,

         ...style,
    }}>
        {/*<div style={{color: 'gray', bottom: 50}}>Key Capabilities</div>*/}
        {children}</div>
    
}

export default FeatureBox;
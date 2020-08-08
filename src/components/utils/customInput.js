import React from 'react';
import { Input } from 'antd';

function CustomInput({label, value}) {

    return (
        <div>
            <p>{label}</p>
            <Input placeholder="Basic usage" />
        </div>
    )
}

export default CustomInput;
import React from 'react';
import { Input } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

function CustomInput({label, bindedValue, suffix, onChangeCallback}) {

    return (
        <div>
            <p className="form-input-field-label">
                {label} {" "}
                <InfoCircleOutlined />
            </p>
            <Input
                prefix="$"
                placeholder="$1000"
                suffix={suffix}
                value={bindedValue}
                onChange={onChangeCallback}
            />
        </div>
    )
}

export default CustomInput;
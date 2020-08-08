import React, {useState} from 'react';
import { Input } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

function RecoveryPeriod() {
    const [recoveryPeriod, setRecoveryPeriod] = useState('');
    
    return (
        <div className="recovery-period">
            <p className="form-input-field-label">
                Recovery Period {" "}
                <InfoCircleOutlined />
            </p>
            <Input
                style={{ width: '300px' }}
                suffix="/month"
                value={recoveryPeriod}
                onChange={(e) => setRecoveryPeriod(e.target.value)}
            />
        </div>
    )
}

export default RecoveryPeriod;
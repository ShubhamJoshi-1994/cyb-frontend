/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { Input } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux'

function RecoveryPeriod() {
    const [recoveryPeriod, setRecoveryPeriod] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        if(parseInt(recoveryPeriod)) {
            dispatch({type: 'SET_RECOVERY_PERIOD', recovery_period: parseInt(recoveryPeriod)});
        }
    }, [recoveryPeriod]);
    
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
import React from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import Form from "./form";
import RecoveryPeriod from "./recoveryPeriod";
import Chart from "./chartSection";

function Calculator() {
    return (
        <>
            <Row className="headings-section">
                <h1>Critical Illness Insurance Calculator</h1>
                <p>Adjust the sliders to estimate the coverage amount you may need.</p>
            </Row>
            <Row className="form-and-chart-content-section">
                <Col flex={2} className="form-section">
                    <Form />
                </Col>
                <Col flex={3} className="chart-section">
                    <div>
                        <RecoveryPeriod />
                    </div>
                    <div className="chart">
                        <Chart />
                    </div>
                    <div>
                        <p>A serious with recovery lasting 12 months could put your finances down by $359000 today and by $467000 in 10 years</p>
                        <Button type="primary">START COMPARING QUOTES</Button>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Calculator;
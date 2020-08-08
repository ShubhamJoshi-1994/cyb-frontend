import React from 'react';
import { Row, Col, Space, Button } from 'antd';
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
                    <Space
                        direction="vertical"
                        size="large"
                        className="ch-section-contents"
                    >
                        <RecoveryPeriod />
                        <div className="chart"><Chart /></div>
                        <div className="get-quotes-section">
                            <p>A serious with recovery lasting <span className="blue-text">12 months</span> could put your finances down by <span className="blue-text">$359000</span> today and by <span className="blue-text">$467000</span> in 10 years</p>
                            <Button type="primary">START COMPARING QUOTES</Button>
                        </div>
                    </Space>
                </Col>
            </Row>
        </>
    )
}

export default Calculator;
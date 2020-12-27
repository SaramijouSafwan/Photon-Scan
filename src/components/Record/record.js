import React from "react";
import { Col, Row } from "react-bootstrap";
import "./record.css";
//
import ControlPanel from "../ControPanel/control-panel.js";
import SimpleTabs from "../Tabs/tabs";

function Record() {
    return (
        <Row className="recordBody">
            <Col xs={7}>
                <Row noGutters className="titleRow">
                    <Col xs={5} className="nameCol">
                        <h3 className="title">Kim, Albert (webceph-sample-001)</h3>
                    </Col>
                    <Col xs={5} className="ageCol">
                        <p className="title">Male, 20 years, 8 months</p>
                    </Col>
                    <Col xs={2} className="dateCol">
                        <p className="title">2020-09-21</p>
                    </Col>
                </Row>
                <Row noGutters className="tabsRow">
                    <Col xs={12}>
                        <SimpleTabs />
                    </Col>
                </Row>
            </Col>
            <Col xs={4} className="controlCol">
                <ControlPanel />
            </Col>
            <Col xs={1}></Col>
        </Row>
    );
}
export default Record;
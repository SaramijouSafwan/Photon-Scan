import React, {Fragment} from "react";
import { Button, Row, Col, } from "react-bootstrap";
//
import "./group_buttons.css";

function GroupButtons() {
    return (
        <Fragment>
            <Row noGutters>
                <Button className="digitizationButton">A.I. Digitization</Button>
            </Row>
            <Row noGutters>
                <Col xs={6} style={{ padding: '0px', }}>
                    <Button variant="outline-secondary" className="modifyButton">Modify</Button>
                </Col>
                <Col xs={6} style={{ padding: '0px' }}>
                    <Button className="resetButton">Reset</Button>
                </Col>
            </Row>
            <Row noGutters>
                <Button className="calibrationButton">Image Size Calibration</Button>
            </Row>
        </Fragment>
    );
}

export default GroupButtons;
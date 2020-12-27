import React, { Fragment } from "react";
import { Row, Col, } from "react-bootstrap";
import Slider from '@material-ui/core/Slider';
//
function GroupSlider() {
    const brightnessMarks = [
        {value: 30, label: '30'},
        {value: 65, label: '65'},
        {value: 100, label: '100'},
        {value: 135, label: '135'},
        {value: 170, label: '170'},
    ];
    const contrastMarks = [
        {value: 50, label: '50'},
        {value: 75, label: '75'},
        {value: 100, label: '100'},
        {value: 125, label: '125'},
        {value: 150, label: '170'},
    ];
    return (
        <Fragment>
            <Row noGutters>
                <Col xs={3}>
                    <p>Brightness: </p>
                </Col>
                <Col xs={9}>
                    <Slider step={5} marks={brightnessMarks} min={30} max={170} defaultValue={100}/>
                </Col>
            </Row>
            <Row noGutters>
                <Col xs={3} >
                    <p>Contrast: </p>
                </Col>
                <Col xs={9}>
                    <Slider step={5} marks={contrastMarks} min={50} max={150} defaultValue={100}/>
                </Col>
            </Row>
        </Fragment>
    );
}

export default GroupSlider;
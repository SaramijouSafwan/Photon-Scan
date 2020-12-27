import React, { } from "react";
import { Button, Container, Row, } from "react-bootstrap";
import Divider from '@material-ui/core/Divider';
import {MagnifierZoom} from "react-image-magnifiers";
//
import "./control-panel.css";
import GroupButtons from "../GroupButtons/group_buttons.js";
import GroupSliders from "../GroupSliders/group_slider.js"
import xray from "../../assets/xray.jpg";
function ControlPanel() {
    return (
        <Container className="container">
            <Row noGutters>
                <h3 className="title">
                    A.I. Landmark Detection
                </h3>
            </Row>
            <Row noGutters>
                <p className="subTitle">
                    Artificial Intlligence automatically traces cephalometric radiograph.
                </p>
            </Row>
            <GroupButtons />
            <Divider style={{ marginBottom: "10px", height: "0.5px" }} />
            <GroupSliders />
            <Divider style={{ marginBottom: "10px", height: "0.5px" }} />
            <Row noGutters>
                <Button className="save">Save</Button>
            </Row>
            <Row noGutters>
                <MagnifierZoom  style={{ height: "250px", width: "100%" }} imageSrc={xray} />
            </Row>
        </Container>
    );
}
export default ControlPanel;


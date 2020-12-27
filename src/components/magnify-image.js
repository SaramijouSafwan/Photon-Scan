import React from "react";
import { MagnifierPreview } from "react-image-magnifiers";
import xray from "../assets/xray.jpg";

function MagnifyImage() {
    return (
        <MagnifierPreview style={{height: "500px", width: "400px", }} cursorStyle="default" overlayOpacity={0} overlayBoxOpacity={0} overlayBoxImage="none" imageSrc={xray} />
    );
}

export default MagnifyImage;
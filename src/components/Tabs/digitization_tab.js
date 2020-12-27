import React from 'react';
import PropTypes from 'prop-types';
//
import GraphImage from '../graph-image';
import MagnifyImage from '../magnify-image';

function DigitizationTab(props) {
    const { value, index } = props;
    return (
        <div hidden={value !== index} style={{height: "100%", backgroundColor: "white", display: "flex"}}>
            <div>
                <MagnifyImage />
            </div>
            <div>
                <GraphImage />
            </div>
        </div>
    );
}

DigitizationTab.propTypes = {
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default DigitizationTab;

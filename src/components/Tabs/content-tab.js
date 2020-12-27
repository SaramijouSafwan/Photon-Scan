import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';


function ContentTab(props) {
    const { children, value, index} = props;
    return (
        <div hidden={value !== index} style={{height: "100%", backgroundColor: "white", marginTop: "1%"}}>
            {value === index && <Typography >{children}</Typography>}
        </div>
    );
}

ContentTab.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default ContentTab;
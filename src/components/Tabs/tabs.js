import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//
import ContentTab from "./content-tab.js";
import DigitizationTab from "./digitization_tab.js";

const useStyles = makeStyles((theme) => ({
    tabs: {
        backgroundColor: '#fff',
        indicator: '#009dff',
    },
    tab: {
        textTransform: 'none',
        minWidth: '8%',
        fontSize: '12px',
        color: '#032f4b',
    },
    indicator: {
        backgroundColor: '#009dff'
    }
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <React.Fragment>
            <div style={{ height: "8%"}}>
                <Tabs
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    classes={{ indicator: classes.indicator }}
                    className={classes.tabs}
                >
                    <Tab label="Digitization" className={classes.tab} />
                    <Tab label="Analysis" className={classes.tab} />
                    <Tab label="Assessment" className={classes.tab} />
                    <Tab label="Treatment" className={classes.tab} />
                    <Tab label="Superimposition" className={classes.tab} />
                    <Tab label="Viewer" className={classes.tab} />
                    <Tab label="Face" className={classes.tab} />
                    <Tab label="Case" className={classes.tab} />
                </Tabs>
            </div>
            <div style={{ height: "92%" }}>
                <DigitizationTab value={value} index={0} />
                <ContentTab value={value} index={1}>
                    Analysis
                </ContentTab>
                <ContentTab value={value} index={2}>
                    Assessment
                </ContentTab>
                <ContentTab value={value} index={3}>
                    Treatment
                </ContentTab>
                <ContentTab value={value} index={4}>
                    Superimposition
                </ContentTab>
                <ContentTab value={value} index={5}>
                    Viewer
                </ContentTab>
                <ContentTab value={value} index={6}>
                    Face
                </ContentTab>
                <ContentTab value={value} index={7}>
                    Case
                </ContentTab>
            </div>
        </React.Fragment>

    );
}

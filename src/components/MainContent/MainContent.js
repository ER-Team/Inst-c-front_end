import React, {Component} from 'react';
import "./MainContent.css";
import Grid from '@material-ui/core/Grid';
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';
import InfoSection from '../InfoSection/InfoSection';
import Suggestions from '../Suggestions/Suggestions';


class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={6} className="maincontent__container">
                        <div>
                            <StatusBar/>
                            <MainPage/>
                        </div>
                    </Grid>
                    <Grid item xs={2} className={"sub_content__container"}>
                        <InfoSection/>
                        <Suggestions/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default MainContent;
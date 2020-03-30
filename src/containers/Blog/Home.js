import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Url } from '../../properties/properties';
import * as actionCreators from '../../store/actions/index';


class Home extends Component {
    componentDidMount() {
        console.log("init rendering home page")
    }

    render() {
        return (
            <div>
                <h1> Home </h1>

            </div>

        );
    }
}


const mapStateToProps = state => {
    console.log(state.user);
    return {
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => {
    console.log('set up dispatch');
    return {
        onGetData: (props) => {
            console.log("get all data");
            //dispatch(actionCreators.getAllNotificationsOperationAdmin(props));
        },


    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Home);

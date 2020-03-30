import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Sign_in from '../../components/authenticate/Sign_in';
import Sign_up from '../../components/authenticate/Sign_up';
import Forget_Password from '../../components/authenticate/Forget_pasword';
import Email_Validation from '../../components/authenticate/Email_validation';
import User_Info from '../../components/authenticate/User_info';
import Steppers from '../../components/authenticate/Steppers';
import css from '../../css/Globale.css'


import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';


class EmailValidationHolder extends Component {

    render() {
        return (
            <div className={css.Authenticate}>
                <Email_Validation type={'before'}
                    sendEmail={() => this.props.onSendEmail(this.props.user)}>
                </Email_Validation>
                <Steppers step={1}></Steppers>
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
        onAction: () => {
            console.log('action activited');
            dispatch(actionCreators.signInFetch());
        },
        onSendEmail: (state) => {
            console.log('send Email');
            dispatch(actionCreators.SendEmail(state));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(EmailValidationHolder);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Url } from '../../properties/properties';
import * as actionCreators from '../../store/actions/index';
import DetailedExpansionPanel from '../../materials/ExpensionPanle/ExpensionPanel1';

import css from '../../css/Globale.css'


class Home extends Component {
    componentDidMount() {
        console.log("init rendering home page");
        this.props.onGetData(this.props);
    }

    render() {
        return (
            <div>
                {
                    this.props.user.data[0] != undefined ?
                        <div className={css.panel}>

                            {
                                this.props.user.data.map(data => (

                                    /*<div>
                                        <p>{data.Nom}</p>
                                        <p>{data.Description}</p>
                                    </div>*/
                                    < DetailedExpansionPanel

                                        username={data.Nom}
                                        message={data.Description}
                                        imageUrl={Url + "/images/Mohamed.png"}
                                    ></DetailedExpansionPanel>

                                ))
                            }
                        </div>
                        :
                        <h1>wait ...</h1>

                }

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
            dispatch(actionCreators.getData(props));
        },


    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Home);

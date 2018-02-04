import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onClick } from './actions/commonActions';

import { Header } from './components/Header';

class App extends React.Component {
    onClick() {
        this.props.onClick();
    }

    render() {
        return (
            <div onClick={::this.onClick}>
                <Header />
                <h1>{`Click me: ${this.props.counter}`}</h1>
            </div>
        );
    }
}

App.propTypes = {
    counter: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        counter: state.commonReducer.counter
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onClick
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

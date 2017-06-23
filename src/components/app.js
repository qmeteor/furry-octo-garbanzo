import React, { Component } from 'react';
//import Modal from './modal';
import { connect } from 'react-redux';
import { showModal } from '../actions/index';
import Modal from 'react-modal';

class App extends Component {

    render() {

        const customStyle = {
            overlay : {
                position          : 'fixed',
                top               : 0,
                left              : 0,
                right             : 0,
                bottom            : 0,
                backgroundColor   : 'rgba(0, 0, 0, 0.65)'
            },
            content : {
                position                   : 'absolute',
                top                        : '20%',
                left                       : '50%',
                right                      : 'auto',
                bottom                     : 'auto',
                marginRight                : '-50%',
                transform                  : 'translate(-50%, -50%)',
                height                     : '200',
                width                      : '400',
                border                     : '1px solid #ccc',
                boxShadow                  : '0 3px 6px rgba(0,0,0,0.8)',
                background                 : '#fff',
                overflow                   : 'auto',
                WebkitOverflowScrolling    : 'touch',
                borderRadius               : '4',
                outline                    : 'none',
                padding                    : '20'
            }
        };

         return(
            <div>
                <h1>My Main Page</h1>
                <button className="btn btn-default" onClick={ () => this.props.showModal(true) }>Open</button>
                <Modal
                        isOpen={this.props.modal.modalType}
                        contentLabel="My Modal"
                        closeTimeoutMS={200}
                        style={customStyle}
                        onRequestClose={() => {}}
                        shouldCloseOnOverlayClick={true}
                    >
                        <h3>A modal</h3>
                        <p>Some text inside your modal.</p>
                    <button className="btn btn-danger" onClick={ () => this.props.showModal(false) }>Close</button>
                </Modal>
            </div>
        );
    }
}

//object from reducer
function mapStateToProps(state) {
    return { modal: state.modal };
}

//object dispatched to action
export default connect(mapStateToProps, { showModal })(App);

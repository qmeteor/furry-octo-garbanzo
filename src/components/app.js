import React, { Component } from 'react';
import Modal from './modal';
import { connect } from 'react-redux';
import { showModal } from '../actions/index';
import { SHOW_MODAL, SIGN_UP } from '../actions/types';
import { CSSTransitionGroup } from 'react-transition-group';

class App extends Component {

  renderModal() {
      const transitionOptions = {
          transitionName: "fade",
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 500
      };

      return (
          <Modal>
               <header><button className="btn btn-default" onClick={() => this.props.showModal(false)}>X</button></header>
               <br/>
               <h4>Modal</h4>
               <p>Some text to describe your modal.</p>
          </Modal>
      );
  }

  render() {
      if(this.props.modal.modalType === true ) {
            return (
                <div>
                    <button className="btn btn-default" onClick={() => this.props.showModal(false)}>Close Modal</button>
                    <h3>Beanster.tv | Video Q & A</h3>
                    <p>Follow the questions you want answered.</p>
                    <div className="overlay">
                            {this.renderModal()}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                  <button className="btn btn-default" onClick={() => this.props.showModal(true)}>Open Modal</button>
                  <h3>Beanster.tv | Video Q & A</h3>
                  <p>Follow the questions you want answered.</p>
                  <div className="overlay fade">
                  </div>
                </div>
            );
        }
  }
}

//coming from reducers
function mapStateToProps(state) {
    return { modal: state.modal };
}

//object leaving out to actions
export default connect(mapStateToProps, { showModal })(App);
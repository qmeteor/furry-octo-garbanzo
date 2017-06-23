/**
 * Created by Bien on 2017-06-20.
 */
import {
    SHOW_MODAL,
    HIDE_MODAL
} from '../actions/types';

const initialState = {
    modalType: false
};

export default function(state = initialState, action) {
    console.log('reducer', action.modalType);
    switch(action.type) {
        case SHOW_MODAL:
            return {
                modalType: action.modalType
            };
        case HIDE_MODAL:
            return initialState;
        default:
            return state
    }
}
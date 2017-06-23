import {
    SHOW_MODAL,
    SIGN_UP
} from './types';

export function showModal(isOpen) {
    console.log('action', isOpen);
        return {
            type: SHOW_MODAL,
            modalType: isOpen
        }
}

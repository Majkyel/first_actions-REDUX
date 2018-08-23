import uuid from 'uuid';

import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actionTypes';


function addComment(text) {
    return {
        type: ADD_COMMENT,
        id: uuid(),
        text
    }
}

function deleteComment() {
    return {
        type: REMOVE_COMMENT,
        id: uuid()
    }
}
 
function editComment(text) {
    return {
        type: EDIT_COMMENT,
        id: uuid(),
        text
    }
}

function addThumbComment() {
    return {
        type: THUMB_UP_COMMENT,
        id: uuid(),
        thumb + 1
    }
}
   
function removeThumbComment() {
    return {
        type: THUMB_DOWN_COMMENT,
        id: uuid(),
        thumb - 1
    }
}

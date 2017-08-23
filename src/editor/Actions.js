import {
    UPDATE_BODY,
    UPDATE_TITLE,
    CHANGE_CATEGORY,
} from './Types';

export const changeCategory = (id, category) => {
    return {
        type: CHANGE_CATEGORY,
        id,
        category,
    };
};

export const updateBody = (id, body) => {
    return {
        type: UPDATE_BODY,
        id,
        body,
    };
};

export const updateTitle = (id, title) => {
    return {
        type: UPDATE_TITLE,
        id,
        title,
    };
};

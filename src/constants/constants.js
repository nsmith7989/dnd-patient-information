import keyMirror from 'keymirror';

const actions = {
    // Example actions
    // student: keyMirror({
    //     CREATE_STUDENT: null,
    //     UPDATE_STUDENT: null,
    //     DELETE_STUDENT: null,
    //     READ_STUDENT: null,
    //     GET_ALL_STUDENTS: null,
    //     LIST_STUDENTS: null,
    //     SHOW_STUDENT_FORM: null,
    //     SHOW_STUDENT_EDIT_FORM: null,
    //     SET_CURRENT_STUDENT: null,
    //     CHANGE_STUDENT_VIEW: null
    // }),

    route: keyMirror({
        NAVIGATE: null
    }),

    user: keyMirror({
        LOG_IN: null,
        LOG_OUT: null,
        USER_ERROR: null,
        SIGN_UP: null
    }),

    notification: keyMirror({
        NEW_NOTIFICATION: null
    }),
    
    input: keyMirror({
        VALIDATE_INPUT: null
    }),
    
    field: keyMirror({
        CREATE_FEILD: null,
        READ_FEILD: null,
        UPDATE_FEILD: null,
        DELETE_FEILD: null
    }),
    
    form: keyMirror({
        CREATE_FORM: null,
        READ_FORM: null,
        UPDATE_FORM: null,
        DELETE_FORM: null
    })

};

export default actions;
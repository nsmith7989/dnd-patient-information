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
        // DragEnd event adds field to  workbench
        CREATE_FIELD: null,
        // READ_FIELD: null,
        // Modify settings of field (is required, pre-selected..)
        UPDATE_FIELD: null,
        // Remove field from WorkBench
        DELETE_FIELD: null
    }),
    
    form: keyMirror({
        CREATE_FORM: null,
        READ_FORM: null,
        UPDATE_FORM: null,
        DELETE_FORM: null
    })

};

export default actions;
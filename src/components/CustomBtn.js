import React from 'react'
import {Button} from '@material-ui/core'
// allows us to write CSS inside our react component. this is a custom hook.
import {withStyles} from '@material-ui/core/styles'


// calling the function with an object inside of it
const StyledButton = withStyles ({
    // defining classes, giving them a name and writing normal css. all values must be in quotation marks and end with a comma. also written in camelCase only.
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0,
        background: "#4f25f7",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s", "&:hover": {
            backgroundColor: "#4f25f7"
        },

    },
    label: {
        textTransform: 'capitalize',
    },
    // a 2nd call for the Button that we have imported from material ui
})(Button);

function CustomBtn(props) {
    return (
        // we are taking material-ui's button component, use the withStyles to get a bunch of custom css. the StyledButton is from the const above which gets our Button component
        <StyledButton variant="contained">{props.txt}</StyledButton>
    )
}

export default CustomBtn


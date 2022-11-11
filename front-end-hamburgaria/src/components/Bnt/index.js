import React from "react";
import {Button as Btn} from "./style"

function Button({children ,...props}){
    return <Btn {...props}>{children}</Btn>
}

export default Button
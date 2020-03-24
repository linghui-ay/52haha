import React from "react"
import Style from "./main.module.css"

export default ({children}) => (
    <div className={Style.main}>
        {children}
    </div>
)
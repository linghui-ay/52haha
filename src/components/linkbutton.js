import React from "react"
import { Link } from "gatsby"
import Style from "./linkbutton.module.css"

export default props => (
    <div className={Style.buttons}>
        {props.prevId ? <Link to={`${props.prefix}${props.prevId}`}><span>上一条</span></Link>:<span className={Style.nomore}>上一条</span>}
        {props.nextId ? <Link to={`${props.prefix}${props.nextId}`}><span>下一条</span></Link>:<span className={Style.nomore}>下一条</span>}
    </div>
)
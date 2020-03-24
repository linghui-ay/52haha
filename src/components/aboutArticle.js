import React from "react"
import {Link} from "gatsby"
import Style from "./textbox.module.css"

export default (props) => (
    <div className={`${Style.item} ${Style.about}`}>
        <h3>相关推荐</h3>
    {
        props.articles.map((obj) => (
        <p key={obj.id}><Link to={`/duanzi/${obj.id}`}>{obj.title ? obj.title: obj.content.slice(0,30)}</Link></p>
        ))
    }
    </div>
)
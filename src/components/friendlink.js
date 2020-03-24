import React from "react"
import Style from "./friendlink.module.css"

export default () => (
    <div className={Style.linksBox}>
        <div className={Style.links}>
        <p>友情链接</p>
        <div className={Style.aBox}>
            <a href="https://www.52beautys.com/" target="_blank">妹子图片</a>
            <a href="http://www.yumojingshi.com" target="_blank">抛光机</a>
        </div>
        </div>
    </div>
)
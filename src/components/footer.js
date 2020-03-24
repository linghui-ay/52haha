import React from "react"
import {Link} from "gatsby"
import style from "./footer.module.css"

export default () => (
    <footer >
        <div className={style.footer}>
            <p>
                52哈哈网（<Link to="/">www.52haha.xyz</Link>）
            </p>
        </div>
    </footer>
)
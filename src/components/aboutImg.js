import React from "react"
import {Link} from "gatsby"
import Style from "./textbox.module.css"
import 'lazysizes'

export default (props) => (
    <div className={`${Style.item} ${Style.about}`}>
        <h3>相关推荐</h3>
        {
            props.imgs.map((obj) => (
                <Link to={`/pic/${obj.id}`} className={Style.aboutItem} key={obj.id}>
                    <figure>
                        <img src="http://p9.pstatp.com/large/pgc-image/aac1156d3a194a29886177f65807b142" data-src={obj.path} alt="52哈哈网" className='lazyload' />
                        <figcaption>{obj.title.slice(0,50)}</figcaption>
                    </figure>
                </Link>
            ))
        }
    </div>
)
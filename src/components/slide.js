import React from "react"
import {Link} from "gatsby"
import Style from "./slide.module.css" 
import 'lazysizes'
export default (props) => (
    <div className={Style.slide}>
        <h3>{props.topTitle}</h3>
        {
            props.topArr.map((top) => (
                <div key={top.id}>
                    <h4><Link to={`/pic/${top.id}`}>{top.title}</Link></h4>
                    <img data-src={top.path} src="https://pro-cn-01.cdn.bilnn.com/get/52haha/2019/12/28/16f4ccca1a57440d"  className='lazyload' alt={top.title} />
                </div>
            ))
        }
    </div>
)
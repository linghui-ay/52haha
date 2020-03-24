import React from "react"
import Style from "./textbox.module.css"
import { Link } from "gatsby"
import 'lazysizes'

class ImgBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.img.id,
            isLink: this.props.isLink,
        }
    }

    itemTitle() {
        let title = this.props.img.title;
        if (this.state.isLink){
            return <Link to={`/pic/${this.state.id}`}><h1>{title}</h1></Link>
        } else {
            return <h1>{title}</h1>
        }
    }

    itemContent() {
        let path = this.props.img.path;
        if (this.state.isLink){
            return (<Link to={`/pic/${this.state.id}`}>
                        <p>
                            <img src="https://p9.pstatp.com/large/pgc-image/aac1156d3a194a29886177f65807b142" 
                            data-src={path} 
                            className='lazyload' 
                            alt='52哈哈网_搞笑动图_美女动态图片' 
                            />
                        </p>
                    </Link>)
        } else {
            return (
                <p>
                    <img src="https://p9.pstatp.com/large/pgc-image/aac1156d3a194a29886177f65807b142" 
                    data-src={path} 
                    className='lazyload' 
                    alt='52哈哈网_搞笑动图_美女动态图片' 
                    />
                </p>
            )
        }
    
    }

    render() {
        return (
            <div className={Style.item}>
                {this.itemTitle()}
                {this.itemContent()}
        </div>
        )
    }
}

export default ImgBox
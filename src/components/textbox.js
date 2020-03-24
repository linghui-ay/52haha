import React from "react"
import { Link } from "gatsby"
import Style from "./textbox.module.css"

class TextBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.article.id,
            isLink: this.props.isLink,
        }
    }

    itemTitle() {
        let title = this.props.article.title;
        if (this.state.isLink){
            return <Link to={`/duanzi/${this.state.id}`}><h1>{title}</h1></Link>
        } else {
            return <h1>{title}</h1>
        }
    }

    itemContent() {
        let content = this.props.article.content;
        if (this.state.isLink){
            return <Link to={`/duanzi/${this.state.id}`}><pre className={Style.havepv}>{content}</pre></Link>
        } else {
            return <pre className={Style.havepv}>{content}</pre>
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

export default TextBox
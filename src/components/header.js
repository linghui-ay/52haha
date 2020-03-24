import React from "react"
import { Link } from "gatsby"
import style from "./header.module.css"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            isFlixed: false
        }
    }
    componentDidMount() {
        // 挂载滚动监听
        this._isMounted = true;
        window.addEventListener('scroll', (e) => this.bindScroll(e));
    }
    componentWillUnmount() {
        // 移除滚动监听
        this._isMounted = false;
        window.removeEventListener('scroll', (e) => this.bindScroll(e));
    }

    bindScroll(event) {
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        // 视窗高度
        // const clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight) || document.body.clientHeight;
        // // 页面高度
        // const scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight) || document.body.scrollHeight;
        // 距离页面底部的高度
        // const height = scrollHeight - scrollTop - clientHeight;
        // 判断距离页面底部的高度
        if (scrollTop >= 169) {
            // 关闭判断执行开关
            if (this._isMounted){
                this.setState({isFlixed: true,})
            }
        } else {
            if (this._isMounted){
                this.setState({isFlixed: false,})
            }
        }
    }

    render () {
        return (
            <header style={{height: `219px`}}>
                <div className={`${style.head} ${this.state.isFlixed ? style.filxed: null}`}>
                    <Link to="/">
                        <img  className={style.logo} src="//p3.pstatp.com/large/pgc-image/50562c6e883d4bfc818cef1f0ffb400f" alt="52哈哈网" />
                    </Link>
                    <nav>
                        <div className={style.nav}>
                            <Link to="/" className={this.props.navIndex === "1" ? style.active:null}>
                                段子
                            </Link>
                            <Link to="/pic" className={this.props.navIndex === "2" ? style.active:null}>
                                图片
                            </Link>
                            <Link to="/fuli" className={this.props.navIndex === "3" ? style.active:null}>
                                福利
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Header
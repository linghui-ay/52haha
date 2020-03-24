import React from "react"
import { Link } from "gatsby"
import Style from "./pagination.module.css"

class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: props.currentPage, //当前页码
            groupCount: 5, //页码分组，显示7个页码，其余用省略号显示
            totalPage: props.totalPage, //总页数
            prefix: props.prefix
        }
    }

    createPage() {
        const {currentPage, groupCount, totalPage,prefix} = this.state;
        let firstPage = '';
        if (prefix === '/pic/page/') {
            firstPage = '/pic';
        }
        if (prefix === '/duanzi/page/') {
            firstPage = '/';
        }
        let pages = []
        //上一页
        pages.push(<li className={currentPage === 1 ? Style.nomore : null} key={0}>
            {currentPage === 1 ? <span className={Style.link}>上一页</span>: <Link className={Style.link} to={currentPage === 2 ? firstPage:`${prefix}${currentPage - 1}`}>上一页</Link>}
            
            </li>)

        if (totalPage <= 10) {
            /*总页码小于等于10时，全部显示出来*/
            for (let i = 1; i <= totalPage; i++) {
                pages.push(<li key={i} className={currentPage === i ? Style.activePage: null}>
                    {i === 1 ? <Link className={Style.link} to={firstPage}>{i}</Link>:<Link className={Style.link} to={`${prefix}${i}`}>{i}</Link>}
                </li>)
            }
        } else {
            /*总页码大于10时，部分显示*/

            //第一页
            pages.push(<li className={currentPage === 1 ? Style.activePage : null} key={1}>
               <Link className={Style.link} to={firstPage}>1</Link>
            </li>)
            let startPage = 1;
            let pageLength = 0;
            if (currentPage <= groupCount){
                startPage = 1;
            } else if (currentPage > groupCount) {
                startPage = currentPage - 2
            } else {
                startPage = currentPage - 4
            }
            if (groupCount + startPage > totalPage) {
                pageLength = totalPage
            } else {
                pageLength = groupCount + startPage;
            }
            //前面省略号(当当前页码比分组的页码大时显示省略号)
            if (currentPage > groupCount) {
                pages.push(<li className="" key={-1}><span className={Style.link}>···</span></li>)
            }
            //非第一页和最后一页显示
            for (let i = startPage; i < pageLength; i++) {
                if (i <= totalPage - 1 && i > 1) {
                    pages.push(<li className={currentPage === i ? Style.activePage : null} key={i}>
                        <Link className={Style.link} to={`${prefix}${i}`}>{i}</Link>
                    </li>)
                }
            }
            //后面省略号
            if (totalPage - startPage >= groupCount + 1) {
                pages.push(<li  key={-2}><span className={Style.link}>···</span></li>)
            }
            //最后一页
            pages.push(<li className={currentPage === totalPage ? Style.activePage : null} key={totalPage}>
                <Link className={Style.link} to={`${prefix}${totalPage}`}>{totalPage}</Link>
            </li>)
        }
        //下一页
        pages.push(<li className={currentPage === totalPage ? Style.nomore : null} key={totalPage + 1}>
            {currentPage === totalPage ? <span className={Style.link}>下一页</span>: <Link className={Style.link} to={`${prefix}${currentPage + 1}`}>下一页</Link>}
           
        </li>)
        return pages;

    }

    render() {
        const pageList = this.createPage();
        return (
            <ul className={Style.page_container}>
                {pageList}
            </ul>
        )
    }
}

export default Pagination
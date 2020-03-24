import React from "react"
import Layout from "../components/layout"
import TextBox from "../components/textbox"
import Pagintion from "../components/pagination"

export default ({pageContext: { articleArr,articlePage,articleNumPages,topArr }}) => (
    
    <Layout navIndex="1"
    ltitle={'52哈哈网'}
    ldescription={null}
        main={
            articleArr.map((article) => (
                <TextBox 
                    key={article.id}
                    article={article}
                    isLink={true}
                />
            ))
        }
        slideTopTitle='哈哈精选'
        slideTopArr={topArr}
    >
        <Pagintion 
             currentPage={articlePage}
             totalPage={articleNumPages}
             prefix='/duanzi/page/'
        />
    </Layout>
)
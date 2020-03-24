import React from "react"
import Layout from "../components/layout"
import TextBox from "../components/textbox"
import Buttons from "../components/linkbutton"
import AboutArticle from "../components/aboutArticle"
import Lbl from "../components/lbl"

export default ({pageContext: { article,prevId,nextId,topArr,aboutData }}) => (
<Layout
    ltitle={`${article.title}`}
    ldescription={article.content.slice(0,100)}
    main={
        <div>
            <TextBox 
              article={article}
              isLink={false}
            />
            <Buttons 
                prefix='/duanzi/' 
                prevId={prevId}
                nextId={nextId}
            />
            <Lbl />
            <AboutArticle articles={aboutData}/>

            
        </div>
    }
    slideTopTitle='哈哈精选'
    slideTopArr={topArr}
/>

)

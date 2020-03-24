import React from "react"
import Layout from "../components/layout"
import ImgBox from "../components/imgbox"
import Pagintion from "../components/pagination"
export default ({pageContext: { girlArr, girlPage, girlNumPages,topArr }}) => (
<Layout  navIndex="3"
    ltitle='美女gif-福利图片-性感美女gif-邪恶动态图-52哈哈网'
    ldescription='美女gif-福利图片-性感美女gif-邪恶动态图-52哈哈网'
    main={
        girlArr.map( img => (
            <ImgBox 
                key={img.id}
                isLink={true}
                img={img}
            />
        ))
    }
    slideTopTitle='哈哈精选'
    slideTopArr={topArr}
>
    <Pagintion 
        currentPage={girlPage}
        totalPage={girlNumPages}
        prefix='/fuli/page/'
    />
</Layout>
)

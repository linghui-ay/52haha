import React from "react"
import Layout from "../components/layout"
import ImgBox from "../components/imgbox"
import Pagintion from "../components/pagination"
export default ({pageContext: { picArr, picPage, picNumPages,topArr }}) => (
<Layout  navIndex="2"
ltitle='搞笑图片-动态gif-内涵图片-52哈哈网'
ldescription='搞笑图片-动态gif-内涵图片-每日更新-52哈哈网'
    main={
        picArr.map( img => (
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
        currentPage={picPage}
        totalPage={picNumPages}
        prefix='/pic/page/'
    />
</Layout>
)

import React from "react"
import Layout from "../components/layout"
import ImgBox from "../components/imgbox"
import Buttons from "../components/linkbutton"
import AboutData from "../components/aboutImg"
import Lbl from "../components/lbl"
export default ({pageContext: { img, prevId, nextId,topArr, aboutData }})  => (
<Layout 
    ltitle={ img.title ? `${img.title}-52哈哈网`: null}
    ldescription={null}
    main={
        <div>
            <ImgBox 
            key={img.id}
            isLink={false}
            img={img}
            />
            <Buttons 
                prefix='/pic/'
                prevId={prevId}
                nextId={nextId}
            />
             <Lbl />
            <AboutData imgs={aboutData}/>
        </div>
    }
    slideTopTitle='哈哈精选'
    slideTopArr={topArr}
>
  

</Layout>
)
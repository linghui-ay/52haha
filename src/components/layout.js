import React from "react"
import Header from "./header"
import Content from "./content"
import Main from "./main"
import Slide from "./slide"
import Footer from "./footer"
import SEO from "./SEO"
import Style from "./layout.module.css"
import Friend from "./friendlink"

export default props => (
<div className={Style.layout}>
    <SEO 
        title={props.ltitle}
        description={props.ldescription}
    />
    <Header navIndex={props.navIndex} />
    <Content>
        <Main>
            {props.main}
        </Main>
        <Slide 
            topTitle={props.slideTopTitle}
            topArr={props.slideTopArr}
        />
        {props.children}
    </Content>
    <Friend />
    <Footer />
</div>
)
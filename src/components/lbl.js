import React from "react"

class Lbl extends React.Component {
    
    componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://cdn-city.livere.com/js/embed.dist.js';
        document.body.appendChild(s);
    }

    componentWillUnmount() {
        let src = 'https://cdn-city.livere.com/js/embed.dist.js';
        let scripts = document.getElementsByTagName("script");
        let iframe = document.getElementsByTagName("iframe");
        for (let i = 0; i < iframe.length; i++) {
            iframe[i].parentNode.removeChild(iframe[i])
        }
        for (let i = 0; i < scripts.length; i++) {
            if (scripts[i] && scripts[i].src && scripts[i].src.indexOf(src) !== -1) {
                scripts[i].parentNode.removeChild(scripts[i]);
            }
        }
    }

    render () {
        return (
            <div style={{
                marginTop:`50px`,
                padding:`0 20px`,
                background:`white`,
                boxShadow:`0 0 20px rgba(0,0,0,.04)`
                }} 
                id="lv-container" data-id="city" data-uid="MTAyMC80ODE5Ny8yNDY5Mw==">
                <noscript> 为正常使用来必力评论功能请激活JavaScript</noscript>
            </div>
        )
    }
}

export default Lbl
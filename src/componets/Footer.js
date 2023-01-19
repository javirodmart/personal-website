import { useState } from "react"
function Footer() {
    return (<>
        <footer className="footer">
            <div className="line-left"></div>
                <a href="#" class="	fa fa-hand-o-right"></a>
            <span >
                <span>Javier Rodriguez</span>
                <a href="https://github.com/javirodmart" target="_blank" class="fa fa-github"></a>
                <a href="https://www.linkedin.com/in/javisoftwareengineer/" target="_blank" class="fa fa-linkedin"></a>
                < a className="fa" href="Resume  (1).pdf" download="Resume Resume (1).pdf" >Resume</a>
            </span>
                <a href="#" class="	fa fa-hand-o-left"></a>
            <div className="line-right"></div>
        </footer>
    </>
    )
}
export default Footer
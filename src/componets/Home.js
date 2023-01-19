import { Image } from "react-bootstrap";
import Logo from "../assets/IMG_2102-remini-enhanced-transformed.png"

function Home() {
    return (
        <div class=" header my-auto">
            <div className="desc">
            <Image className="img" src={Logo} />
            <div>
                <h1 className="home-desc" >Hola! My name is Javier but everyone calls me Javi.
                    I'm a Software Engineer who loves to bring beautiful and fun projects to life!
                    There's nothing better than seeing something come to life from the very beginning.
                </h1>
            </div>
        </div>
        </div>)
}
export default Home
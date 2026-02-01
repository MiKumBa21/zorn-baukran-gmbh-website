import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Headline1 from "../../Components/Headline/Headline";

function Home() {
    return (
        <div>
            <Header></Header>
            <Headline1 text='Zorn Baukran GmbH' ></Headline1>
            <Footer ></Footer>
        </div>
    );
}
export default Home;
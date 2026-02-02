import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Headline1 from "../../components/Headline/Headline";

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
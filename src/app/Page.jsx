import Header from "../shared/header/Index";
import BlogList from "../shared/blog-list/Index";
import SubscribeUs from "../components/SubscribeUs";
import notificationGif from '../assets/images/notification.gif'
import envelope from '../assets/svgs/envelope.svg'
import Footer from "../shared/footer/Index";

function Page(){

    return(
        <div className="bg">
           <Header />
           <BlogList />
           <SubscribeUs icon={notificationGif} envelopeicon={envelope}/>
           <Footer />
        </div >
    )
}


export default Page;
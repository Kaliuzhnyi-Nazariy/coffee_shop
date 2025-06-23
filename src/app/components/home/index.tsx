import BookAnEvent from "./BookAnEvent";
import Footer from "./Footer";
import Main from "./main";
import News from "./news/News";
import Newslatter from "./Newslatter";
import OurProductTeaser from "./OurProductTeaser";
import OurShop from "./OurShop";
import ReviewsSection from "./reviews/Reviews";

const HomeComponent = () => {
  return (
    <main className="min-w-[320px]">
      <Main />
      <OurShop />
      <OurProductTeaser />
      <BookAnEvent />
      <ReviewsSection />
      <News />
      <Newslatter />
      <Footer />
    </main>
  );
};

export default HomeComponent;

import BookAnEvent from "./BookAnEvent";
import Main from "./main";
import OurProductTeaser from "./OurProductTeaser";
import OurShop from "./OurShop";

const HomeComponent = () => {
  return (
    <main className="min-w-[320px]">
      <Main />
      <OurShop />
      <OurProductTeaser />
      <BookAnEvent />
    </main>
  );
};

export default HomeComponent;

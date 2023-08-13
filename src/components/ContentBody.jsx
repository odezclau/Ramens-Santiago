import {
  Contact,
  DelicisosPlatosDulces,
  RamenAutorDestacados,
  Slider,
  StartOrdering,
  TopRamens
} from "./Home";

function ContentBody() {
  return (
    <div className="root__container">

      <Slider />

      {/* <!-- Start productShowcase --> */}
      <TopRamens />
      <RamenAutorDestacados />
      <DelicisosPlatosDulces />
      {/* <!-- End productShowcase --> */}

      {/* <!-- Start startOrdering --> */}
      <StartOrdering />
      {/* <!-- End startOrdering --> */}

      {/* <!-- Start Contact --> */}
      <Contact />
      {/* <!-- End Contact --> */}

    </div>
  );
}

export default ContentBody;
import React from "react";
import useTitle from "../../../../hooks/useTitle";
import Cover from "../Cover/Cover";
import NewsLetter from "../NewsLetter/NewsLetter";
import Services from "../Services/Services";
import Subscription from "../Subscription/Subscription";
import WorkGallery from "../WorkGallery/WorkGallery";
import WebFeatures from "../WebFeatures/WebFeatures";
import HomeBlog from "../HomeBlog/HomeBlog";
import HomeContents from "../HomeContents/HomeContents";
import ShopLocation from "../ShopLocation/ShopLocation";
import WebSubscription from "../WebSubscription/WebSubscription";
import WebStats from "../WebStats/WebStats";
import OurTeam from "../OurTeam/OurTeam";
import ClientTestimonials from "../ClientTestimonials/ClientTestimonials";

const Home = () => {
  useTitle("NexaForest- Home");
  return (
    <div className="container mx-auto">
      <Cover></Cover>
      <Services></Services>
      <WebFeatures></WebFeatures>
      <WebStats></WebStats>
      <Subscription></Subscription>
      <HomeBlog></HomeBlog>
      <WorkGallery></WorkGallery>
      <HomeContents></HomeContents>
      <ClientTestimonials></ClientTestimonials>
      <WebSubscription></WebSubscription>
      <OurTeam></OurTeam>
      <ShopLocation></ShopLocation>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;

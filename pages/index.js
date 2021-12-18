import Layout from "../components/layout";
import Hero from "../components/landing/hero";
import Landingcard from "../components/landing/landingcard";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Fade right>
        <Landingcard />
      </Fade>
    </Layout>
  );
}

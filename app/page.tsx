import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
    <main>
    <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          {/* <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectSection />
          <EmailSection /> */}
        </div>
        <Footer />

    </main>
    </>
  );
}

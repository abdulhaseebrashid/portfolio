"use client"

import AboutMe from "./component/AboutMe"
import Footer from "./component/Footer"
import ProjectGallery from "./component/ProjectGallery"
import Services from "./component/Services"
import Hero from "./Hero/page"

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGallery/>
      <AboutMe/>
      <Services/>
      <Footer/>
    </>
  )
}

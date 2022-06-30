import { useEffect } from "react";
import Skills from "../components/about/Skills.js";
import Footer from "../components/footer/Footer.js";

export default function About() {
  useEffect(() => {
    document.title = "About Sneha Ratnani";
  }, []);

  return (
    <>
      <section className="w-11/12 mx-auto mt-6 mb-12 sm:w-5/6 lg:w-2/3">
        <p className="font-raleway text-center text-4xl font-medium capitalize">
          <span className="font-poppins text-lg uppercase text-green dark:text-mustard">
            about me
          </span>
          <br />
          here's my story
        </p>
        <div className="mt-6 leading-7 text-[17px]">
          <p className="mb-6">
            i am a self-taught front-end developer based in india. My interest
            started growing in web development in early 2021. Back then i used
            to watch my brother create cool and interactive websites in my free
            time. It was kind of fascinating to me. And to get the answers of my
            questions(like how the web works ?, how browser can understand the
            code we write, how can i create my own websites ? and what not) I
            finally started my journey in august of 2021. Starting from no-code
            in january 2021 i became obsessed with the world of programming.
          </p>
          <p className="mb-6">
            Since then, i have done quite a lot, including teaching myself web
            development and it's best practices, building several fun and
            exciting projects and finding best and easy to understand solutions.
            I have always liked the idea of creating and learning instead of
            just learning.
          </p>
          <p className="mb-6">
            I like teaching myself new skills, technologies and also improving
            the skills that i already know.
          </p>
          <p className="mb-6">
            Besides coding, i enjoy reading, spending time with family and
            friends and having deep conversation with my brother about some
            technology.
          </p>
          <p className="mb-6 font-medium text-lg">
            Here are a few Tools & Technologies I've been working with:
          </p>
        </div>
        <Skills />
      </section>
      <Footer />
    </>
  );
}

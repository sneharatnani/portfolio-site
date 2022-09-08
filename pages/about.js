import { useEffect } from "react";
import Skills from "../components/about/Skills.js";

export default function About() {
  useEffect(() => {
    document.title = "About Sneha Ratnani";
  }, []);

  return (
    <>
      <section className="w-11/12 mx-auto mt-6 mb-12 sm:w-5/6 lg:w-2/3 xl:w-[62rem]">
        <p className="text-center text-4xl font-semibold capitalize">
          <span className="font-poppins font-medium text-lg uppercase text-green dark:text-mustard">
            about me
          </span>
          <br />
          here&#39;s my story
        </p>
        <div className="mt-6 leading-7 text-[17px]">
          <p className="mb-6">
            Hi, I am <span className="text-lg font-medium">Sneha Ratnani</span>,
            a self-taught front-end developer,{" "}
            <a
              href="https://www.goodreads.com/sneharatnani"
              rel="noreferrer"
              target="_blank"
              className="text-green font-medium text-lg dark:text-mustard"
            >
              reader
            </a>
            , and self-proclaimed designer. I love the creative process of
            building visually appealing and interactive user interfaces. I enjoy
            solving real-world problems with clean and maintainable code.
          </p>
          <p className="mb-6">
            My interest in web development started in early 2021. Since then, I
            have done quite a lot, including teaching myself web development and
            its best practices, building several fun and exciting projects, and
            finding easy-to-understand solutions.
          </p>
          <p className="mb-6">
            I like teaching myself new skills and technologies and also
            improving the skills that I already know.
          </p>
          <p className="mb-6">
            Apart from that, I love being outside, reading, and watching movies.
          </p>
          <p className="mb-6 font-medium text-lg">
            Here are a few Tools & Technologies I&#39;ve been working with:
          </p>
        </div>
        <Skills />
      </section>
    </>
  );
}

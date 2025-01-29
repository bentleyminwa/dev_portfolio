import { aboutPic, lee } from "../../assets/images";
import { Accordion } from "../../components";

const About = () => {
  return (
    <main className="pt-20 grid grid-cols-2 gap-5 min-h-screen">
      <section className="relative w-full h-full">
        <img
          src={aboutPic}
          alt="About"
          className="w-2/3 h-10/12 object-cover"
        />
        <img
          src={lee}
          alt=""
          className="absolute top-[15%] right-0 w-2/3 shadow-xl"
        />
      </section>
      <section className="px-8">
        <h5 className="uppercase text-[10px] text-gray-500 tracking-[4px] mb-4">
          welcome to my portfolio
        </h5>
        <h2 className="uppercase text-xl tracking-[4px] mb-8">
          Hi! My name is Minwa Bentley
        </h2>
        <p className="text-sm text-gray-600 tracking-wide leading-7">
          I am a software developer with a knack for crafting dynamic and
          user-friendly web experiences. I love the process of transforming
          ideas into functional, visually appealing interfaces that people enjoy
          using.
        </p>

        <Accordion />
      </section>
    </main>
  );
};

export default About;

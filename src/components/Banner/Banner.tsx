import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 px-8 py-10">
      <h1 className="text-4xl mb-5">Get in Touch!</h1>
      <p className="w-1/2 text-gray-600 mb-10 tracking-wide leading-7">
        Every great collaboration starts with a simple conversation. Share your
        ideas, ask your questions, or just say hello. Let’s talk and bring
        something amazing to life together!
      </p>
      <button
        onClick={() => navigate("/contact")}
        className="bg-gray-900 text-gray-50 uppercase p-4 tracking-widest mb-5 cursor-pointer"
      >
        Contact Me!
      </button>
    </section>
  );
};

export default Banner;

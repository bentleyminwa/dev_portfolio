import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 p-10 space-y-5">
      <h1 className="text-3xl md:text-4xl">Get in Touch!</h1>
      <p className="text-gray-600 tracking-wide leading-6 text-sm">
        Every great collaboration starts with a simple conversation. Share your
        ideas, ask your questions, or just say hello. Let’s talk and bring
        something amazing to life together!
      </p>
      <button
        onClick={() => navigate("/contact")}
        className="bg-gray-900 text-gray-50 uppercase p-4 tracking-widest cursor-pointer"
      >
        Contact Me!
      </button>
    </section>
  );
};

export default Banner;

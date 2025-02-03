import { data } from "../../assets/data/data";

const Contact = () => {
  const { contactInfos } = data;

  return (
    <main className="pt-20">
      <h5 className="uppercase text-[10px] text-gray-500 tracking-[4px] mb-5">
        how to reach me
      </h5>
      <h2 className="uppercase text-xl tracking-[4px] mb-20">Get in Touch</h2>
      <section className="grid grid-cols-2 gap-10 pr-10 mb-32">
        <form className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="name"
            className="border border-gray-200 p-4"
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="border border-gray-200 p-4"
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            className="border border-gray-200 p-4"
          />
          <textarea
            name="message"
            placeholder="message"
            className="border border-gray-200 p-4 min-h-[150px]"
          />
          <button className="self-start px-4 py-2 uppercase text-sm text-white bg-black cursor-pointer tracking-widest hover:bg-gray-800">
            send message
          </button>
        </form>
        <div>
          <ul>
            {contactInfos.map(({ icon, title, value }) => (
              <li key={title} className="flex items-center gap-5 mb-10">
                <span className="bg-gray-200 p-10 text-xl">{icon}</span>
                <span className="text-sm tracking-wide flex-1">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Contact;

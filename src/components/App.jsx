import { RiLink, RiAddCircleFill } from "react-icons/ri";

const App = () => {
  return (
    <div className="py-8 mx-auto w-2/3 h-screen flex flex-col">
      <h1 className="font-head font-bold text-4xl flex items-center">
        <RiLink />
        connect
      </h1>

      <section className="my-8 bg-white rounded-xl p-8 flex-1 grid grid-cols-[200px_1fr]">
        <sider>
          <header className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">contacts</h2>
            <button className="">
              <RiAddCircleFill className="text-primary" size={32} />
            </button>
          </header>
        </sider>
      </section>
    </div>
  );
};

export default App;

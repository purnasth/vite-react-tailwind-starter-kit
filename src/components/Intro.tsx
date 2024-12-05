import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <>
      <main className="relative z-auto h-screen w-full bg-white/50">
        <div
          className="pointer-events-none absolute inset-0 -z-10 size-full select-none bg-cover"
          style={{
            backgroundImage:
              'url("https://aasrahospitality.purnashrestha.com.np/assets/whitegradient-BOMfrnNs.avif")',
          }}
        ></div>
        <div className="container flex size-full max-w-3xl flex-col items-center justify-center gap-4 text-center">
          <Link to="https://www.purnashrestha.com.np/" target="_blank">
            <img
              src="https://www.purnashrestha.com.np/assets/hero_noise-1rKfdf1M.png"
              alt="Purna Shrestha"
              className="size-52 object-cover"
            />
          </Link>

          <h1 className="font-title mt-4 text-5xl capitalize leading-snug">
            Welcome to Vite + React and tailwindCSS starter Kit
          </h1>

          <p className="font-body max-w-3xl">
            This is a starter kit for Vite + React and tailwindCSS. It is a
            simple and easy to use starter kit for your next project. It was
            built in react-router-dom, react-icons, and react-helmet-async along
            with the built in routing components and file structure.
          </p>
        </div>
      </main>
    </>
  );
};

export default Intro;

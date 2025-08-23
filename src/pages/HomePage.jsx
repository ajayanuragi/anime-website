import { useNavigate } from "react-router";

export function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-linear-to-t from-blue-950 to-purple-950">
      <h1 className="text-3xl md:text-6xl lg:text-9xl font-extrabold bg-linear-30 from-white to-blue-100 text-transparent bg-clip-text">
        Anime Website
      </h1>
      <div>
        <p className="text-white mt-4 max-w-2xs md:max-w-md lg:max-w-4xl px-4 md:text-2xl lg:text-3xl text-center">
          Explore a world of anime like never before. Dive into our extensive
          collection, discover trending series, and find your next favorite show
          with ease.
        </p>
      </div>
      <div className="mt-8">
        <button
          onClick={() => navigate("/home")}
          className="text-white border-2 px-8 py-4 rounded hover:scale-105 cursor-pointer"
        >
          Enter Website
        </button>
      </div>
    </div>
  );
}

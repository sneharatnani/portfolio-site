import sneha from "../assets/img/sneha.jpg";

export default function Home() {
  return (
    <div className="flex flex-col-reverse items-center justify-center h-[80vh] text-lightGrey text-center capitalize font-poppins">
      <section>
        <p>hey there!</p>
        <p className="text-3xl text-green uppercase">i'M sneha ratnani.</p>
        <p className="uppercase">frontend developer</p>
        <button>more about me</button>
      </section>
      <img
        src={sneha}
        className="rounded-full h-40 w-40 border-4 border-gray-200"
      />
    </div>
  );
}

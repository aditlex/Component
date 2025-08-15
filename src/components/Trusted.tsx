export default function Trusted() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col px-3">
        <h1 className="mx-auto text-center text-xl md:text-2xl font-bold text-gray-100/60 w-full">
          Trusted by the world’s top Enterprises and Startups
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 pt-8 items-center">
          <img src={"comp1.svg"} alt="Company 1" className="w-full max-h-12 object-contain mx-auto" />
          <img src={"comp2.svg"} alt="Company 2" className="w-full max-h-12 object-contain mx-auto" />
          <img src={"comp3.svg"} alt="Company 3" className="w-full max-h-12 object-contain mx-auto" />
          <img src={"comp4.svg"} alt="Company 4" className="w-full max-h-12 object-contain mx-auto" />
          <img src={"comp5.svg"} alt="Company 5" className="w-full max-h-12 object-contain mx-auto" />
          <img src={"comp6.svg"} alt="Company 6" className="w-full max-h-12 object-contain mx-auto" />
        </div>
      </div>
    </section>
  );
}

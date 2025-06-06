import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage data analytics centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            nostrum nobis quia sunt adipisci eos numquam! Ad ab dolores eligendi
            illo. Dolor error ipsam earum velit ad veritatis enim illo.
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black cursor-pointer">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;

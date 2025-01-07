
const TrialSection = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-50">
      <div className="text-center px-6 py-8 bg-white rounded-lg ">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Free Trial Today</h2>
        <p className="text-xl text-gray-600 mb-6">Join over 4000+ startups</p>
        <div className="flex justify-center gap-4">
          <button className="bg-red-600 text-white py-2 px-6 rounded-lg  hover:bg-red-700 transition">
            Get Started
          </button>
          <button className=" text-gray-600 py-2 px-6 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrialSection;

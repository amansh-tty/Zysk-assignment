
const FAQSection = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-50 px-4">
      <div className="  rounded-lg  p-5   md:p-5 text-center max-w-xl">
        {/* Avatar group */}
        <div className="flex justify-center -space-x-4 mb-4">
          <img
            className="w-12 h-12 rounded-full border-2 border-white"
            src="/profile.png"
            alt="User 1"
          />
          <img
            className="w-12 h-12 rounded-full border-2 border-white"
            src="/profile.png"
            alt="User 2"
          />
          <img
            className="w-12 h-12 rounded-full border-2 border-white"
            src="/profile.png"
            alt="User 3"
          />
        </div>

        <h2 className="text-lg font-semibold mb-2">Still have questions?</h2>
        <p className="text-gray-500 mb-6">
          Can’t find the answer you’re looking for? Please chat to our friendly team.
        </p>

        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQSection;

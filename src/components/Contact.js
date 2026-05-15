const Contact = () => {
  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 h-32"></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

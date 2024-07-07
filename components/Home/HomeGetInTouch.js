import HomeBanner from "@/assets/LandingPage.jpg";
import style from './HomeGetInTouch.module.css';



const HomeGetInTouch = () => {

  return (
    <section className="relative py-20 ">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 bg-cover bg-center " style={{ backgroundImage: `url(${HomeBanner.src})` }}></div>
      
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row items-center">
        {/* Left Half: Form */}
        <div className="w-full md:w-1/2 bg-white dark:bg-gray-950 p-6 md:p-8 rounded-2xl shadow-lg transform transition-all hover:scale-105 mb-8 md:mb-0">
          <h1 className="font-bold text-gray-800 dark:text-white text-3xl md:text-5xl mb-8">Get in Touch</h1>
          <form className="space-y-6">
            <div className="flex flex-col space-y-4">
              <label className="block text-gray-700 dark:text-gray-300">
                Name:
                <input type="text" className={`mt-1 ps-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${style.GetInTouchInput}`} placeholder="Your Name"/>
              </label>
              <label className="block text-gray-700 dark:text-gray-300">
                Email:
                <input type="email" className={`mt-1 ps-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${style.GetInTouchInput}`} placeholder="Your Email" />
              </label>
              <label className="block text-gray-700 dark:text-gray-300">
                Preferred Country:
                <input type="text" className={`mt-1 ps-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${style.GetInTouchInput}`} placeholder="Preferred Country" />
              </label>
              <label className="block text-gray-700 dark:text-gray-300">
                Contact Number:
                <input type="text" className={`mt-1 ps-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${style.GetInTouchInput}`} placeholder="Contact Number" />
              </label>
              <label className="block text-gray-700 dark:text-gray-300">
                Last Academic Qualification & Result:
                <input type="text" className={`mt-1 ps-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${style.GetInTouchInput}`} placeholder="Academic Qualification & Result" />
              </label>
              <label className="block text-gray-700 dark:text-gray-300">
                Have You any English Proficiency Certificate:
                <input type="text" className={`mt-1 ps-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${style.GetInTouchInput}`} placeholder="Yes/No" />
              </label>
            </div>
            <button type="submit" className="w-full py-3 px-4 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              Submit
            </button>
          </form>
        </div>
        
        {/* Right Half: Text */}
        {/* <div className="w-full md:w-1/2 text-white">
          <div className="max-w-lg mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel turpis nec leo fermentum malesuada. Nulla facilisi.
            </p>
            <p className="text-lg mb-4">
              Sed ultrices, ipsum eu venenatis blandit, mi nunc aliquam arcu, nec volutpat velit dolor non libero.
            </p>
            <p className="text-lg mb-4">
              Morbi nec lacus fermentum, vehicula ipsum eu, tempor lectus. Proin in diam at neque posuere tincidunt. Sed euismod arcu vel efficitur molestie.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HomeGetInTouch;


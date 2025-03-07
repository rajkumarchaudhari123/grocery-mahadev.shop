import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold font-serif text-gray-800">
          &ldquo;The Secret Behind Our Freshness&rdquo;
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Fresh, organic, and handpicked just for you.
        </p>
      </section>

     {/* Working Hours Section */}
<section className="bg-green-100 rounded-lg p-6 text-center my-8">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">🕒 Working Hours</h2>
  
  <div className="flex flex-col md:flex-row justify-center items-center gap-6">
    {/* Morning Shift */}
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      <h3 className="text-xl font-semibold text-green-700">🌅 Morning</h3>
      <p className="text-lg text-gray-600">7:00 AM - 1:30 PM</p>
    </div>

    {/* Break Time */}
    <div className="bg-red-200 shadow-md rounded-lg p-4 w-64">
      <h3 className="text-xl font-semibold text-red-700">☕ Break Time</h3>
      <p className="text-lg text-gray-600">1:30 PM - 5:00 PM</p>
    </div>

    {/* Evening Shift */}
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      <h3 className="text-xl font-semibold text-green-700">🌆 Evening</h3>
      <p className="text-lg text-gray-600">5:00 PM - 8:00 PM</p>
    </div>
  </div>
</section>


      {/* Products Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["image_1.jpg", "image_2.jpg", "image_3.jpg"].map((img, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={`/${img}`}
              alt={`Product ${index + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          &ldquo;What Our Customers Say&rdquo;
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          &ldquo;Best quality fruits and vegetables I have ever purchased!&rdquo;
        </p>
      </section>
    </div>
  );
}

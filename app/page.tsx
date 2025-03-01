import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold font-serif text-gray-800">
          &ldquo;The Secret Behind Our Freshness&rdquo;
        </h1>
        <p className="mt-4 text-lg text-gray-600">Fresh, organic, and handpicked just for you.</p>
      </section>

      {/* Products Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/image_1.jpg"
            alt="Product 1"
            width={400}
            height={300}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/image_2.jpg"
            alt="Product 2"
            width={400}
            height={300}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/image_3.jpg"
            alt="Product 3"
            width={400}
            height={300}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
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

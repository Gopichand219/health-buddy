const LifestylePackages = ({ packages }) => (
    <section className="p-4">
      <h2 className="text-lg font-bold mb-4">Lifestyle Health Check-up Packages</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.value}
            className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={pkg.imgSrc}
              alt={pkg.title}
              className="w-16 h-16 mb-2 object-contain"
            />
            <h3 className="text-sm font-medium text-gray-700">{pkg.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default LifestylePackages;
  
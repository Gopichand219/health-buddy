const HealthCheckPackages = ({ packages }) => {
    return (
      <section className="p-4">
        <h2 className="text-lg font-bold mb-4">Book Health Check Packages in Bengaluru</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.value}
              className="flex flex-col items-center justify-center text-center p-4 rounded-lg shadow transition-transform transform hover:scale-105"
              style={{ backgroundColor: pkg.color }}
            >
              <img
                src={pkg.imgSrc}
                alt={pkg.label}
                className="w-16 h-16 mb-2 object-contain"
              />
              <h3 className="text-sm font-medium text-white">{pkg.label}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HealthCheckPackages;
  
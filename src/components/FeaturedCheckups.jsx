import React, { useState } from "react";

const FeaturedCheckups = ({ heading, categories, packages = [] }) => {
  const [showAllPackages, setShowAllPackages] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredPackages = selectedCategory
    ? packages.filter((pkg) =>
        pkg.subCategories.includes(selectedCategory.toUpperCase())
      )
    : packages;

  const displayedPackages = showAllPackages ? filteredPackages : filteredPackages.slice(0, 6);

  return (
    <section className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{heading}</h2>
        <button
          className="text-blue-500 hover:underline"
          onClick={() => setShowAllPackages((prev) => !prev)}
        >
          {showAllPackages ? "Show Less" : "View All"}
        </button>
      </div>
      {categories && (
        <div
          className="mb-4 flex space-x-2 overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {Object.entries(categories).map(([key, value]) =>
            Array.isArray(value) ? (
              value.map((category, index) => (
                <button
                  key={`${key}-${index}`}
                  className={`whitespace-nowrap px-4 py-1 border rounded-full text-sm ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category ? null : category
                    )
                  }
                >
                  {category}
                </button>
              ))
            ) : (
              <button
                key={key}
                className="px-4 py-1 border rounded-full text-sm bg-gray-200 text-gray-700"
              >
                {value}
              </button>
            )
          )}
        </div>
      )}
      <div
        className="flex space-x-4 overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {displayedPackages.length > 0 ? (
          displayedPackages.map((pkg) => (
            <div
              key={pkg.packageId}
              className="min-w-[300px] min-h-[350px] flex-shrink-0 relative border p-4 rounded shadow hover:shadow-lg transition-transform transform hover:scale-105 bg-white"
            >
              {pkg.isSponsored && (
                <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-full absolute top-2 right-2">
                  Sponsored
                </span>
              )}
              <h3 className="font-semibold text-lg mb-2">
                {pkg.packageDisplayName}
              </h3>
              <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                <span className="material-icons text-blue-500">schedule</span>
                {pkg.reportsTatText}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">{pkg.testCount} Tests:</span>{" "}
                {pkg.testsSummary.length > 0 && (
                  <span>{pkg.testsSummary.slice(0, 2).join(", ")}...</span>
                )}
              </p>
              <div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg text-sm text-gray-600 mb-4">
                <div>
                  <span className="font-medium">Fasting:</span>{" "}
                  {pkg.fastingHoursText || "N/A"}
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-icons text-blue-500">home</span>
                  {pkg.visitType.join(", ")}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-green-600">
                  ₹{pkg.price || "N/A"}
                </p>
                {pkg.discountInfo && (
                  <p className="text-sm text-gray-500 line-through">
                    ₹{pkg.discountInfo.discountPrice}
                  </p>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
                  Add to Cart
                </button>
                <div className="flex items-center">
                  <button className="px-2 py-1 border rounded">-</button>
                  <span className="px-2">1</span>
                  <button className="px-2 py-1 border rounded">+</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">
            No health check-up packages available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedCheckups;

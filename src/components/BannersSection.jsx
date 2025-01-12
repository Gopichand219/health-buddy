const BannersSection = ({ banners }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {banners.map((banner, index) => (
          <a
            key={index}
            href={banner.deeplink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={banner.bannerUrl}
              alt={`Banner ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md hover:shadow-lg"
            />
          </a>
        ))}
      </div>
    );
  };
  
  export default BannersSection;
  
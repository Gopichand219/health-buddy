const IconsSection = ({ icons }) => (
    <section className="p-4">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
        {icons.map((icon) => (
          <div
            key={icon.iconText}
            className="flex flex-col items-center text-center hover:bg-gray-100 p-4 rounded-lg shadow-sm transition-transform transform hover:scale-105"
          >
            <img src={icon.iconUrl} alt={icon.iconText} className="w-14 h-14 mb-2" />
            <a href={icon.deeplink} target="_blank" rel="noopener noreferrer">
              <h3 className="text-md font-medium mb-2">{icon.iconText}</h3>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default IconsSection;
  
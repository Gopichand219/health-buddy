const HighlightsSection = ({ highlights }) => (
    <section className="p-4">
      <h2 className="text-lg font-bold mb-4">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {highlights.map((highlight, index) => (
          <div key={index} className="text-center">
            <img src={highlight.img} alt={highlight.title} className="w-16 h-16 mx-auto mb-2" />
            <h3 className="text-sm font-bold">{highlight.title}</h3>
            <p className="text-sm">{highlight.subTitle}</p>
            <p className="text-xs text-gray-500">{highlight.subText}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default HighlightsSection;
  
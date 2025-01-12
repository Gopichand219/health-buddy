import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import IconsSection from './components/IconsSection';
import BannersSection from './components/BannersSection';
import FeaturedCheckups from './components/FeaturedCheckups';
import FAQs from './components/FAQs';
import LifestylePackages from './components/LifestylePackages';
import UserReviews from './components/UserReviews';
import HighlightsSection from './components/HighlightsSection';
import { fetchPageConfig } from './services/api';

const App = () => {
  const [config, setConfig] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPageConfig()
      .then((data) => {
        if (data) {
          const sortedConfig = [
            ...data.filter((section) => section.id !== '7'),
            ...data.filter((section) => section.id === '7'),
          ];
          setConfig(sortedConfig);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Header />
      <div className="p-4 bg-blue-50">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Find lab tests, diagnostics centres"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        config.length > 0 &&
        config.map((section) => {
          switch (section.id) {
            case '1':
              return <IconsSection key={section.id} icons={section.props} />;
            case '2':
              return <BannersSection key={section.id} banners={section.props} />;
            case '3':
              return (
                <FeaturedCheckups
                  key={section.id}
                  heading={section.heading}
                  categories={section.categories}
                  packages={section.props[0].packages}
                />
              );
            case '4':
              return <LifestylePackages key={section.id} packages={section.props} />;
            case '6':
              return <UserReviews key={section.id} reviews={section.props} />;
            case '8':
              return <HighlightsSection key={section.id} highlights={section.props} />;
            case '7':
              return <FAQs key={section.id} faqs={section.props} />;
            default:
              return null;
          }
        })
      )}
    </div>
  );
};

export default App;

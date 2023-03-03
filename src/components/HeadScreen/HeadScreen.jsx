import { Helmet, HelmetProvider } from 'react-helmet-async';

const HeadScreen = ({ pageTitle }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle ? `${pageTitle} - UMUSIC` : 'UMUSIC'}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default HeadScreen;

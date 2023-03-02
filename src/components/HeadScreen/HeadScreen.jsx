import { Helmet } from 'react-helmet';

const HeadScreen = ({ pageTitle }) => {
  return (
    <Helmet>
      <title>{pageTitle} - UMUSIC</title>
    </Helmet>
  );
};

export default HeadScreen;

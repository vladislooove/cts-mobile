// Libs
import React, { FC } from 'react';

// Components
import Navigation from '../../components/Navigation';

// Containers
import SystemContainer from '../../containers/System';

export const Search: FC = () => {
  return (
    <SystemContainer>
      <Navigation />
    </SystemContainer>
  );
}

export default Search;

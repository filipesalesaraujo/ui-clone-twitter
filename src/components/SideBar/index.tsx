import React from 'react';
import FollowSuggestion from '../FollowSuggestion';
import List from '../List';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <Body>
        <List
          title="Talvez você curta"
          elements={[
          <FollowSuggestion name="Fulano" nickname="@fulano" />,
          <FollowSuggestion name="Beltrano" nickname="@beltrano" />,
          <FollowSuggestion name="Sicrano" nickname="@sicrano" />,
        ]}
        />
        <List
          title="Talvez você curta"
          elements={[<h1>Teste</h1>, <h1>Teste</h1>, <h1>Teste</h1>]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;

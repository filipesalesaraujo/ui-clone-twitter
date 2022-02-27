import React from 'react';

import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButtons,
  HomeIcon,
  BellIcon,
  FavoriteIcon,
  ProfileIcon,
  EmailIcon,
  BottomSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButtons>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButtons>

        <MenuButtons>
          <BellIcon />
          <span>Notificações</span>
        </MenuButtons>

        <MenuButtons>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButtons>

        <MenuButtons>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButtons>

        <MenuButtons className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButtons>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <BottomSide>
        <Avatar />
        <ProfileData>
          <strong>Nome do usuário</strong>
          <span>@nome_do_usuario</span>
        </ProfileData>
        <ExitIcon />
      </BottomSide>
    </Container>
  );
};

export default MenuBar;

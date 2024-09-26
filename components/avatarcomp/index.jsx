import React, { createContext, useState } from 'react';

export const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(require('../../assets/avatares/perfil-de-usuario.png'));

  // Função para alterar o avatar
  const changeAvatar = (newAvatar) => {
    setSelectedAvatar(newAvatar);
  };

  return (
    <AvatarContext.Provider value={{ selectedAvatar, changeAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};

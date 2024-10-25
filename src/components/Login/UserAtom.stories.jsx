import React, { useState } from 'react';
import UserAtom from './UserAtom';

const Template = (args) => {
  const [username, setUsername] = useState(args.username || '');

  return (
      <UserAtom
          {...args}
          username={username}
          onUsernameChange={setUsername}
      />
  );
};

export default {
  title: 'Components/UserAtom',
  component: UserAtom,
  render: Template,
};

export const Default = {
  args: {
    username: '',
  },
};

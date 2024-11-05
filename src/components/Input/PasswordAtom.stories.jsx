import React, {useState} from 'react';
import PasswordAtom from './PasswordAtom';

const Template = (args) => {
  const [password, setPassword] = useState(args.password || '');

  return (
      <PasswordAtom
          {...args}
          password={password}
          onPasswordChange={setPassword}
      />
  );
};

export default {
    title: 'Components/Input/PasswordAtom',
    component: PasswordAtom,
    render: Template,
};

export const Default = {
  args: {
    password: '',
  },
};

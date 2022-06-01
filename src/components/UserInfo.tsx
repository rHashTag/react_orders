import { FC } from 'react';
import { User } from '../app.typedefs';

interface Props {
  user: User;
}

export const UserInfo: FC<Props> = ({ user }) => {
  return (
    <>{`(${user.name})`}</>
  );
};

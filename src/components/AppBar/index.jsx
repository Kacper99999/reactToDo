import { Navigation } from '../Navigation';
import { UserMenu } from '../UserManu';
import { AuthNav } from '../AuthNav';
import { useAuth } from '../../hooks';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

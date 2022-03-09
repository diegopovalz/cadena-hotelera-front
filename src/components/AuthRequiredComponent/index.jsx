import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function AuthRequiredComponent({ children }) {
  const { user } = useContext(UserContext);
  if (user) {
    return children;
  }
  return <Navigate to="/" />;
}

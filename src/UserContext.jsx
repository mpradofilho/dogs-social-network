import React from 'react';
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from './api';

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
  }
  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const res = await fetch(url, options);
    setData(await res.json());
    setLogin(true);
  }
  React.useEffect(() => {
    (async function () {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const res = await fetch(url, options);
          if (!res.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }());
  }, []);

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`Error: ${res.statusText}`);
      const { token } = await res.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  // 12:12

  return (
    <UserContext.Provider value={{
      userLogin, data, userLogout, error, loading, login,
    }}
    >
      {children}
    </UserContext.Provider>
  );
}

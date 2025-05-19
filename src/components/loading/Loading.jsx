import { useEffect, useState } from 'react';
import './Loading.css';

export default function Loader() {
  const [fadeOut, setFadeOut] = useState(false);
  const [unmount, setUnmount] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setUnmount(true), 200);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  if (unmount) return null;

  return (
    <div className={`loader-overlay ${fadeOut ? 'hidden' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
}

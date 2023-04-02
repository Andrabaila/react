import React, { useEffect, useState } from 'react';
import '../shared/styles/main.scss';
import PageMain from '../pages/main';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading ? <div>Loading...</div> : <PageMain />;
}

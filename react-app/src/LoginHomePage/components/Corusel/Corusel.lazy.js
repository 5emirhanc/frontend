import React, { lazy, Suspense } from 'react';

const LazyCorusel = lazy(() => import('./Corusel'));

const Corusel = props => (
  <Suspense fallback={null}>
    <LazyCorusel {...props} />
  </Suspense>
);

export default Corusel;

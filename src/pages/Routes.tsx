import React from 'react';
import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import FindaBoard from './FindaBoard';
import Write from './Write';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/board" element={<FindaBoard />} />
      <Route path="/write" element={<Write />} />
      <Route path="*" element={<Navigate replace to="/board" />} />
    </ReactRouterRoutes>
  );
};

import React from 'react';
import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import CommentWrite from './CommentWrite';
import Detail from './Detail';
import FindaBoard from './FindaBoard';
import Write from './Write';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/board" element={<FindaBoard />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/write" element={<Write />} />
      <Route path="/comment-write" element={<CommentWrite />} />
      <Route path="*" element={<Navigate replace to="/board" />} />
    </ReactRouterRoutes>
  );
};

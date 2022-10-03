import React, { lazy } from 'react';
import { Route, Routes, RouteProps, useParams, useLocation, Navigate } from 'react-router-dom';
import { RoutesEnum } from '../../enum/RoutesEnum';
import UserFormSubmission from '../user';
import Address from '../user/Address';
import Information from '../user/Information';
import ReviewForm from '../user/ReviewForm';

/**
 * AppRoutes
 * Routes available for all users
 */
export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path={RoutesEnum.USER} element={<UserFormSubmission />} /> */}
      {/* <Route path={RoutesEnum.FORM1} element={<>USER - form 1 landing page</>} />

      <Route path={RoutesEnum.FORM2} element={<>USER - form 2 landing page</>} />

      <Route path={RoutesEnum.REVIEW_FORM} element={<>USER - final landing page</>} /> */}

      <Route path={RoutesEnum.USER} element={<UserFormSubmission />}>
        <Route index element={<Navigate to={RoutesEnum.INFORMATION} />} />
        <Route  path={RoutesEnum.INFORMATION} element={<Information />} />

        <Route path={RoutesEnum.ADDRESS} element={<Address />} />

        <Route path={RoutesEnum.FORM_SUBMIT} element={<ReviewForm/>} />
      </Route>
      <Route path="*" element={<Navigate to={RoutesEnum.USER} replace />} />
    </Routes>
  );
}

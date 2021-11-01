import React from 'react';
import {CodeEditorPage} from '../pages/CodeEditorPage/CodeEditorPage';
import {HomePage} from '../pages/HomePage/HomePage';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  HOME = '/',
  CODEEDITOR = '/',
}

export const publicRoutes: IRoute[] = [{path: RouteNames.HOME, exact: true, component: HomePage}];

export const privateRoutes: IRoute[] = [{path: RouteNames.CODEEDITOR, exact: true, component: CodeEditorPage}];

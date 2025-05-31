import React from 'react';
import { RouteObject } from 'react-router';

export default function pathAndComponent(
  Component: React.ComponentType
): RouteObject {
  return {
    path: `/${Component.name}`,
    Component: Component,
  };
}

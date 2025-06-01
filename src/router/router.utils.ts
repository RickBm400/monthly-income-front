import React from "react";
import { RouteObject } from "react-router";

/**
 * Generates a RouteObject with a path based on the given component's name and assigns the component.
 *
 * @param Component - The React component to associate with the route.
 * @returns A RouteObject containing the path and component.
 */
export default function pathAndComponent(
  Component: React.ComponentType,
): RouteObject {
  return {
    path: `/${Component.name}`,
    Component: Component,
  };
}

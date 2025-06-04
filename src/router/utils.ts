import React from "react";

/**
 * Represents a route configuration with an optional path, React component, and index flag.
 * Provides methods to create a route from a component and to set the index property.
 *
 * @property path - Optional route path.
 * @property Component - Optional React component to render for the route.
 * @property index - Optional flag indicating if this is an index route.
 *
 * @method create - Static method to generate a PathAndComponent instance from a React component.
 * @method isIndex - Sets the index flag and returns the instance for chaining.
 */
export default class PathAndComponent {
  path?: string;
  Component?: React.ComponentType;
  index?: boolean;

  constructor(options: { path?: string; Component?: React.ComponentType }) {
    this.path = options.path;
    this.Component = options.Component;
  }

  static create(Component: React.ComponentType): PathAndComponent {
    return new PathAndComponent({
      path: `/${Component.name}`,
      Component,
    });
  }

  isIndex(index: boolean = true): PathAndComponent {
    this.index = index;
    return this;
  }
}

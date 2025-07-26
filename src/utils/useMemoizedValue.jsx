// src/utils/useMemoizedValue.js
import { useMemo } from "react";

/**
 * Custom hook to memoize any value based on dependencies.
 * @param {() => any} factory - Function returning the value to memoize.
 * @param {Array} deps - Dependency array.
 * @returns {any} The memoized value.
 */
export function useMemoizedValue(factory, deps) {
  return useMemo(factory, deps);
}

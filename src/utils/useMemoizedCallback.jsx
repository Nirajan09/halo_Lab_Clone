// eslint-disable-next-line react-hooks/exhaustive-deps
import { useCallback } from "react";

/**
 * Custom hook to memoize a callback function based on dependencies.
 * @param {Function} callback - The callback function to memoize.
 * @param {Array} deps - Dependency array.
 * @returns {Function} The memoized callback.
 */
export function useMemoizedCallback(callback, deps) {
  return useCallback(callback, deps);
}

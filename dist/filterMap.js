"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterMap = void 0;
/**
 * Transforms an array of elements (of type T) into a new array of elements (of type U) based on specified filter and mapping functions.
 *
 * @template T The type of elements in the input array.
 * @template U The type of elements in the output array.
 *
 * @param {Array<T | undefined | null>} inputList - The array of elements to be transformed. Elements can be of type T, undefined, or null.
 * @param {function(T): boolean} [filterFn=(item) => true] - A function to filter elements of the input array. By default, it allows all elements of type T.
 * @param {function(T): U | undefined} mapFn - A function that maps elements of type T to elements of type U. Can return 'undefined' to exclude the element from the final array.
 *
 * @returns {U[]} A new array containing elements of type U, transformed and filtered by the provided functions.
 *
 * @example
 * // Example usage:
 * const numbers = [1, 2, undefined, 3];
 * const result = filterAndMap(numbers, x => x < 3, x => `Number: ${x}`);
 * // result will be ['Number: 1', 'Number: 2']
 */
function filterMap(inputList, filterFn = () => true, mapFn) {
    return inputList.reduce((outputList, item) => {
        if (item && filterFn(item)) {
            const mappedItem = mapFn(item);
            if (mappedItem) {
                outputList.push(mappedItem);
            }
        }
        return outputList;
    }, []);
}
exports.filterMap = filterMap;

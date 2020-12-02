import isError from './isError.js'

/**
 * Attempts to invoke `func`,returning either the result or the caught error
 * object.Any additional arguments are provided to `func` when it's invoked
 */

function attempt(func, ...args) {
	try {
		return func(...args)
	} catch (e) {
		return isError(e) ? e : new Error(e)
	}
}

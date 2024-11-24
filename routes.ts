/**
 * publicly accessible routes
 * these do not require authentication
 * type {string[]}
 */

export const publicRoutes = [
    "/",
    "/auth",
    "/auth/new-verification"
];
/**
 * routes used for authentication
 * these will redirect to /settings
 * type {string[]}
 */
export const authRoutes = [
    "/auth/register",
    "/auth/login",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
];
/**
 * prefix for api authentication routes
 * these are used for api authentication
 * type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * default redirection on login in
 * type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
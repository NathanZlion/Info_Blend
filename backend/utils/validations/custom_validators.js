
// This file contains custom validators that can be used in the backend


/**
 * 
 * @param {string} password
 * @returns true if password is strong enough. If not false.
 * 
 * A function to check if a password is strong enough
 */
export function isStrongPassword(password) {
    // criteria: Password must be at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // criteria: Password must contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // criteria: Password must contain at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // criteria: Password must contain at least one digit
    if (!/\d/.test(password)) {
        return false;
    }

    // criteria: Password must contain at least one special character
    if (!/[!@#$%^&*]/.test(password)) {
        return false;
    }

    return true;
}

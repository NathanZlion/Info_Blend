
// This file contains custom validators that can be used in the backend


/**
 * 
 * @param {string} password
 * @returns true if password is strong enough. If not false.
 * 
 * A function to check if a password is strong enough
 */
export function checkPasswordStrength(password: string): void {
    // criteria: Password must be at least 8 characters long
    if (password.length < 8) {
        throw new PasswordNotStrongEnoughError("Password must be at least 8 characters long");
    }

    // criteria: Password must contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        throw new PasswordNotStrongEnoughError("Password must contain at least one uppercase letter");
    }

    // criteria: Password must contain at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        throw new PasswordNotStrongEnoughError("Password must contain at least one lowercase letter");
    }

    // criteria: Password must contain at least one digit
    if (!/\d/.test(password)) {
        throw new PasswordNotStrongEnoughError("Password must contain at least one digit");
    }

    // criteria: Password must contain at least one special character
    if (!/[!@#$%^&*]/.test(password)) {
        throw new PasswordNotStrongEnoughError("Password must contain at least one special character");
    }
}




// custrom error for password not strong enough
export class PasswordNotStrongEnoughError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "Password Does Not Meet Criteria";
    }
}
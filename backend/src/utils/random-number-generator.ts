/// This file contains the random number generator function that uses crypto module to generate random numbers.

import crypto from 'crypto';

export const generateRandomConfirmationCode = (
    minimum: number = 0, maximum: number = 999999, numOfDigits: number = 6
): string => {
    return crypto.randomInt(minimum, maximum).toString().padStart(numOfDigits, '0');
};

export default generateRandomConfirmationCode;
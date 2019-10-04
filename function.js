export const compareNumber = (userGuess, correctNumber) => {
    const sanitizedUserGuess = Number(userGuess);
    if (sanitizedUserGuess === correctNumber) {
        return 0;
    } else if (sanitizedUserGuess < correctNumber) {
        return -1;
    } else if (sanitizedUserGuess > correctNumber) {
        return 1;
    }
}; 
export const compareNumber = (guess, correctNumber) => {
    if (guess === correctNumber) {
        return 0;
    } else if (guess < correctNumber) {
        return -1;
    } else {
        return 1;
    }
} 
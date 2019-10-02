// IMPORT MODULES under test here:
// import example from '../src/function.js';

import { compareNumber } from '../src/function.js';

const test = QUnit.test;

test('should return 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 7;
    const guess = 6;
    const expected = 'Too low!';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumber(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.compareNumber(result, false);
});

// IMPORT MODULES under test here:
// import example from '../src/function.js';

import { compareNumber } from '../function.js';

const test = QUnit.test;

test('should return -1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 7;
    const userGuess = 6;
    const expected = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumber(userGuess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);

});

test('should return 1', function(assert) {
        //Arrange
        // Set up your parameters and expectations
    const correctNumber = 7;
    const userGuess = 8;
    const expected = 1;
        //Act 
        // Call the function you're testing and set the result to a const
    const result = compareNumber(userGuess, correctNumber);
        //Assert
        // Make assertions about what is expected valid result
    assert.equal(result, expected);

});

test('should return 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 7;
    const userGuess = 7;
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumber(userGuess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);

});


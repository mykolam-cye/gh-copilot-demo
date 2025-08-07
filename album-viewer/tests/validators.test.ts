import {describe, it} from 'mocha';
import {expect} from 'chai';

import {validateDate, validateIPV6} from '../utils/validators';

// test the validateDate function
describe('validateDate', () => {
  it('should return a valid date object for a correct date string', () => {
    const date = validateDate('25/12/2021');
    expect(date).to.be.an.instanceof(Date);
    expect(date?.getFullYear()).to.equal(2021);
    expect(date?.getMonth()).to.equal(11); // December
    expect(date?.getDate()).to.equal(25);
  });

  it('should return null for an invalid date string', () => {
    const date = validateDate('31/02/2021'); // Invalid date
    expect(date).to.be.null;
  });

  it('should return null for an incorrectly formatted date string', () => {
    const date = validateDate('2021-12-25'); // Wrong format
    expect(date).to.be.null;
  });
});
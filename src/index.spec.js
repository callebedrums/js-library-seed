
import { expect } from 'chai';
import { f } from './index';

describe('es6 test', () => {
    it('test', () => {
        expect(f()).to.be.equal(1);
    });
});

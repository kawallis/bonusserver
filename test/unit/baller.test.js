const assert = require('chai').assert;
const Baller = require('../../lib/models/baller');

const expectedValidation = () => { throw new Error('expected validation errors'); };

describe('testing ballers model', () => {
    const baller = new Baller({
        name: 'fakeballer',
        team: 'thelosers',
        number: 22
    });
    return baller.validate(); 
});

describe('validation failures', () => {

    it('requires name and likes', () => {
        const baller = new Baller();
        return baller.validate()
            .then(expectedValidation,
            err => {
                const errors = err.errors;
                assert.ok(errors.name && errors.name.kind === 'required');
                assert.ok(errors.likes && errors.likes.kind === 'required');
            });
    });
});
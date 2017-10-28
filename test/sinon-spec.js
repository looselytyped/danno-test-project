import {expect} from 'chai';
import {spy, stub} from 'sinon';

const fun = (x) => 40 + x;

const obj = {
   name : 'foo',
   fun  : (x) => {return 2 + x;}
}
describe('Listening to services', () => {
   it('Do up a service', () => {
        const p = spy(fun)
        p(40)
        p(50)
        expect(p.called).to.be.true
   });
   it('should do a stub', () => {
        const p = stub(obj, "fun").returns(100);
        expect(obj.fun(50)).to.be.equal(100);
        expect(p.called).to.be.true
   });
});


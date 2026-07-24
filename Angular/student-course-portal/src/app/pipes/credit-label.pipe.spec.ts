import { CreditLabelPipe } from './credit-label.pipe';
describe('CreditLabelPipe',()=>{
 const pipe=new CreditLabelPipe();
 it('uses singular',()=>expect(pipe.transform(1)).toBe('1 Credit'));
 it('uses plural',()=>expect(pipe.transform(3)).toBe('3 Credits'));
 it('handles empty',()=>expect(pipe.transform(null)).toBe('No Credits'));
});

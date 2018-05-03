import {mount} from '@vue/test-utils';
import Demo from '../../resources/assets/js/components/Demo.vue';
import expect from 'expect';
import Helpers from 'mwangaben-vthelpers';

 
 
describe('Demo', () => {
    let  wrapper, b;
    beforeEach(() => {
        wrapper = mount(Demo);
        b       = new Helpers(wrapper, expect);
    });
   
    it('It test vue file', () => {
         b.see('Hello')
     });
});
import {Meteor} from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';

import {PrivateHeader} from './PrivateHeader';

if(Meteor.isClient){
  describe('Private Header', function(){
    it('should set button text to logout', function(){
      const wrapper = mount(<PrivateHeader title="Test title"/>)
      const buttonText = wrapper.find('button').text()
      expect(buttonText).toBe('logout')
    })
    it('should use title prop as h1 text', function(){
      const title = 'Test title here';
      const wrapper = mount(<PrivateHeader title={title}/>)
      const headerText  = wrapper.find('h1').text();
      expect(headerText).toBe(title);
    })
    
    it('should call handleLogout on click', function(){
      const spy = expect.createSpy(); 
      const wrapper = mount(<PrivateHeader title="Title" handleLogout={spy}/>);
      wrapper.find('button').simulate('click');
      expect(spy).toHaveBeenCalled();
    })
  })
}
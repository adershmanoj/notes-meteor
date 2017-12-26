import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import {Meteor} from 'meteor/meteor';

import NoteListItem from './NoteListItem';

if(Meteor.isClient){
  describe('NoteListItem', function(){
    
    it('should render title and timestamp', function(){
      const title = 'My title here';
      const updateAt = 1514140628991;
      const wrapper = mount(<NoteListItem note={{title, updateAt}}/>);
      
      expect(wrapper.find('h5').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('24/12/17');
    });
    
    it('should set default title if empty string', function(){
      const title = 'Untitled note';
      const updateAt = 0;
      const wrapper = mount(<NoteListItem note={{title, updateAt}}/>);
      
      expect(wrapper.find('h5').text()).toBe(title);
    });
    
  });
};
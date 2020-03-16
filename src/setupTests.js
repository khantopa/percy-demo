import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


global.React = React;
global.shallow = shallow;
global.mount = mount;
global.shallowToJson = shallowToJson;


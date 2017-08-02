import React from 'react';
import {shallow} from 'enzyme';

import Header from '../components/header';

describe('<Header/>', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });
    
    it('Should ', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('InfoModal').exists()).toEqual(false);
    });

    it('Should render the info modal when toggled', () => {
        const wrapper = shallow(<Header />);
        wrapper.instance().toggleInfoModal(true);
        expect(wrapper.find('InfoModal').exists()).toEqual(true);
    });
});



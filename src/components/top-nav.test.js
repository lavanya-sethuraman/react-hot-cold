import React from 'react';
import {shallow} from 'enzyme';

import TopNav from '../components/top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });
 
    it('Should render What link',() => { 
        const wrapper = shallow(<TopNav />);
        expect(wrapper.find('.what').exists()).toEqual(true);
    });

    it('Should render New-Game link', () => {
        const wrapper = shallow(<TopNav />);
        expect(wrapper.find('.new').exists()).toEqual(true);
    });
    
    it('Should call onNewGame when New-game is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onNewGame={callback} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });

     it('Should call onInfo when What is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onInfo={callback} />);
        const link = wrapper.find('.what');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
    
});



import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {

    // example unit test
    it('has 1 child', () => {
        const tree = renderer.create(<App />).toJSON() as any;
        expect(tree.children.length).toBe(2);
    });

    // example snapshot test
    it('renders correctly', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});



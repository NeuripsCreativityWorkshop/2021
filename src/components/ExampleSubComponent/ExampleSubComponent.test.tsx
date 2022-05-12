import '@testing-library/jest-dom';

import { mount } from 'enzyme';
import React from 'react';

import ExampleSubComponent from './ExampleSubComponent';

describe('ExampleSubComponent', () => {
    it('Example sub component renders', () => {
        // Render App in the document
        const component = mount(<ExampleSubComponent />);

        // Do checks on component
        // For more info on Enyzme testing see https://enzymejs.github.io/enzyme/docs/guides/jest.html
        expect(component.exists('div')).toBeTruthy();
    });
});

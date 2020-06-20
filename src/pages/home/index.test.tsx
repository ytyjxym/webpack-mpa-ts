import React from 'react'
import Home from './index'
import renderer from 'react-test-renderer'
test('test', () => {
    const component = renderer.create(
        <Home></Home>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
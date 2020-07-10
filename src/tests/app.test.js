import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer'

describe('Testing by using snapshot' , () =>{
  it('It successfully check the UI' , () =>{
    let currentHTML = renderer.create(<App/>).toJSON();
    expect(currentHTML).toMatchSnapshot();
  })
})
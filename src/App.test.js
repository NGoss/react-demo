import React from 'react'

import { shallow } from 'enzyme'

import App from './App'

// PLACEHOLDER TEST

describe('<App />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<App />)
		expect(wrapper.find('.root-container')).to.have.lengthOf(1)
	})
})

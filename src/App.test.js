import React from 'react'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'

// PLACEHOLDER TEST

Enzyme.configure({ adapter: new Adapter()})

describe('<App />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<App />)
		expect(wrapper.find('.root-container')).to.have.lengthOf(1)
	})
})

import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import Indicator from './Indicator'

const renderComponent = ({ isLoading = false }): void => {
  render(<Indicator  isLoading={isLoading}/>)
}

describe('Button', () => {
  it('component should render', () => {
    renderComponent({})

    expect(screen.getByTestId('indicator')).toBeInTheDocument()
  })
  it('should have spinner', () => {
    renderComponent({ isLoading: true })

    expect(screen.getByTestId('indicator')).toBeInTheDocument()
  })
})

import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? '#52b88e' : '#e9eef5')}
  border-radius: 3px;
  transition: all 150ms;


  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <span className="check-box">
        <CheckboxContainer>
          <HiddenCheckbox 
              name={this.props.name}
              type="checkbox"
              checked={this.props.selected}
              onChange={this.props.handleInputChange} />
          <StyledCheckbox checked={this.props.selected}>
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </StyledCheckbox>
        </CheckboxContainer> 
      </span>
    )
  }
}
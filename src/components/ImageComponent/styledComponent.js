import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const StyledImage = styled.img`
  height: 200px;
  width: 200px;
  margin: 2px;
  margin-bottom: -70px;
  height: ${props => (props.status ? '300px' : '200px')};
  width: ${props => (props.status ? '300px' : '200px')};
  transition: all 0.45s ease;
`
export const StyledButton = styled.button`
  height: 40px;
  width: 40px;
  font-size: 40px;
  margin-left: 80px;
  text-align: center;
  color: white;
`
export const TotalWrapper = styled.div``

export const Details = styled.div`
  color: red;
`
export const StyledSpan = styled.p``

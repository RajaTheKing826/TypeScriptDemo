import tw from 'tailwind.macro'
import styled from '@emotion/styled'
export const StyledInput = styled.input`
  ${tw`p-2 text-xl  border `};
  border: 2px solid
    ${props => (props.errorMessage === 'error Message' ? 'red' : 'gray')};
`

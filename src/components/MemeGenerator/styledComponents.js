// Style your components here
import styled from 'styled-components'

export const MemeContainer = styled.div`
  padding: 25px;
  width: 500px;
  height: 300px;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
`
export const MemeText = styled.p`
  color: white;
  font-size: ${props => props.fontSize};
  text-align: center;
`

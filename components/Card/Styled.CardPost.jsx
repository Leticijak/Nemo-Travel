import styled from "styled-components"

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
`

export const CardCont = styled.div`
  border-radius: 20px;
  background-color: lightblue;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem auto;
`
export const CardTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
`
export const CardImg = styled.img`
  border-radius: 30px;
  padding: 20px;
`

export const CardBody = styled.div`
  padding: 20px;
`
export const CardAuthor = styled.div`
  padding: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p {
    margin-left: 20px;
  }
`

export const AuthorImg = styled.img`
  border-radius: 50%;
`

export const AuthorBio = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #252525;
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin-top: 20px;
  }
`

export const Card = styled.div`
  background-color: #4E4B4B;
  width: 90%;
  height: 100%;
  border-radius: 8px;
  padding: 20px; 
  margin-bottom: 15px;
  box-shadow: 5px 5px 5px 5px #688;
  h2 {    
    color: white;
  }

`

export const Templates = styled.div`
  background-color: #4395D8;
  width: 100%;
  height: 40%;
  overflow-y: auto;
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  border-radius: 6px;
 
  button {
    border: 2px solid transparent;
    background: transparent;
    
    margin: 7px;
    img {
      width: 150px;
      height: 120px;
    }
    &.selected {
      border-color: #666;
    }
  }
  
`

export const Form = styled.form`
  background-color: #4395D8;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(min-width: 768px){
    width: 50%;
    margin: 0 auto;
  }
  input {
    width: 90%;
    height: 30px;
    border: 1px solid #F6EEEE;
    background-color: #F6EEEE;
    border-radius: 6px;   
    font-size: 14px;
    margin: 10px;
    
  }

`

export const Button = styled.button`
  background-color: #F6EEEE;
  border-radius: 8px;
  border: 1px solid #F6EEEE;
  width: 50%;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 40px;
  font-size: 16px;
  color: #4395D8;
  transition: background 0.3s ease-in;
  &:hover {
    background-color: white;
  }
  a {
    text-decoration: none;
    color: #4395D8;
  }
`

export const GeneratedMeme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img{    
    width: 100%;
    height: 60%;    
    @media(min-width: 768px){
      width: 50%;
      margin-left: 120px;
   }
    
  }
 
  


`

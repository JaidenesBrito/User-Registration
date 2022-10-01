import styled from 'styled-components'
import Backgroud from '../../Assets/background.svg'


export const Conteiner = styled.div`
background: url("${Backgroud}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 45px;
height: 100vh;

`
export const Image = styled.img`
margin-top: 30px;
`

export const InputLabel = styled.p`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;
margin-left: 25px;

`
export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
padding-left: 25px;
margin-bottom: 34px;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
border: none;
outline: none;

`



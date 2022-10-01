import styles from "styled-components"

export const Button = styles.button`
width: 342px;
height: 74px;
left: 35px;
top: 497px;
background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'} ;
border-radius: 14px;
border:${props => props.isBack ? '1px solid #FFFFFF' : 'none'};
margin-top: 132px;

font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;

color: #FFFFFF;

display: flex;
align-items: center;
justify-content: center;
gap: 10px;
cursor: pointer;

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.5;
}

img{
    transform: ${props => props.isBack && 'rotateY(180deg)'};
    }

`;
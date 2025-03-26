import styled from 'styled-components'

interface ISalign{
    direction?: string;
    h?: string;
    w?: string;
}

export const Saling = styled.div<ISalign>`
    display : flex ;
    align-items: center;
    justify-content: center;
    direction: ${({direction}) => direction? direction:'column'};
    height:  ${({h}) => h? h:'100vh'};
    width:  ${({w}) => w? w:'auto'};

`
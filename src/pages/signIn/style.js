import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: center;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;

  > h1{
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.BLUE_DARK};
  }

  > h2{
    font-size: 24px;
    margin: 48px 0;
  }

  >p{
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  >a{
    color: ${({theme}) => theme.COLORS.BLUE_DARK};
    margin-top: 84px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url('https://cdn.leonardo.ai/users/48bbf657-f3bb-45dc-8d93-bfdaf18086fd/generations/8b591265-7a40-47ec-aa91-767f45be14c3/variations/Default_Philosopher_Aristotle_greek_sculptures_realism_8k_1_8b591265-7a40-47ec-aa91-767f45be14c3_1.jpg') no-repeat center center;
  background-size: cover;

  height: 100vh;
`
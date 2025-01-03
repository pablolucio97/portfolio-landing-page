import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.black300};
  & .headerScrolling {
    position: fixed;
    background-color: ${({theme}) => theme.colors.primary_dark};
    z-index: 999;
    padding: 0 12px;
    transition: all 0.8s ease;
  }
  & .headerNotScrolling {
    background-color: ${({ theme }) => theme.colors.black100};
    transition: all 0.8s ease;
    padding: 8px 12px;
  }
  & .animatedTopScroll {
    right: 24px;
    transition: all 0.3s ease;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  
  & .normalTopScroll {
    right: -80px;
    transition: all 0.3s ease;
  }
  &.lightTitle {
    color: ${({ theme }) => theme.colors.white100};
  }
  & .lightText {
    color: ${({ theme }) => theme.colors.silver100};
  }

  &  .rgbBackground{
    background: linear-gradient('right-to-left', 'cyan', 'red');
  }
`;
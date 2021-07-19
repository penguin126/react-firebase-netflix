import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const WrapDescription = styled.div`
  position: relative;
`;

export const Input = styled.input`
  min-width: 500px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  font-size: 16px;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: ${({ active }) => (active === true ? '7px' : '40%')};
  font-size: ${({ active }) => (active === true ? '13px' : '16px')};
  font-weight: ${({ active }) => (active === true ? '550' : 'normal')};
  left: 11px;
  transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease,
    -webkit-transform 0.1s ease, -moz-transform 0.1s ease,
    -o-transform 0.1s ease;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  padding: 0 32px;
  font-size: 30px;
  border: 0;
  cursor: pointer;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 17.3px;
  color: white;
  text-align: center;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

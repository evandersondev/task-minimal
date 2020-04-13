import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 450px;
  height: 60px;
  padding: 0 30px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(255, 255, 255, 0.6);
  background: #2ac73f;
  position: absolute;
  animation: alert 1s normal;
  top: 60px;
  opacity: 1;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    height: auto;
    padding: 15px;
    flex-direction: column;
    align-items: center;
  }

  @keyframes alert {
    from {
      top: -60px;
      opacity: 0;
    }

    to {
      top: 60px;
      opacity: 1;
    }
  }

  h3 {
    font-size: 24px;
    font-weight: 500;

    @media (max-width: 450px) {
      margin-bottom: 15px;
    }
  }

  button {
    width: 32px;
    height: 32px;
    font-weight: bold;
    border-radius: 8px;
    border: 1px solid #f5f5f5;
    color: #f5f5f5;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #333;
      background: #f5f5f5;
    }
  }
`;

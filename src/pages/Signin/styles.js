import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 60px;
    font-size: 32px;
    letter-spacing: 2px;
  }

  p {
    font-size: 14px;
    letter-spacing: 1px;

    a {
      color: #0097e6;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  strong {
    letter-spacing: 1px;
    color: #c62a35;
    font-size: 16px;
    margin-bottom: 30px;
  }

  .input-box {
    height: 50px;
    border-radius: 8px;
    margin-bottom: 30px;
    background: #242424;
    padding: 0 30px;
    border-radius: 8px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: transparent;
      width: 20px;
      height: 100%;
      margin: 0;
      margin-top: 6px;
    }
  }

  form {
    width: 90%;
    max-width: 420px;
    display: flex;
    flex-direction: column;

    input,
    button {
      width: 100%;
    }

    input {
      height: 100%;
      border: 0;
      background: transparent;
      color: #f5f5f5;
      font-size: 16px;
    }

    button {
      height: 50px;
      border-radius: 8px;
      margin-bottom: 30px;
      border: 0;
      background: #ffc500;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        filter: brightness(1.15);
      }
    }
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h4 {
    text-transform: capitalize;
    font-weight: 500;
    margin-right: 30px;
    font-size: 14px;
  }

  .image-box {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: transparent;
    position: relative;
    border: 0;
    padding: 0;
    cursor: pointer;

    .loading {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background: transparent;
      position: absolute;
      top: 0;
      left: 0;

      &::after {
        content: '';
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: transparent;
        position: absolute;
        top: 0;
        left: -2px;
        margin: 0;
        border: 5px solid #454545;
        border-top-color: #ffc500;
        transform: rotate(0deg);
        animation: loadingImageProfile 0.8s linear 0s infinite;
      }

      @keyframes loadingImageProfile {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }

    img {
      width: 100%;
      border-radius: 50%;
    }

    .menu {
      width: 190px;
      /* height: 190px; */
      border-radius: 8px;
      background: #191919;
      position: absolute;
      top: 50px;
      left: -155px;
      transition: all 0.2s ease-in-out;
      animation: show-menu 0.2s ease-in-out 0s normal;

      &::after {
        content: '';
        width: 15px;
        height: 15px;
        background: #191919;
        position: absolute;
        top: -6px;
        right: 12px;
        transform: rotate(45deg);
        z-index: -20;
      }

      @keyframes show-menu {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      ul {
        width: 100%;
        padding: 15px 0;

        li {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 15px 30px;
          transition: background 0.3s;

          &:hover {
            background: #1d1d1d;
          }

          button {
            font-size: 18px;
            border: 0;
            background: transparent;
            cursor: pointer;
            color: #f5f5f5;
            margin-left: 15px;
          }
        }
      }
    } /* FIM MENU */
  }
`

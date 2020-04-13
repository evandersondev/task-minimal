import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BoardContent = styled.div`
  width: 90%;
  max-width: 720px;
  margin-top: 60px;

  h1 {
    text-align: center;
  }

  .content {
    h2 {
      font-size: 42px;
      letter-spacing: 1.5px;
      color: #c3c7d1;
    }
    h3 {
      font-size: 20px;
      letter-spacing: 1.5px;
      margin-bottom: 90px;
      color: #c3c7d1;
    }

    .process {
      display: flex;
      margin-bottom: 30px;

      li {
        padding: 0 25px;
        color: #545a58;

        span {
          margin-right: 15px;
        }
        #pedding {
          color: #ff5555;
        }
        #progress {
          color: #3742fa;
        }
        #review {
          color: #ffc500;
        }
        #done {
          color: #2ac73f;
        }

        &:first-child {
          padding-left: 0;
        }
      }
    } /* FIM CONTENT */

    .task-box {
      width: 100%;

      .task-title {
        height: 40px;
        display: flex;
        align-items: center;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 0 30px 0 0;

        button {
          width: 30px;
          height: 100%;
          border: 0;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease-in;
          margin-left: 15px;
        }
      }
    } /* FIM TASK */

    .task-list {
      width: 100%;
      margin-top: 30px;

      ul {
        width: 100%;

        li {
          width: 100%;
          height: 30px;
          display: flex;
          align-items: center;

          button {
            width: 30px;
            height: 100%;
            border: 0;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease-in;
            margin-left: 30px;
          }

          input {
            background: transparent;
            border: 0;
            color: #c3c7d1;
            font-size: 16px;
            margin-left: 15px;
          }
        }
      }
    }
  }
`

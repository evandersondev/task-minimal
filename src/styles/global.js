import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
  font-size: 14px;
  background: #131313;
  color: #c3c7d1;
  font-family: 'Roboto', sans-serif;
}

a{
  text-decoration: none;
}

ul{
  list-style: none;
}
`

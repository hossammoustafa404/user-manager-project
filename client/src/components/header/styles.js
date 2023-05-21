import styled from "styled-components";

const HeaderWrapper = styled("header")`
  min-height: 5rem;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #2196f3;

  .title {
    margin: 0;
    text-transform: capitalize;
    color: white;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export default HeaderWrapper;

import styled from "styled-components";

const ContainerWrapper = styled("div")`
  padding-inline: 1.2rem;
  margin-inline: auto;

  @media screen and (min-width: 768px) {
    width: 750px;
  }
  @media screen and (min-width: 992px) {
    width: 970px;
  }
  @media screen and (min-width: 1200px) {
    width: 1170px;
  }
`;

export default ContainerWrapper;

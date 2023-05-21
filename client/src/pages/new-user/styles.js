import { Alert } from "antd";

const { default: styled } = require("styled-components");

const NewWrapper = styled("main")`
  padding-top: 5rem;
  position: relative;
  overflow-x: hidden;
  .back-btn {
    background-color: #2196f3;
    color: white;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 2rem;

    :hover {
      color: white;
    }
  }
  .ant-form {
    max-width: 30rem;
    margin-inline: auto;

    label {
      text-transform: capitalize;
    }

    .ant-form-item {
      margin-bottom: 2.5rem;
      .ant-form-item-explain-error {
        font-size: 0.8rem;
      }
    }
    .submit-btn {
      background-color: #009688;
      color: white;
      font-weight: bold;
      text-transform: capitalize;
      :hover {
        color: white;
      }
    }
  }
`;

export const StyledAlert = styled(Alert)`
  width: 20rem;
  position: absolute;
  top: 10rem;
  right: ${({ show }) => (show ? "0" : "-20rem")};
  transition: 0.3s;
`;
export default NewWrapper;

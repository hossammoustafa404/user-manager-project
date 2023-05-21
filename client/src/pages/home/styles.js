import styled from "styled-components";

const HomeWrapper = styled("main")`
  padding-top: 5rem;

  .add-btn {
    background-color: #2196f3;
    color: black;
    font-weight: bold;
    text-transform: capitalize;
    color: white;
    margin-bottom: 2rem;
    :hover {
      color: white;
    }
  }

  .ant-table-cell {
    text-align: center !important;
  }

  .edit-btn,
  .delete-btn {
    background-color: #f44336;
    color: white;
    font-weight: bold;
    font-size: 0.8rem;
    text-transform: capitalize;
    :hover {
      color: white;
    }
  }

  .edit-btn {
    margin-right: 0.5rem;
    background-color: #009688;
  }
`;

export default HomeWrapper;

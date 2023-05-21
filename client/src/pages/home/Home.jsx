import React, { useEffect, useState } from "react";
import HomeWrapper from "./styles";
import Container from "../../components/container/Container";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState();

  const navigate = useNavigate();
  const columns = [
    {
      title: "Id",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "action",
      render: (_, { id }) => {
        return (
          <>
            <Button
              htmlType="button"
              className="edit-btn"
              onClick={() => navigate(`/newuser/${id}`)}
            >
              edit
            </Button>
            <Button
              htmlType="button"
              className="delete-btn"
              onClick={async () => {
                axios.delete(`/api/v1/users/${id}`);
                const { data } = await axios.get(`/api/v1/users`);
                setData(data);
                toast.error(`A user has been deleted!`);
              }}
            >
              delete
            </Button>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    fetch("/api/v1/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  let dataSource = [];
  if (data) {
    const { users } = data;
    dataSource = users.map(({ _id, name, email, gender, status }, index) => ({
      id: _id, //only for route purpose
      key: index + 1,
      name,
      email,
      gender,
      status,
    }));
  }

  return (
    <HomeWrapper>
      <Container>
        <Button
          htmlType="button"
          className="add-btn"
          onClick={() => navigate("/newuser")}
        >
          new user
        </Button>
        <Table
          dataSource={dataSource}
          columns={columns}
          scroll={{ x: 768 }}
          pagination={{ pageSize: 6 }}
        />
      </Container>
    </HomeWrapper>
  );
};

export default Home;

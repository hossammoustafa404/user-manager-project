import React, { useEffect, useState } from "react";
import NewWrapper from "./styles";
import Container from "../../components/container/Container";
import { Button, Form, Input, Radio } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

// Get errors from response function
const getErrors = (err) => {
  const errors = {};

  if (err.type === "email") {
    errors.email = err.message;
  }

  const errFields = Object.keys(errors).map((key) => ({
    name: key,
    errors: [errors[key]],
  }));

  return errFields;
};
// The component
const NewUser = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const params = useParams();

  const navigate = useNavigate();

  const handleFinish = async (values) => {
    setLoading(true);
    try {
      if (!params.userId) {
        await axios.post("/api/v1/users", values);
        form.resetFields();

        toast.success("The user has been added successfully!");
      } else {
        await axios.patch(`/api/v1/users/${params.userId}`, values);
        toast.success("The user has been updated successfully!");
      }
    } catch (error) {
      const {
        response: { data },
      } = error;

      const errFields = getErrors(data);
      form.setFields(errFields);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (params.userId) {
      fetch(`/api/v1/users/${params.userId}`)
        .then((res) => res.json())
        .then((data) => {
          const { name, email, gender, status } = data.user;
          form.setFieldsValue({ name, email, gender, status });
        });
    }
  }, []);

  return (
    <NewWrapper>
      <Container>
        <Button
          htmlType="button"
          onClick={() => navigate("/")}
          className="back-btn"
        >
          back to users
        </Button>
        <Form
          layout="vertical"
          onFinish={handleFinish}
          form={form}
          onFinishFailed={(values) => console.log(values)}
        >
          {/* Name */}
          <Form.Item
            name="name"
            label="name"
            rules={[
              {
                required: true,
                message: "Name must be provided",
              },
              {
                max: 20,
                message: "Name must not exceed 20 characters.",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="The name must not exceed 20 characters" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            name="email"
            label="email"
            rules={[
              {
                required: true,
                message: "Email must be provided",
              },
              {
                type: "email",
                message: "Invalid email format",
              },
              {
                max: 50,
                message: "Name must not exceed 50 characters.",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="The name must not exceed 50 characters" />
          </Form.Item>

          {/* Gender*/}
          <Form.Item
            name="gender"
            label="gender"
            rules={[
              {
                required: true,
                message: "Gender must be provided",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="male">male</Radio>
              <Radio value="female">female</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Status */}
          <Form.Item name="status" label="status">
            <Radio.Group>
              <Radio value="inactive">inactive</Radio>
              <Radio value="active">active</Radio>
            </Radio.Group>
          </Form.Item>

          <Button
            htmlType="submit"
            block
            className="submit-btn"
            loading={loading}
          >
            save
          </Button>
        </Form>
      </Container>
    </NewWrapper>
  );
};

export default NewUser;

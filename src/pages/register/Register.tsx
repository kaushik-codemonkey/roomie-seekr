import { Button, Checkbox, Flex, Form, Input, Select, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './register.module.scss'
import { UserCreate } from '../../types/User';
import { Link } from 'react-router-dom';
interface RegisterProps {
    // onLogin: (username: string, password: string) => void;
    // onGoogleLogin: () => void;
}

const RegisterPage: React.FC<RegisterProps> = ({ }) => {

    useEffect(() => {
        document.title = "Register"
    }, [])

    const { Option } = Select;

    const handleRegistration = (values: UserCreate) => {
        // Perform email/password login
        // onLogin(values.username, values.password);
    };

    const onFinish = (values: UserCreate) => {
        console.log('Success:', values);
        handleRegistration(values)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70, background: "#fff" }} defaultValue={"91"}>
                <Option value="91">+91</Option>
                {/* <Option value="87">+87</Option> */}
            </Select>
        </Form.Item>
    );

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={styles.registerCardContainer}
        >
            <Flex className={styles.registerCard} vertical gap={10} align='center' justify='center'>
                {/* <Typography.Text className={styles.registerFormLabel}></Typography.Text> */}
                <Form.Item<UserCreate>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    className={styles.registerFormField}
                >
                    <Input />
                </Form.Item>
                <Form.Item<UserCreate>
                    label="First Name"
                    name="first_name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    className={styles.registerFormField}
                >
                    <Input />
                </Form.Item>
                <Form.Item<UserCreate>
                    label="Last Name"
                    name="last_name"
                    // rules={[{ required: true, message: 'Please input your username!' }]}
                    className={styles.registerFormField}
                >
                    <Input />
                </Form.Item>
                <Form.Item<UserCreate>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    className={styles.registerFormField}
                >
                    <Input />
                </Form.Item>
                <Form.Item<UserCreate>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    className={styles.registerFormField}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<UserCreate>
                    label="Confirm Password"
                    name="confirmpassword"
                    hasFeedback
                    rules={[{ required: true, message: 'Please confirm your password!' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                    }),
                    ]}
                    className={styles.registerFormField}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<UserCreate>
                    name="ageConsent"
                    valuePropName="unchecked"
                    className={styles.registerFormAgeConsent}
                >
                    <Checkbox>I consent that I'm above the age of 18</Checkbox>
                </Form.Item>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

                {/* </Flex> */}
            </Flex>
        </Form>
    );
};

export default RegisterPage;

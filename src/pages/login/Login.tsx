import { Button, Checkbox, Flex, Form, Input, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import loginStyles from './login.module.scss'
interface LoginProps {
    onLogin: (username: string, password: string) => void;
    onGoogleLogin: () => void;
}


type FieldType = {
    username: string;
    password: string;
    remember: string;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {

    useEffect(() => {
        document.title = "LogIn"
    }, [])

    const handleLogin = (values: FieldType) => {
        // Perform email/password login
        onLogin(values.username, values.password);
    };

    const onFinish = (values: FieldType) => {
        console.log('Success:', values);
        handleLogin(values)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


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
            className={loginStyles.loginCardContainer}
        >
            <Flex className={loginStyles.loginCard} vertical gap={10} align='center' justify='center'>
                <Flex align='center'>
                    {/* <Typography.Text className={loginStyles.loginFormLabel}></Typography.Text> */}
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        className={loginStyles.loginFormField}
                    >
                        <Input />
                    </Form.Item>
                </Flex>
                <Flex>
                    {/* <Typography.Text className={loginStyles.loginFormLabel}>:</Typography.Text> */}
                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        className={loginStyles.loginFormField}
                    >
                        <Input.Password />
                    </Form.Item>
                </Flex>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <p>
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </Flex>
        </Form>
    );
};

export default Login;


//     <div>
//         <h2>Login</h2>
//         <form>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//             </div>
//             <button type="button" onClick={handleLogin}>
//                 Login
//             </button>
//             <button type="button" onClick={handleGoogleLogin}>
//                 Login with Google
//             </button>
//         </form>
//         <div>
//             <p>
//                 Don't have an account? <a href="/register">Register</a>
//             </p>
//         </div>
//     </div>

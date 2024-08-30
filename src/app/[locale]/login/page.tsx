'use client';

import React, { useEffect, useState } from 'react';
import './style.scss';
import { Button, Divider, Flex, Form, Input, Modal, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/store';
import { useRouter } from 'next/navigation';
import { NotificationTypeEnum } from '@/config/constant';
import { v4 as uuidv4 } from 'uuid';
import { createToast } from '@/store/notification/notification.reducer';
import { doSendMailForgotPasswordAction } from '@/store/auth/auth.action';
import { setTypeLogin } from '@/store/auth/auth.reducer';
import Image from 'next/image';
import Link from 'next/link';
import GoogleColorIcon from '@/icons/GoogleColorIcon';
import CheckFillIcon from '@/icons/CheckFillIcon';

const LoginPage = () => {
  const [formForgotPasswordRef] = Form.useForm();

  const router = useRouter();
  // const pathname = usePathname();
  const dispatch = useAppDispatch();
  const authSlice = useAppSelector((state) => state.authSlice);
  // const { data: session } = useSession();
  // const { typeLogin } = useAppSelector((state) => state.authSlice);

  const [sendMailSuccess, setSendMailSuccess] = useState<boolean>(false);
  const [typeAuth, setTypeAuth] = useState<string>('login');
  const [isModalAuthOpen, setIsModalAuthOpen] = useState<boolean>(false);

  const [info, setInfo] = useState<any>({
    token: {
      expiresIn: 0,
      accessToken: '',
      refreshToken: '',
    },
  });

  console.log('info: ', info);

  useEffect(() => {
    setInfo(authSlice);
  }, [authSlice]);

  // useEffect(() => {
  //   const handleLogin = async () => {
  //     if (session && typeLogin === 'google') {
  //       const socialLoginAction = loginWithGoogleAction;
  //       await dispatch(
  //         socialLoginAction({
  //           gender: 'MALE',
  //           socialToken: session?.user?.access_token as string,
  //           fullName: session?.user?.name as string,
  //           email: session?.user?.email as string,
  //         })
  //       );
  //     }
  //   };

  //   handleLogin();
  // }, [session, typeLogin]);

  useEffect(() => {
    if (Object.values(info?.token).every((value) => value !== '' && value !== 0)) {
      router.push('/');
    }
  }, [info]);

  const popupCenter = (url: string, title: string) => {
    const dualScreenLeft = window.screenLeft || window.screenX || 0;
    const dualScreenTop = window.screenTop || window.screenY || 0;

    const width = window.innerWidth || document.documentElement.clientWidth || window.screen.width;
    const height =
      window.innerHeight || document.documentElement.clientHeight || window.screen.height;

    const systemZoom = width / window.screen.availWidth;

    const left = (width - 650) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 550) / 2 / systemZoom + dualScreenTop;

    const newWindow = window.open(
      url,
      title,
      `width=${650 / systemZoom},height=${650 / systemZoom},top=${top},left=${left}`
    );

    if (newWindow) {
      newWindow.focus();
    }
  };

  const loginWithGoogle = async () => {
    dispatch(setTypeLogin('google'));
    await popupCenter('/login-with-google', 'Sample Sign In');
  };

  const [loading, setLoading] = useState<boolean>(false);

  const validatePhoneNumber = (rule: any, value: string, callback: any) => {
    // Regular expression for a Vietnamese phone number
    const phoneNumberRegex = /^(84|\+84|0)(3[2-9]|5[689]|7[06-9]|8[1-6]|9\d)\d{7}$/;

    if (!value) {
      callback(); // If the field is empty, don't show an error
    } else if (!phoneNumberRegex.test(value)) {
      callback('Invalid phone number.'); // Show error if the phone number is not valid
    } else {
      callback(); // Phone number is valid
    }
  };

  const showToast = (status: NotificationTypeEnum, message: string) => {
    const toast = {
      id: uuidv4(),
      status,
      message,
      description: '',
    };
    dispatch(createToast(toast));
  };

  // const onFinish = async (values: any) => {
  //   dispatch(setTypeLogin('normal'));
  //   setLoading(true);
  //   // const action = typeAuth === 'login' ? loginAction(values) : registerAction(values);

  //   const successMessage = typeAuth === 'register' ? 'Sign up success' : 'Sign in success';

  //   const res: any = await dispatch(action);
  //   const errorMessage =
  //     typeAuth === 'register' ? res.payload.error : res.payload.error ?? 'Sign in failed';

  //   if (res.payload.error) {
  //     showToast(NotificationTypeEnum.error, errorMessage);
  //   } else {
  //     if (res.payload.data.user?.role === RoleEnum.Admin && pathname.includes('admin')) {
  //       router.push('/admin/dashboard');
  //     } else if (res.payload.data.user?.role === RoleEnum.Manager && pathname.includes('admin')) {
  //       router.push('/admin/order');
  //     } else {
  //       router.push('/');
  //     }
  //     showToast(NotificationTypeEnum.success, successMessage);
  //   }
  //   setLoading(false);
  // };

  const onFinishForgotPassword = async (values: any) => {
    setLoading(true);
    const res: any = await dispatch(doSendMailForgotPasswordAction(values.email));
    if (res.payload?.messageCode) {
      setSendMailSuccess(true);
    } else if (res.payload.error === 'USER_NOT_FOUND') {
      showToast(NotificationTypeEnum.error, 'This email was not found!');
    } else {
      showToast(NotificationTypeEnum.error, 'An error occurred, please try again!');
    }
    setLoading(false);
  };

  return !Object.values(info?.token).every((value) => value !== '' && value !== 0) ? (
    <div className="wrapper-auth">
      <div className="container">
        <div className="content-auth">
          <div className="wrapper-auth-left">
            <div className="wrapper-auth-left-info">
              <Link href="/">
                <div className="wrapper-auth-left-logo">
                  <Image
                    width={180}
                    height={80}
                    quality={100}
                    src="/images/logo.svg"
                    alt="Let's travel"
                    sizes="100%"
                  />
                </div>
              </Link>
              <p className="wrapper-auth-left-info-title">
                Welcome {typeAuth === 'register' ? 'To' : 'Back'}👋
              </p>
              <p className="wrapper-auth-left-info-sub">
                Today is a new day. It s your day. You shape it. Sign{' '}
                {typeAuth === 'register' ? 'up' : 'in'} to start managing your projects.
              </p>

              <Form
                name="client_login"
                className="login-form"
                // onFinish={onFinish}
                layout="vertical"
              >
                <Flex vertical style={{ width: '100%' }}>
                  {typeAuth === 'register' && (
                    <>
                      <Space size="small">
                        <Form.Item
                          name="firstName"
                          label="First name"
                          rules={[{ required: true, message: 'Please enter your first name!' }]}
                        >
                          <Input placeholder="Your first name" size="large" />
                        </Form.Item>
                        <Form.Item
                          label="Last name"
                          name="lastName"
                          rules={[{ required: true, message: 'Please enter your last name!' }]}
                        >
                          <Input placeholder="Your last name" size="large" />
                        </Form.Item>
                      </Space>
                      <Form.Item
                        name="phoneNumber"
                        label="Phone number"
                        rules={[
                          { required: true, message: 'Please enter your phone number!' },
                          {
                            validator: validatePhoneNumber,
                          },
                        ]}
                      >
                        <Input type="number" placeholder="Your phone number" size="large" />
                      </Form.Item>
                    </>
                  )}
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Please enter your email!' }]}
                  >
                    <Input
                      autoComplete="off"
                      allowClear
                      placeholder="Example@email.com"
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: 'Please enter your password' }]}
                  >
                    <Input.Password
                      type="password"
                      placeholder="At least 8 characters"
                      size="large"
                    />
                  </Form.Item>
                  {typeAuth === 'login' && (
                    <div
                      className="text-forgot-password"
                      aria-hidden
                      onClick={() => {
                        setSendMailSuccess(false);
                        setIsModalAuthOpen(true);
                      }}
                    >
                      Forgot Password?
                    </div>
                  )}
                  <Flex vertical gap={12} className="wrapper-btn-auth">
                    {typeAuth === 'login' && (
                      <Button type="primary" htmlType="submit" block size="large" loading={loading}>
                        Sign in
                      </Button>
                    )}
                    {typeAuth === 'register' && (
                      <Button type="primary" htmlType="submit" size="large">
                        Create an account
                      </Button>
                    )}
                  </Flex>
                </Flex>
              </Form>
              <Divider>Or</Divider>
              <Button
                className="btn-social-google"
                block
                size="large"
                onClick={loginWithGoogle}
                icon={<GoogleColorIcon />}
              >
                Sign {typeAuth === 'register' ? 'up' : 'in'} with Google
              </Button>
              <p className="text-more">
                {typeAuth === 'register' ? 'Already' : 'Don t you'} have an account?{' '}
                <span
                  className="text-more-change"
                  aria-hidden
                  onClick={() => setTypeAuth(`${typeAuth === 'register' ? 'login' : 'register'}`)}
                >
                  Sign {typeAuth === 'register' ? 'in' : 'up'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* form quên mật khẩu */}
      <Modal
        centered
        title=""
        open={isModalAuthOpen}
        onOk={() => {
          setIsModalAuthOpen(!isModalAuthOpen);
        }}
        onCancel={() => {
          setIsModalAuthOpen(!isModalAuthOpen);
        }}
        footer={[]}
        closeIcon={false}
      >
        {isModalAuthOpen && (
          <div className="wrapper-form-forgot-password">
            <div className="wrapper-form-forgot-password-head">
              <Button
                type="link"
                icon={<ArrowLeftOutlined />}
                onClick={() => {
                  setIsModalAuthOpen(false);
                }}
              />
              <p>Forgot password?</p>
            </div>
            {!sendMailSuccess && (
              <Form
                name="form-auth-forgot-client"
                layout="vertical"
                form={formForgotPasswordRef}
                onFinish={onFinishForgotPassword}
                className="customize-form-full"
              >
                <p className="wrapper-form-forgot-password-des">
                  Please enter the email address you used to create your account and we will send
                  you instructions to reset your password.
                </p>
                <Form.Item
                  name="email"
                  label="Email address"
                  rules={[{ required: true, message: 'Please enter your email address!' }]}
                >
                  <Input
                    placeholder="Your email address"
                    size="large"
                    className="customize-input"
                  />
                </Form.Item>
                <Form.Item className="form-item-btn">
                  <Button type="primary" htmlType="submit" loading={loading} block size="large">
                    Send
                  </Button>
                </Form.Item>
              </Form>
            )}
            {sendMailSuccess && (
              <div className="wrapper-form-forgot-password-success">
                <CheckFillIcon />
                <p className="wrapper-form-forgot-password-note">
                  Thank you for your request. We have sent you an email. Please check your inbox,
                  spam, and junk folders for the email. If you did not receive the email, your
                  account may not have been registered with this email address.
                </p>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  ) : (
    <div />
  );
};

export default LoginPage;

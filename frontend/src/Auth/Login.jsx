import React from 'react';
import { Card, Flex, Typography, Form, Input, Button, Alert, Spin} from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import droplet from '../img/Droplet_Signup.png';
import useLogin from '../useLogin/useLogin';

const Login = () => {

   const {error, loading, loginUser} = useLogin();
	const handleLogin = async (values) => {
		await loginUser(values);
	};

  return (
    <StyledCard className='form-container'>
			
			<Flex className='top-section' vertical flex={1}>
				<Typography.Title level={40} strong className='top-style'>
							H2O Awareness
				</Typography.Title>
				<Typography.Title level={40} strong className='top-subtext'>
							Water Tracker
				</Typography.Title>
			</Flex>

			<Flex className='gap'>

			</Flex>

			<Flex gap='large' align='center'>

				{/*Form*/}
				<Flex className='form-section' vertical flex={1}>
					<Typography.Title  strong className='title'>
						Sign In
					</Typography.Title>
					
					<Form layout='vertical' onFinish={handleLogin} autoComplete='off'>
						<Form.Item
							label='Email'
							name='email'
							rules={[
								{
									required: true,
									message: 'Please input your email.',
								},
								{
									type: 'email',
									message: 'The input is not valid Email',
								},
							]}
						>
							<Input size='large' placeholder='Enter your email' />
						</Form.Item>

						<Form.Item
							label='Password'
							name='password'
							rules={[
								{
									required: true,
									message: 'Please input your password.',
								},
							]}
						>
							<Input.Password size='large' placeholder='Enter your password' />
						</Form.Item>

						 { error && (
                            <Alert
                              description={error} 
                              type='error' 
                              showIcon 
                              closable
                               className="alert" 
                               />
                               )}
                       

						<Form.Item>
							<Button
								type={`${loading ? '' : 'primary'}`}
								htmlType='submit'
								size='large'
								className='btn'
							>
								 {loading ? <Spin /> : 'Sign In'} 
								
							</Button>
						</Form.Item>

						<Form.Item>
							<Link to='/'>
								<Button size='large' className='btn'>
									Create an Account
								</Button>
							</Link>
						</Form.Item>
					</Form>
				</Flex>

				     
                {/*Image*/}
				<Flex className='image-section' flex={1}>
                        <img src={droplet} alt='' className='auth-image' />
                    </Flex>

				
			</Flex>
		</StyledCard>
  )
}

const StyledCard = styled(Card)`
	width: 1000px;
	margin: 0 auto;
	  
	body {
		display: flex;
		align-items: center;
		justify-content: center;
		 margin: 0; /* Remove any default margin */
	}

	.flex-container {
		display: flex;
		gap: 24px;
	}

	.form-section {
		flex: 1;
	}

	.top-section {
		 display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #f5f7fa, #c3cfe2); /* Gradient background */
		padding: 30px;
		border-radius: 12px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		margin: 10px auto;
		max-width: auto;
	}


	.top-style {
		flex: 1;
		font-size: 40px; /* Make the title prominent */
		color: #4a4a4a;  /* Dark gray for a professional look */
		margin: 0;
		text-align: center;
		font-weight: bold;
	}

	.top-subtext {
		font-size: 18px; /* Smaller size for subtitle */
		color: #6c757d;  /* Subtle gray for subtext */
		margin-top: 10px;
		text-align: center;
		font-style: italic; /* Add emphasis with italic text */
}

	.gap{
		display: flex;
		padding: 10px;
		width: auto;
		height: 20px;
	}

    .form-section {
        flex: 1;
    }


	.title,
	.slogan {
		text-align: center;
		font-size: 25px; 
	}

	.btn {
		width: 100%;
	}

	.image-section {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;

		.auth-image {
			width: 100%;
			border-radius: 8px;
            align-items: center;
		justify-content: center;
		}

		.alert {
			margin-bottom: 1.5rem;
		}
	}

	
`;

export default Login;
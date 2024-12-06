import React from 'react'
import { Card, Flex, Typography, Form, Input, Button, Alert, Spin} from 'antd'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import savewater from '../img/savingwaterImg2.png';
import useSignup from '../useSignup/useSignup';



const Register = () => {
   const { loading, error, registerUser } = useSignup();
	const handleRegister = (values) => {
		registerUser(values);
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

			<Flex className='gap'></Flex>
		
		
			<Flex gap='large' align='center'>
				{/*Form*/}
				<Flex className='form-section' vertical flex={1}>
					<Typography.Title level={3} strong className='title'>
						Create an Account
					</Typography.Title>
					
					<Form layout='vertical' onFinish={handleRegister} autoComplete='off'>
						<Form.Item
							label='Full Name'
							name='name'
							rules={[
								{
									required: true,
									message: 'Please input your full name.',
								},
							]}
						>
							<Input size='large' placeholder='Enter your full name' />
						</Form.Item>

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

						<Form.Item
							label='Confirm Password'
							name='passwordConfirm'
							rules={[
								{
									required: true,
									message: 'Please input your password.',
								},
							]}
						>
							<Input.Password size='large' placeholder='Re-enter your password' />
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
								 {loading ? <Spin /> : 'Create Account'} 
								
							</Button>
						</Form.Item>

						<Form.Item>
							<Link to='/login'>
								<Button size='large' className='btn'>
									Sign In
								</Button>
							</Link>
						</Form.Item>
					</Form>
				</Flex>
					
						
					
				{/*Image*/}
				<Flex className='image-section' flex={1}>
					<img src={savewater} alt='' className='auth-image' />
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

	.center-container {
		display: flex; /* Use Flexbox */
		flex-direction: row; /* Arrange content in a horizontal row */
		justify-content: space-between; /* Evenly distribute space between the items */
		align-items: center; /* Vertically center the items */
		padding: 10px; /* Add some padding for spacing */
		width: 80%; /* Adjust width as needed */
		margin: 0 auto; /* Center the container itself */
	
		background-color: #f9f9f9; /* Optional: Light background for distinction */
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Optional: Add a slight shadow */
	}

    .flex-container {
        display: flex;
        gap: 24px;
       
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
			height: 100%;
            border-radius: 8px;
			align-items: center;
			justify-content: center;
        }

        .alert {
            margin-bottom: 1.5rem;
        }
    }
`;

export default Register

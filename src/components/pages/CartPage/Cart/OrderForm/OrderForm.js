import 'antd/dist/antd.min.css';
import {
  StyledInput,
  StyledButton,
  StyledForm,
  FormContainer,
} from './OrderForm.styled';

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (data) => {
  console.log(data);
};

const OrderForm = () => {
  return (
    <FormContainer>
      <StyledForm
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <StyledForm.Item
          name={['user', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <StyledInput />
        </StyledForm.Item>
        <StyledForm.Item
          name={['user', 'lastName']}
          label="Last name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <StyledInput />
        </StyledForm.Item>
        <StyledForm.Item
          name={['user', 'zipCode']}
          label="Zip code"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <StyledInput
            pattern="[0-9]{2}-[0-9]{3}"
            title="Please add a valid postal code."
          />
        </StyledForm.Item>
        <StyledForm.Item
          name={['user', 'city']}
          label="City"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <StyledInput />
        </StyledForm.Item>
        <StyledForm.Item>
          <StyledButton type="primary" htmlType="submit">
            Go to payment
          </StyledButton>
        </StyledForm.Item>
      </StyledForm>
    </FormContainer>
  );
};

export default OrderForm;
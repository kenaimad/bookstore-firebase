import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 30vw;
  min-width: 270px;
  margin: 1rem;
  padding: 0rem;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  label {
    text-align: left;
    width: 100px;
  }
  .ant-form-item-control-input-content {
    text-align: center;
  }
  .ant-input:focus {
    border: 1px solid #b94517;
    box-shadow: none;
  }
  .ant-input:hover {
    &:hover {
      border: 1px solid #b94517;
    }
  }
`;

export const StyledItem = styled(Form.Item)``;

export const StyledInput = styled(Input)``;

export const StyledButton = styled(Button)`
  width: 25%;
  min-width: 120px;
  background-color: #b94517;
  border: none;
  &:hover {
    background-color: #fc766aff;
  }
`;
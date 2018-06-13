import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
    width: 100;
    max-width: 800px;
    margin: 0 auto;
`;

const StyledForm = styled.form`
   padding: 40px;
   background: #f9f9f9;
`;

const FormDivide = styled.div`
    margin-bottom: 20px;
`;

const StyledLabel = styled.label`
    display: block;
    font-size: 20px;
    margin-bottom: 5px;
`;

const StyledInput = styled.input`
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    border: none;

    &::-webkit-input-placeholder {
        color: #9e9e9e;
    }
`;

const StyledTextarea = styled.textarea`
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    border: none;

     &::-webkit-input-placeholder {
        color: #9e9e9e;
    }
`;

const StyledButton = styled.button`
    padding: 10px 30px;
    border: none;
    text-transform: uppercase;
    font-size: 20px;
    background: #45a2d4;
    color: white;
    cursor: pointer;
`;

export default () => (
    <MainWrapper>
        <h2>Forms with Netlify</h2>
        <div>
            <StyledForm name="contact" data-netlify="true" netlify-honeypot="bot-field" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                
                <FormDivide>
                    <StyledLabel htmlFor="name">Name</StyledLabel>
                    <StyledInput type="text" name="name" id="name" placeholder="enter your name here" />
                </FormDivide>
               
                <FormDivide>
                    <StyledLabel htmlFor="email">Email</StyledLabel>
                    <StyledInput type="email" name="email" id="email" placeholder="enter your email here" />
                </FormDivide>

                <FormDivide>
                    <StyledLabel htmlFor="message">Message</StyledLabel>
                    <StyledTextarea name="message" id="message" rows="5" placeholder="enter your message here" />
                </FormDivide>

                <div data-netlify-recaptcha></div>
                
                <FormDivide>
                    <StyledButton type="submit">Send</StyledButton>
                </FormDivide>
            
           </StyledForm>
        </div>
    </MainWrapper>
);
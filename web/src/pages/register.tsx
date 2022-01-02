import React from 'react';
import {Form, Formik} from 'formik';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/core';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
    return (
        <Wrapper variant="small">
        <Formik 
            initialValues={{username: "", password: "" }}
            onSubmit={(values) => {
                console.log(values)
            }}>
            {({values, handleChange}) =>(
                <Form>
                   <InputField 
                    name='username'
                    placeholder="username"
                    label="Username"
                    />
                    <Box mt={4}>
                     <InputField 
                        name="password"
                        placeholder="password"
                        label="Password"
                        type="password"
                      />
                    </Box>
                    <Button type='submit' variantColor='teal'>register</Button>
                </Form>
            ) }
        </Formik>
        </Wrapper>
    )
}
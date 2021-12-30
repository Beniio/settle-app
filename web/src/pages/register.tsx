import React from 'react';
import {Form, Formik} from 'formik';
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/core';
import { Wrapper } from '../components/Wrapper';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
    return (
        <Wrapper>
          <Formik 
        initialValues={{username: "", password: "" }}
        onSubmit={(values) => {
            console.log(values)
        }}>
          {({values, handleChange}) =>(
              <Form>
                  <FormControl>
                      <FormLabel htmlFor="username">First name</FormLabel>
                      <Input 
                        value={values.username} 
                        onChange={handleChange}
                        id="name"
                        placeholder="name" />
                      {/* <FormErrorMessage>{form.error.name}</FormErrorMessage> */}
                  </FormControl>
              </Form>
          ) }
      </Formik>
        </Wrapper>
    )
}
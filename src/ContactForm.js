import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <form className="max-w-md mx-auto" autoComplete="off">
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <Field type="text" id="name" name="name" className="form-input pl-2 outline-none border-none"  />
            <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
          </div>
        	<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <Field type="email" id="email" name="email" className="form-input pl-2 outline-none border-none" />
            <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <label htmlFor="message" className="block font-medium mb-1">Message</label>
            <Field as="textarea" id="message" name="message" className="form-textarea pl-2 outline-none border-none" rows="5" />
            <ErrorMessage name="message" component="div" className="text-red-500 mt-1" />
          </div>
          <div className="text-center">
            <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Submit</button>
          </div>
        </form>
      </Formik>
    </div>
  );
};

export default ContactForm;

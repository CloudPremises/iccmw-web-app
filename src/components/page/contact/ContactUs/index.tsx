'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      mobile: Yup.string().required('Mobile number is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <div className='max-w-screen-xl m-auto px-4 py-8'>
      <div className='flex flex-col gap-6 items-center'>
        {/* Heading */}
        <h1 className='text-4xl font-bold capitalize'>send us a message</h1>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className='w-full max-w-md flex flex-col gap-4'>
          <div className='flex gap-4'>
            <div>
              <label htmlFor='firstName' className='block text-sm font-medium'>First Name</label>
              <input
                id='firstName'
                name='firstName'
                type='text'
                className='w-full border border-gray-300 p-2 rounded'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className='text-red-500 text-sm'>{formik.errors.firstName}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor='lastName' className='block text-sm font-medium'>Last Name</label>
              <input
                id='lastName'
                name='lastName'
                type='text'
                className='w-full border border-gray-300 p-2 rounded'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className='text-red-500 text-sm'>{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium'>Email</label>
            <input
              id='email'
              name='email'
              type='email'
              className='w-full border border-gray-300 p-2 rounded'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='text-red-500 text-sm'>{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor='mobile' className='block text-sm font-medium'>Mobile Number</label>
            <input
              id='mobile'
              name='mobile'
              type='text'
              className='w-full border border-gray-300 p-2 rounded'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile}
            />
            {formik.touched.mobile && formik.errors.mobile ? (
              <div className='text-red-500 text-sm'>{formik.errors.mobile}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor='subject' className='block text-sm font-medium'>Subject</label>
            <input
              id='subject'
              name='subject'
              type='text'
              className='w-full border border-gray-300 p-2 rounded'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div className='text-red-500 text-sm'>{formik.errors.subject}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor='message' className='block text-sm font-medium'>Message</label>
            <textarea
              id='message'
              name='message'
              className='w-full border border-gray-300 p-2 rounded'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className='text-red-500 text-sm'>{formik.errors.message}</div>
            ) : null}
          </div>

          <button
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
            Submit
          </button>
        </form>
      </div>

    </div>
  );
};

export default ContactUs;

// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

 
const eventValidation = Yup.object().shape({
    title: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .required('Required'),
    description: Yup.string()
     .min(2, 'Too Short!')
     .max(200, 'Too Long!')
     .required('Required'),
    location: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .required('Required'),
    date: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .required('Required'),
    imageUrl: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .required('Required')
 });


const CreateEvent = () => (

  <div>
    <h1>Create Event</h1>
    <Formik
      initialValues={{ title: '', description: '', location: '', date: '', imageUrl: '' }}
      validationSchema = {eventValidation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >

      {({ isSubmitting }) => (

        <Form>
          <Field type="text" name="title" placeholder="event-title" />
          <ErrorMessage name="title" component="div" />
          <Field type="text" name="description" placeholder="event-description" />
          <ErrorMessage name="description" component="div" />
          <Field type="text" name="location" placeholder="event-location" />
          <ErrorMessage name="location" component="div" />
          <Field type="text" name="date" placeholder="dd-mm-yyyy" />
          <ErrorMessage name="date" component="div" />
          <Field type="text" name="imageUrl" placeholder="event-image" />
          <ErrorMessage name="imageUrl" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Create Event
          </button>
          
        </Form>
      )}

    </Formik>
  </div>

);

export default CreateEvent;

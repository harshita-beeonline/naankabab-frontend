"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../../styles/FeedbackForm.module.scss";
import Image from "next/image";

const FeedbackForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    store: "",
    experience: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    store: Yup.string().required("Please enter store name"),
    experience: Yup.string().required("Please tell us about your experience"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    alert("Feedback submitted successfully!");
    resetForm();
  };

  return (
    <div className={styles.feedbackFormContainer}>
      <div className={styles["feedback-form-content"]}>
        <h2>HOW ARE WE DOING?</h2>
        <p>SHARE YOUR EXPERIENCE AT NAAN KABOB: FEEDBACK & COMMENTS WELCOME!</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.feedbackForm}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <Field name="firstName" placeholder="FIRST NAME*" />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className={styles.error}
                />
              </div>
              <div className={styles.inputGroup}>
                <Field name="lastName" placeholder="LAST NAME*" />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className={styles.error}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <Field name="email" placeholder="EMAIL*" />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={styles.error}
                />
              </div>
              <div className={styles.inputGroup}>
                <Field name="phone" placeholder="PHONE NUMBER*" />
                <ErrorMessage
                  name="phone"
                  component="span"
                  className={styles.error}
                />
              </div>
            </div>

            <div className={styles.inputGroupFull}>
              <Field name="store" placeholder="WHICH STORE DID YOU VISIT?*" />
              <ErrorMessage
                name="store"
                component="span"
                className={styles.error}
              />
            </div>

            <div className={styles.inputGroupFull}>
              <Field
                as="textarea"
                name="experience"
                placeholder="tell us about your experience*"
                rows="4"
                className={styles.textarea}
              />
              <ErrorMessage
                name="experience"
                component="span"
                className={styles.error}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              SUBMIT
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FeedbackForm;

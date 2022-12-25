const getValidationFieldProps = (formik, name) => {
  const error = formik.errors?.[name];
  const isTouched = formik.touched?.[name];
  return {
    helpertext: error && isTouched ? error : null,
    error: error && isTouched,
  };
};

export default getValidationFieldProps;

import * as yup from "yup";
//
const addNewAdvertiseSchema = () =>
  yup.object().shape({
    Title: yup.string().required("عنوان را وارد کنید"),
    Price: yup.string().required("قیمت را وارد کنید"),
    Location: yup.string().required("آدرس را وارد کنید"),
    Description: yup.string().required("توضیحات را وارد کنید"),
  });
export default addNewAdvertiseSchema;

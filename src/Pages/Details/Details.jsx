import { Formik } from "formik";
import "./details.scss";
import { Button, DatePicker, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
const Details = () => {
  let navigate = useNavigate();
  const options = [
    { lable: "22AAAAA0000A1Z5", value: "22AAAAA0000A1Z5" },
    { lable: "22AAAAA0SSSA1Z2", value: "22AAAAA0SSSA1Z2" },
    { lable: "EDASAWEDG23A1Z5", value: "EDASAWEDG23A1Z5" },
    { lable: "22AAAAA0WEF345F", value: "22AAAAA0WEF345F" },
  ];
  return (
    <div>
      <Formik
        initialValues={{ nameBussinessEntity: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          // errors,
          // touched,
          handleChange,
          handleBlur,
          handleSubmit,
          // isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="page1-Container">
            <div className="fields">
              <label className="label--page1">
                Name of the Bussiness Entity
              </label>
              <div className="fieldError">
                <Input
                  type="text"
                  name="nameBussinessEntity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nameBussinessEntity}
                />
                {/* {errors.email && touched.email && errors.email} */}
              </div>
            </div>
            <div className="fields">
              <label className="label--page1">GST in Linked To PAN</label>
              <div className="fieldError">
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please select"
                  defaultValue={["22AAAAA0000A1Z5"]}
                  onChange={handleChange}
                  options={options}
                />
                {/* {errors.email && touched.email && errors.email} */}
              </div>
            </div>
            <div className="fields">
              <label className="label--page1">
                <Button type="primary">Get GST Details</Button>
              </label>
              <div className="fieldError"></div>
            </div>
            <div className="fields">
              <label className="label--page1">Address</label>
              <div className="fieldError">
                <div className="addressLine12">
                  <div className="addressline1">
                    <Input
                      type="text"
                      name="addressline1"
                      placeholder="Address Line 1"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.addressline1}
                    />
                    {/* {errors.email && touched.email && errors.email} */}
                  </div>{" "}
                  <div className="addressline2">
                    <Input
                      type="text"
                      name="addressline2"
                      placeholder="Address Line 2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.addressline2}
                    />
                    {/* {errors.email && touched.email && errors.email} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="fields">
              <label className="label--page1"></label>
              <div className="fieldError">
                <div className="addressLine12">
                  <div className="addressline3">
                    <Input
                      type="text"
                      name="addressline3"
                      placeholder="Address Line 3"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.addressline3}
                    />
                    {/* {errors.email && touched.email && errors.email} */}
                  </div>
                  <div className="cityName">
                    <Input
                      type="text"
                      name="city"
                      placeholder="City"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                    />
                    {/* {errors.email && touched.email && errors.email} */}
                  </div>
                  <div className="stateName">
                    <Input
                      type="text"
                      name="state"
                      placeholder="State"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.state}
                    />
                    {/* {errors.email && touched.email && errors.email} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="fields">
              <label className="label--page1"></label>
              <div className="fieldError">
                <div className="addressLine12">
                  <div className="addressline1">
                    <Input
                      type="text"
                      name="addressline1"
                      placeholder="Enter District"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.district}
                    />
                    {/* {errors.email && touched.email && errors.email} */}
                  </div>{" "}
                  <div className="addressline2">
                    <Input
                      type="text"
                      name="pincode"
                      placeholder="Enter Pincode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.pincode}
                    />
                    {/* {errors.email && touched.email && errors.email} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="fields">
              <label className="label--page1">Email</label>
              <div className="fieldError">
                <Input
                  type="email"
                  name="emailId"
                  placeholder="Enter Email Id"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {/* {errors.email && touched.email && errors.email} */}
              </div>
            </div>
            <div className="fields">
              <label className="label--page1">Mobile Number</label>
              <div className="fieldError">
                <Input
                  type="number"
                  name="mobileNumber"
                  placeholder="Enter Mobile Number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobileNumber}
                />
                {/* {errors.email && touched.email && errors.email} */}
              </div>
            </div>
            <div className="fields">
              <label className="label--page1">Constitution</label>
              <div className="fieldError">
                <Input
                  type="email"
                  name="emailId"
                  placeholder="Enter Email Id"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {/* {errors.email && touched.email && errors.email} */}
              </div>
            </div>
            <div className="fieldsDate">
              <label className="label--page1">Date of Incorporation</label>
              <div className="fieldError">
                <DatePicker
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                />
                {/* {errors.email && touched.email && errors.email} */}
              </div>
            </div>
            <div className="fields">
              <label className="label--page1">Vintage</label>
              <div className="fieldError">
                <Input
                  type="email"
                  name="vintage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.vintage}
                />
                {/* {errors.email && touched.email && errors.email} */}
              </div>
            </div>
            <div className="fields--half">
              <div className="flexRow">
                <label className="labelHalf--page1">Udhyam Check</label>
                <div className="field-halfError">
                  <Button type="primary" className="udhyamCheckButton" block>
                    Check
                  </Button>
                  {/* {errors.email && touched.email && errors.email} */}
                </div>
              </div>
              <div className="flexRow">
                <label className="labelHalf--page1">Udhyam Number</label>
                <div className="field-halfError">
                  <Input
                    type="email"
                    name="vintage"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.vintage}
                  />
                  {/* {errors.email && touched.email && errors.email} */}
                </div>
              </div>
            </div>
            <div className="pagination">
              <Button
                type="primary"
                onClick={() => {
                  navigate("/facilityDetails");
                }}
              >
                Next Page
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Details;

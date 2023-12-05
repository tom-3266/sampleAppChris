import { Button, Divider, Input } from "antd";
import "./bussinessCheck.scss";
import { useNavigate } from "react-router-dom";

const BussinessCheck = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="bussinessCheck--container">
        <div className="title">
          <label>GST Transaction Details</label>
        </div>
        <div className="mobileNo">
          <label className="labelMobNo">
            Mobile Number Registered With GST
          </label>
          <Input type="number"></Input>
        </div>
        <div className="emailId">
          <label className="labelMobNo">Email ID Registered With GST</label>
          <Input type="email"></Input>
        </div>
        <div className="validationButton">
          <Button type="primary">GST Validation</Button>
        </div>
        <Divider />
        <div className="title">
          <label>GST Transaction Report Analysis</label>
        </div>
        <Divider />
        <div className="analysis">
          <label className="labelMobNo">12 Month GST Turnover</label>
          <div className="input">
            <Input type="text"></Input>
          </div>
        </div>
        <div className="analysis">
          <label className="labelMobNo">Whether Positive Trend</label>
          <div className="input">
            <Input type="text"></Input>
          </div>
        </div>
        <div className="analysis">
          <label className="labelMobNo">Maximum Eligible Amount</label>
          <div className="input">
            <Input type="number"></Input>
          </div>
        </div>
        <div className="analysis">
          <label className="labelMobNo">Requested Amount</label>
          <div className="input">
            <Input type="number"></Input>
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
          Previous Page
        </Button>
      </div>
    </>
  );
};

export default BussinessCheck;

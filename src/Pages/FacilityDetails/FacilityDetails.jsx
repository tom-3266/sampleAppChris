import { Button, Checkbox, Divider, Input, Select, Switch } from "antd";
import "./facilityDetails.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckboxGroup = Checkbox.Group;
const plainOptions = ["CSDL", "OD", "CCBD", "Others"];

const FacilityDetails = () => {
  let navigate = useNavigate();
  const [active, setActive] = useState(false);

  const options = [
    { lable: "SBI", value: "SBI" },
    { lable: "AXIS BANK", value: "AXIS BANK" },
    { lable: "ICICI BANK", value: "ICICI BANK" },
    { lable: "HDFC", value: "HDFC" },
  ];

  return (
    <>
      <div className="facilityDetails--container">
        <div className="loanField">
          <div className="loan">
            <label className="labelLoan">Loan Amount</label>
            <Input
              type="text"
              name="loanAmouont"
              placeholder="Enter Loan Amount"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="takeover">
            <label className="labelLoan">Whether Takeover</label>
            <div className="takeOverBox">
              <Switch
                checkedChildren={"Yes"}
                unCheckedChildren={"No"}
                onClick={() => setActive(!active)}
                checked={active}
              />
            </div>
          </div>
        </div>
        <Divider />
        <div className="bankNameField">
          <div className="bankName">
            <label className="labelBank">Name of Bank</label>
            <Select
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              // defaultValue={["SBI"]}
              // onChange={handleChange}
              options={options}
              disabled={!active}
            />
          </div>
          <div className="amount">
            <label className="labelLoan">Amount</label>
            <div className="takeOverBox">
              <Input
                type="text"
                name="amouont"
                placeholder="Enter Amount"
                onChange={(e) => console.log(e.target.value)}
                disabled={!active}
              />
            </div>
          </div>
        </div>
        <div className="facilityType">
          <label className="labelType">Type of Facility</label>
          <div className="checkBoxType">
            <CheckboxGroup
              disabled={!active}
              options={plainOptions}
              // value={checkedList}
              // onChange={onChange}
            />
          </div>
        </div>
      </div>
      <div className="facilityDetails--check">
        <div className="checkButton">
          <label className="labelCheck">Bureau Check</label>
          <div className="bereauinput">
            <Button type="primary" block>
              Check
            </Button>
          </div>
        </div>
        <div className="check">
          <label className="labelCheck">CMR</label>
          <div className="bereauinput">
            <Input
              type="text"
              name="CMR"
              placeholder="CMR"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="pagination">
        <Button
          type="primary"
          onClick={() => {
            navigate("/details");
          }}
        >
          Previous Page
        </Button>
        <Button
          type="primary"
          onClick={() => {
            navigate("/bussinessCheck");
          }}
        >
          Next Page
        </Button>
      </div>
    </>
  );
};

export default FacilityDetails;

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import initilization from "../../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";


const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const OutgoingCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
        setError({});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
        
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            product: _entity?.product,estate: _entity?.estate,doNumber: _entity?.doNumber,trailorNumber: _entity?.trailorNumber,remark: _entity?.remark,seal: _entity?.seal,contract: _entity?.contract,vehicleNumber: _entity?.vehicleNumber,supplier: _entity?.supplier,driver: _entity?.driver,transporter: _entity?.transporter,firstWeight: _entity?.firstWeight,secondWeight: _entity?.secondWeight,adjustment: _entity?.adjustment,adjustedWeight: _entity?.adjustedWeight,netWeight: _entity?.netWeight,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("outgoing").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Outgoing created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Outgoing" });
        }
        setLoading(false);
    };

    

    

    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Create Outgoing" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="outgoing-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="product">Product:</label>
                <InputText id="product" className="w-full mb-3 p-inputtext-sm" value={_entity?.product} onChange={(e) => setValByKey("product", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["product"]) ? (
              <p className="m-0" key="error-product">
                {error["product"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="estate">Estate:</label>
                <InputText id="estate" className="w-full mb-3 p-inputtext-sm" value={_entity?.estate} onChange={(e) => setValByKey("estate", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["estate"]) ? (
              <p className="m-0" key="error-estate">
                {error["estate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="doNumber">DO Number:</label>
                <InputText id="doNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.doNumber} onChange={(e) => setValByKey("doNumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["doNumber"]) ? (
              <p className="m-0" key="error-doNumber">
                {error["doNumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="trailorNumber">Trailor Number:</label>
                <InputText id="trailorNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.trailorNumber} onChange={(e) => setValByKey("trailorNumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["trailorNumber"]) ? (
              <p className="m-0" key="error-trailorNumber">
                {error["trailorNumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="remark">Remark:</label>
                <InputText id="remark" className="w-full mb-3 p-inputtext-sm" value={_entity?.remark} onChange={(e) => setValByKey("remark", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["remark"]) ? (
              <p className="m-0" key="error-remark">
                {error["remark"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="seal">Seal:</label>
                <InputText id="seal" className="w-full mb-3 p-inputtext-sm" value={_entity?.seal} onChange={(e) => setValByKey("seal", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["seal"]) ? (
              <p className="m-0" key="error-seal">
                {error["seal"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="contract">Contract:</label>
                <InputText id="contract" className="w-full mb-3 p-inputtext-sm" value={_entity?.contract} onChange={(e) => setValByKey("contract", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["contract"]) ? (
              <p className="m-0" key="error-contract">
                {error["contract"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="vehicleNumber">Vehicle Number:</label>
                <InputText id="vehicleNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.vehicleNumber} onChange={(e) => setValByKey("vehicleNumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["vehicleNumber"]) ? (
              <p className="m-0" key="error-vehicleNumber">
                {error["vehicleNumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="supplier">Supplier:</label>
                <InputText id="supplier" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplier} onChange={(e) => setValByKey("supplier", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplier"]) ? (
              <p className="m-0" key="error-supplier">
                {error["supplier"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="driver">Driver:</label>
                <InputText id="driver" className="w-full mb-3 p-inputtext-sm" value={_entity?.driver} onChange={(e) => setValByKey("driver", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["driver"]) ? (
              <p className="m-0" key="error-driver">
                {error["driver"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="transporter">Transporter:</label>
                <InputText id="transporter" className="w-full mb-3 p-inputtext-sm" value={_entity?.transporter} onChange={(e) => setValByKey("transporter", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["transporter"]) ? (
              <p className="m-0" key="error-transporter">
                {error["transporter"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="firstWeight">First Weight:</label>
                <InputNumber id="firstWeight" className="w-full mb-3 p-inputtext-sm" value={_entity?.firstWeight} onChange={(e) => setValByKey("firstWeight", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["firstWeight"]) ? (
              <p className="m-0" key="error-firstWeight">
                {error["firstWeight"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="secondWeight">Second Weight:</label>
                <InputNumber id="secondWeight" className="w-full mb-3 p-inputtext-sm" value={_entity?.secondWeight} onChange={(e) => setValByKey("secondWeight", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["secondWeight"]) ? (
              <p className="m-0" key="error-secondWeight">
                {error["secondWeight"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="adjustment">Adjustment:</label>
                <InputText id="adjustment" className="w-full mb-3 p-inputtext-sm" value={_entity?.adjustment} onChange={(e) => setValByKey("adjustment", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["adjustment"]) ? (
              <p className="m-0" key="error-adjustment">
                {error["adjustment"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="adjustedWeight">Adjusted Weight:</label>
                <InputText id="adjustedWeight" className="w-full mb-3 p-inputtext-sm" value={_entity?.adjustedWeight} onChange={(e) => setValByKey("adjustedWeight", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["adjustedWeight"]) ? (
              <p className="m-0" key="error-adjustedWeight">
                {error["adjustedWeight"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="netWeight">Net Weight:</label>
                <InputNumber id="netWeight" className="w-full mb-3 p-inputtext-sm" value={_entity?.netWeight} onChange={(e) => setValByKey("netWeight", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["netWeight"]) ? (
              <p className="m-0" key="error-netWeight">
                {error["netWeight"]}
              </p>
            ) : null}
          </small>
            </div>
            <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(OutgoingCreateDialogComponent);

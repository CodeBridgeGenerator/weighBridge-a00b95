/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';


const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const VehiclesEditDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            vehicleNumber: _entity?.vehicleNumber,
vehicleDescription: _entity?.vehicleDescription,
vehicleRegistrationNumber: _entity?.vehicleRegistrationNumber,
transporter: _entity?.transporter,
        };

        setLoading(true);
        try {
            
        const result = await client.service("vehicles").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info vehicles updated successfully" });
        props.onEditResult(result);
        
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
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
        <Dialog header="Edit Vehicles" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="vehicles-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="vehicleNumber">Vehicle Number:</label>
                <InputText id="vehicleNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.vehicleNumber} onChange={(e) => setValByKey("vehicleNumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["vehicleNumber"]) && (
              <p className="m-0" key="error-vehicleNumber">
                {error["vehicleNumber"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="vehicleDescription">Vehicle Description:</label>
                <InputText id="vehicleDescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.vehicleDescription} onChange={(e) => setValByKey("vehicleDescription", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["vehicleDescription"]) && (
              <p className="m-0" key="error-vehicleDescription">
                {error["vehicleDescription"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="vehicleRegistrationNumber">Vehicle Registration Number:</label>
                <InputText id="vehicleRegistrationNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.vehicleRegistrationNumber} onChange={(e) => setValByKey("vehicleRegistrationNumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["vehicleRegistrationNumber"]) && (
              <p className="m-0" key="error-vehicleRegistrationNumber">
                {error["vehicleRegistrationNumber"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="transporter">Transporter:</label>
                <InputText id="transporter" className="w-full mb-3 p-inputtext-sm" value={_entity?.transporter} onChange={(e) => setValByKey("transporter", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["transporter"]) && (
              <p className="m-0" key="error-transporter">
                {error["transporter"]}
              </p>
            )}
          </small>
            </div>
                <div className="col-12">&nbsp;</div>
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

export default connect(mapState, mapDispatch)(VehiclesEditDialogComponent);

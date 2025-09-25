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

const DriversEditDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            driverId: _entity?.driverId,
driverName: _entity?.driverName,
icNumber: _entity?.icNumber,
licenseNumber: _entity?.licenseNumber,
        };

        setLoading(true);
        try {
            
        const result = await client.service("drivers").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info drivers updated successfully" });
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
        <Dialog header="Edit Drivers" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="drivers-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="driverId">Driver ID:</label>
                <InputText id="driverId" className="w-full mb-3 p-inputtext-sm" value={_entity?.driverId} onChange={(e) => setValByKey("driverId", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["driverId"]) && (
              <p className="m-0" key="error-driverId">
                {error["driverId"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="driverName">Driver Name:</label>
                <InputText id="driverName" className="w-full mb-3 p-inputtext-sm" value={_entity?.driverName} onChange={(e) => setValByKey("driverName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["driverName"]) && (
              <p className="m-0" key="error-driverName">
                {error["driverName"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="icNumber">IC Number:</label>
                <InputText id="icNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.icNumber} onChange={(e) => setValByKey("icNumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["icNumber"]) && (
              <p className="m-0" key="error-icNumber">
                {error["icNumber"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="licenseNumber">License Number:</label>
                <InputText id="licenseNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.licenseNumber} onChange={(e) => setValByKey("licenseNumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["licenseNumber"]) && (
              <p className="m-0" key="error-licenseNumber">
                {error["licenseNumber"]}
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

export default connect(mapState, mapDispatch)(DriversEditDialogComponent);

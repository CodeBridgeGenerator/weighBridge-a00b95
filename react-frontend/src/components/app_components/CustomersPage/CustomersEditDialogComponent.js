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

const CustomersEditDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            customerCode: _entity?.customerCode,
customerName: _entity?.customerName,
address1: _entity?.address1,
address2: _entity?.address2,
address3: _entity?.address3,
npwpNumber: _entity?.npwpNumber,
telephone: _entity?.telephone,
fax: _entity?.fax,
estate: _entity?.estate,
        };

        setLoading(true);
        try {
            
        const result = await client.service("customers").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info customers updated successfully" });
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
        <Dialog header="Edit Customers" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="customers-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="customerCode">Customer Code:</label>
                <InputText id="customerCode" className="w-full mb-3 p-inputtext-sm" value={_entity?.customerCode} onChange={(e) => setValByKey("customerCode", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["customerCode"]) && (
              <p className="m-0" key="error-customerCode">
                {error["customerCode"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="customerName">Customer Name:</label>
                <InputText id="customerName" className="w-full mb-3 p-inputtext-sm" value={_entity?.customerName} onChange={(e) => setValByKey("customerName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["customerName"]) && (
              <p className="m-0" key="error-customerName">
                {error["customerName"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="address1">Address 1:</label>
                <InputText id="address1" className="w-full mb-3 p-inputtext-sm" value={_entity?.address1} onChange={(e) => setValByKey("address1", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["address1"]) && (
              <p className="m-0" key="error-address1">
                {error["address1"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="address2">Address 2:</label>
                <InputText id="address2" className="w-full mb-3 p-inputtext-sm" value={_entity?.address2} onChange={(e) => setValByKey("address2", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["address2"]) && (
              <p className="m-0" key="error-address2">
                {error["address2"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="address3">Address 3:</label>
                <InputText id="address3" className="w-full mb-3 p-inputtext-sm" value={_entity?.address3} onChange={(e) => setValByKey("address3", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["address3"]) && (
              <p className="m-0" key="error-address3">
                {error["address3"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="npwpNumber">NPWP Number:</label>
                <InputText id="npwpNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.npwpNumber} onChange={(e) => setValByKey("npwpNumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["npwpNumber"]) && (
              <p className="m-0" key="error-npwpNumber">
                {error["npwpNumber"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="telephone">Telephone:</label>
                <InputText id="telephone" className="w-full mb-3 p-inputtext-sm" value={_entity?.telephone} onChange={(e) => setValByKey("telephone", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["telephone"]) && (
              <p className="m-0" key="error-telephone">
                {error["telephone"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="fax">Fax:</label>
                <InputText id="fax" className="w-full mb-3 p-inputtext-sm" value={_entity?.fax} onChange={(e) => setValByKey("fax", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["fax"]) && (
              <p className="m-0" key="error-fax">
                {error["fax"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="estate">Estate:</label>
                <InputText id="estate" className="w-full mb-3 p-inputtext-sm" value={_entity?.estate} onChange={(e) => setValByKey("estate", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["estate"]) && (
              <p className="m-0" key="error-estate">
                {error["estate"]}
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

export default connect(mapState, mapDispatch)(CustomersEditDialogComponent);

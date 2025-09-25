/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';


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

const CropDeductionsEditDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            january: _entity?.january,
february: _entity?.february,
march: _entity?.march,
april: _entity?.april,
may: _entity?.may,
june: _entity?.june,
july: _entity?.july,
august: _entity?.august,
september: _entity?.september,
october: _entity?.october,
november: _entity?.november,
december: _entity?.december,
        };

        setLoading(true);
        try {
            
        const result = await client.service("cropDeductions").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info cropDeductions updated successfully" });
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
        <Dialog header="Edit Crop Deductions" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="cropDeductions-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="january">January:</label>
                <InputNumber id="january" className="w-full mb-3 p-inputtext-sm" value={_entity?.january} onChange={(e) => setValByKey("january", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["january"]) && (
              <p className="m-0" key="error-january">
                {error["january"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="february">February:</label>
                <InputNumber id="february" className="w-full mb-3 p-inputtext-sm" value={_entity?.february} onChange={(e) => setValByKey("february", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["february"]) && (
              <p className="m-0" key="error-february">
                {error["february"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="march">March:</label>
                <InputNumber id="march" className="w-full mb-3 p-inputtext-sm" value={_entity?.march} onChange={(e) => setValByKey("march", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["march"]) && (
              <p className="m-0" key="error-march">
                {error["march"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="april">April:</label>
                <InputNumber id="april" className="w-full mb-3 p-inputtext-sm" value={_entity?.april} onChange={(e) => setValByKey("april", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["april"]) && (
              <p className="m-0" key="error-april">
                {error["april"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="may">May:</label>
                <InputNumber id="may" className="w-full mb-3 p-inputtext-sm" value={_entity?.may} onChange={(e) => setValByKey("may", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["may"]) && (
              <p className="m-0" key="error-may">
                {error["may"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="june">June:</label>
                <InputNumber id="june" className="w-full mb-3 p-inputtext-sm" value={_entity?.june} onChange={(e) => setValByKey("june", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["june"]) && (
              <p className="m-0" key="error-june">
                {error["june"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="july">July:</label>
                <InputNumber id="july" className="w-full mb-3 p-inputtext-sm" value={_entity?.july} onChange={(e) => setValByKey("july", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["july"]) && (
              <p className="m-0" key="error-july">
                {error["july"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="august">August:</label>
                <InputNumber id="august" className="w-full mb-3 p-inputtext-sm" value={_entity?.august} onChange={(e) => setValByKey("august", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["august"]) && (
              <p className="m-0" key="error-august">
                {error["august"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="september">September:</label>
                <InputText id="september" className="w-full mb-3 p-inputtext-sm" value={_entity?.september} onChange={(e) => setValByKey("september", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["september"]) && (
              <p className="m-0" key="error-september">
                {error["september"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="october">October:</label>
                <InputText id="october" className="w-full mb-3 p-inputtext-sm" value={_entity?.october} onChange={(e) => setValByKey("october", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["october"]) && (
              <p className="m-0" key="error-october">
                {error["october"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="november">November:</label>
                <InputText id="november" className="w-full mb-3 p-inputtext-sm" value={_entity?.november} onChange={(e) => setValByKey("november", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["november"]) && (
              <p className="m-0" key="error-november">
                {error["november"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="december">December:</label>
                <InputText id="december" className="w-full mb-3 p-inputtext-sm" value={_entity?.december} onChange={(e) => setValByKey("december", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["december"]) && (
              <p className="m-0" key="error-december">
                {error["december"]}
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

export default connect(mapState, mapDispatch)(CropDeductionsEditDialogComponent);

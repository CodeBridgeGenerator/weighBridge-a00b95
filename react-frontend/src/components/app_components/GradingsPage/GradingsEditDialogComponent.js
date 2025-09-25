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

const GradingsEditDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            ticketNumber: _entity?.ticketNumber,
unripeBunch: _entity?.unripeBunch,
longStalk: _entity?.longStalk,
rottenBunch: _entity?.rottenBunch,
        };

        setLoading(true);
        try {
            
        const result = await client.service("gradings").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info gradings updated successfully" });
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
        <Dialog header="Edit Gradings" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="gradings-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="ticketNumber">Ticket Number:</label>
                <InputText id="ticketNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.ticketNumber} onChange={(e) => setValByKey("ticketNumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["ticketNumber"]) && (
              <p className="m-0" key="error-ticketNumber">
                {error["ticketNumber"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="unripeBunch">Unripe Bunch:</label>
                <InputText id="unripeBunch" className="w-full mb-3 p-inputtext-sm" value={_entity?.unripeBunch} onChange={(e) => setValByKey("unripeBunch", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["unripeBunch"]) && (
              <p className="m-0" key="error-unripeBunch">
                {error["unripeBunch"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="longStalk">Long Stalk:</label>
                <InputText id="longStalk" className="w-full mb-3 p-inputtext-sm" value={_entity?.longStalk} onChange={(e) => setValByKey("longStalk", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["longStalk"]) && (
              <p className="m-0" key="error-longStalk">
                {error["longStalk"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="rottenBunch">Rotten Bunch:</label>
                <InputText id="rottenBunch" className="w-full mb-3 p-inputtext-sm" value={_entity?.rottenBunch} onChange={(e) => setValByKey("rottenBunch", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["rottenBunch"]) && (
              <p className="m-0" key="error-rottenBunch">
                {error["rottenBunch"]}
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

export default connect(mapState, mapDispatch)(GradingsEditDialogComponent);

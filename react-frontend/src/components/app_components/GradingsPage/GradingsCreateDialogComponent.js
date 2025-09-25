import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import initilization from "../../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";


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

const GradingsCreateDialogComponent = (props) => {
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
            ticketNumber: _entity?.ticketNumber,unripeBunch: _entity?.unripeBunch,longStalk: _entity?.longStalk,rottenBunch: _entity?.rottenBunch,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("gradings").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Gradings created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Gradings" });
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
        <Dialog header="Create Gradings" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="gradings-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="ticketNumber">Ticket Number:</label>
                <InputText id="ticketNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.ticketNumber} onChange={(e) => setValByKey("ticketNumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["ticketNumber"]) ? (
              <p className="m-0" key="error-ticketNumber">
                {error["ticketNumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="unripeBunch">Unripe Bunch:</label>
                <InputText id="unripeBunch" className="w-full mb-3 p-inputtext-sm" value={_entity?.unripeBunch} onChange={(e) => setValByKey("unripeBunch", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["unripeBunch"]) ? (
              <p className="m-0" key="error-unripeBunch">
                {error["unripeBunch"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="longStalk">Long Stalk:</label>
                <InputText id="longStalk" className="w-full mb-3 p-inputtext-sm" value={_entity?.longStalk} onChange={(e) => setValByKey("longStalk", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["longStalk"]) ? (
              <p className="m-0" key="error-longStalk">
                {error["longStalk"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="rottenBunch">Rotten Bunch:</label>
                <InputText id="rottenBunch" className="w-full mb-3 p-inputtext-sm" value={_entity?.rottenBunch} onChange={(e) => setValByKey("rottenBunch", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["rottenBunch"]) ? (
              <p className="m-0" key="error-rottenBunch">
                {error["rottenBunch"]}
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

export default connect(mapState, mapDispatch)(GradingsCreateDialogComponent);

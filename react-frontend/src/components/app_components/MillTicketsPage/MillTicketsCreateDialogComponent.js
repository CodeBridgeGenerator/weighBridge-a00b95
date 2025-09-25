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

const MillTicketsCreateDialogComponent = (props) => {
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
            estateWbTicketNumber: _entity?.estateWbTicketNumber,estateName: _entity?.estateName,estateDoNumber: _entity?.estateDoNumber,millTicketNumber: _entity?.millTicketNumber,millReceivedTime: _entity?.millReceivedTime,millDespatchTime: _entity?.millDespatchTime,estateWeight: _entity?.estateWeight,millWeight: _entity?.millWeight,millRejectedWeight: _entity?.millRejectedWeight,penalty: _entity?.penalty,oer: _entity?.oer,cropHarvestedBy: _entity?.cropHarvestedBy,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("millTickets").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Mill Tickets created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Mill Tickets" });
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
        <Dialog header="Create Mill Tickets" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="millTickets-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="estateWbTicketNumber">Estate WB Ticket Number:</label>
                <InputText id="estateWbTicketNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.estateWbTicketNumber} onChange={(e) => setValByKey("estateWbTicketNumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["estateWbTicketNumber"]) ? (
              <p className="m-0" key="error-estateWbTicketNumber">
                {error["estateWbTicketNumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="estateName">Estate Name:</label>
                <InputText id="estateName" className="w-full mb-3 p-inputtext-sm" value={_entity?.estateName} onChange={(e) => setValByKey("estateName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["estateName"]) ? (
              <p className="m-0" key="error-estateName">
                {error["estateName"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="estateDoNumber">Estate DO Number:</label>
                <InputText id="estateDoNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.estateDoNumber} onChange={(e) => setValByKey("estateDoNumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["estateDoNumber"]) ? (
              <p className="m-0" key="error-estateDoNumber">
                {error["estateDoNumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="millTicketNumber">Mill Ticket Number:</label>
                <InputNumber id="millTicketNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.millTicketNumber} onChange={(e) => setValByKey("millTicketNumber", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["millTicketNumber"]) ? (
              <p className="m-0" key="error-millTicketNumber">
                {error["millTicketNumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="millReceivedTime">Mill Received Time:</label>
                <InputNumber id="millReceivedTime" className="w-full mb-3 p-inputtext-sm" value={_entity?.millReceivedTime} onChange={(e) => setValByKey("millReceivedTime", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["millReceivedTime"]) ? (
              <p className="m-0" key="error-millReceivedTime">
                {error["millReceivedTime"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="millDespatchTime">Mill Despatch Time:</label>
                <InputNumber id="millDespatchTime" className="w-full mb-3 p-inputtext-sm" value={_entity?.millDespatchTime} onChange={(e) => setValByKey("millDespatchTime", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["millDespatchTime"]) ? (
              <p className="m-0" key="error-millDespatchTime">
                {error["millDespatchTime"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="estateWeight">Estate Weight:</label>
                <InputNumber id="estateWeight" className="w-full mb-3 p-inputtext-sm" value={_entity?.estateWeight} onChange={(e) => setValByKey("estateWeight", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["estateWeight"]) ? (
              <p className="m-0" key="error-estateWeight">
                {error["estateWeight"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="millWeight">Mill Weight:</label>
                <InputNumber id="millWeight" className="w-full mb-3 p-inputtext-sm" value={_entity?.millWeight} onChange={(e) => setValByKey("millWeight", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["millWeight"]) ? (
              <p className="m-0" key="error-millWeight">
                {error["millWeight"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="millRejectedWeight">Mill Rejected Weight:</label>
                <InputNumber id="millRejectedWeight" className="w-full mb-3 p-inputtext-sm" value={_entity?.millRejectedWeight} onChange={(e) => setValByKey("millRejectedWeight", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["millRejectedWeight"]) ? (
              <p className="m-0" key="error-millRejectedWeight">
                {error["millRejectedWeight"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="penalty">Penalty:</label>
                <InputText id="penalty" className="w-full mb-3 p-inputtext-sm" value={_entity?.penalty} onChange={(e) => setValByKey("penalty", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["penalty"]) ? (
              <p className="m-0" key="error-penalty">
                {error["penalty"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="oer">OER:</label>
                <InputNumber id="oer" className="w-full mb-3 p-inputtext-sm" value={_entity?.oer} onChange={(e) => setValByKey("oer", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["oer"]) ? (
              <p className="m-0" key="error-oer">
                {error["oer"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="cropHarvestedBy">Crop Harvested By:</label>
                <InputText id="cropHarvestedBy" className="w-full mb-3 p-inputtext-sm" value={_entity?.cropHarvestedBy} onChange={(e) => setValByKey("cropHarvestedBy", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["cropHarvestedBy"]) ? (
              <p className="m-0" key="error-cropHarvestedBy">
                {error["cropHarvestedBy"]}
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

export default connect(mapState, mapDispatch)(MillTicketsCreateDialogComponent);

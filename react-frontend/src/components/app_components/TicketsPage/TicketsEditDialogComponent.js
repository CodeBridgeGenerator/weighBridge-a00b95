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

const TicketsEditDialogComponent = (props) => {
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
block: _entity?.block,
division: _entity?.division,
yop: _entity?.yop,
loader: _entity?.loader,
bunch: _entity?.bunch,
netWeight: _entity?.netWeight,
        };

        setLoading(true);
        try {
            
        const result = await client.service("tickets").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info tickets updated successfully" });
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
        <Dialog header="Edit Tickets" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="tickets-edit-dialog-component">
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
                <label htmlFor="block">Block:</label>
                <InputText id="block" className="w-full mb-3 p-inputtext-sm" value={_entity?.block} onChange={(e) => setValByKey("block", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["block"]) && (
              <p className="m-0" key="error-block">
                {error["block"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="division">Division:</label>
                <InputText id="division" className="w-full mb-3 p-inputtext-sm" value={_entity?.division} onChange={(e) => setValByKey("division", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["division"]) && (
              <p className="m-0" key="error-division">
                {error["division"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="yop">YOP:</label>
                <InputNumber id="yop" className="w-full mb-3 p-inputtext-sm" value={_entity?.yop} onChange={(e) => setValByKey("yop", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["yop"]) && (
              <p className="m-0" key="error-yop">
                {error["yop"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="loader">Loader:</label>
                <InputText id="loader" className="w-full mb-3 p-inputtext-sm" value={_entity?.loader} onChange={(e) => setValByKey("loader", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["loader"]) && (
              <p className="m-0" key="error-loader">
                {error["loader"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="bunch">Bunch:</label>
                <InputNumber id="bunch" className="w-full mb-3 p-inputtext-sm" value={_entity?.bunch} onChange={(e) => setValByKey("bunch", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["bunch"]) && (
              <p className="m-0" key="error-bunch">
                {error["bunch"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="netWeight">Net Weight:</label>
                <InputText id="netWeight" className="w-full mb-3 p-inputtext-sm" value={_entity?.netWeight} onChange={(e) => setValByKey("netWeight", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["netWeight"]) && (
              <p className="m-0" key="error-netWeight">
                {error["netWeight"]}
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

export default connect(mapState, mapDispatch)(TicketsEditDialogComponent);

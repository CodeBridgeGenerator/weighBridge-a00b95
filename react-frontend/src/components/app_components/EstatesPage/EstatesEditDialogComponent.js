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

const EstatesEditDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            estateCode: _entity?.estateCode,
estateName: _entity?.estateName,
companyName: _entity?.companyName,
addressOne: _entity?.addressOne,
addressTwo: _entity?.addressTwo,
addressThree: _entity?.addressThree,
telephone: _entity?.telephone,
fax: _entity?.fax,
remark: _entity?.remark,
        };

        setLoading(true);
        try {
            
        const result = await client.service("estates").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info estates updated successfully" });
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
        <Dialog header="Edit Estates" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="estates-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="estateCode">Estate Code:</label>
                <InputText id="estateCode" className="w-full mb-3 p-inputtext-sm" value={_entity?.estateCode} onChange={(e) => setValByKey("estateCode", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["estateCode"]) && (
              <p className="m-0" key="error-estateCode">
                {error["estateCode"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="estateName">Estate Name:</label>
                <InputText id="estateName" className="w-full mb-3 p-inputtext-sm" value={_entity?.estateName} onChange={(e) => setValByKey("estateName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["estateName"]) && (
              <p className="m-0" key="error-estateName">
                {error["estateName"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="companyName">Company Name:</label>
                <InputText id="companyName" className="w-full mb-3 p-inputtext-sm" value={_entity?.companyName} onChange={(e) => setValByKey("companyName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["companyName"]) && (
              <p className="m-0" key="error-companyName">
                {error["companyName"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="addressOne">Address One:</label>
                <InputText id="addressOne" className="w-full mb-3 p-inputtext-sm" value={_entity?.addressOne} onChange={(e) => setValByKey("addressOne", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["addressOne"]) && (
              <p className="m-0" key="error-addressOne">
                {error["addressOne"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="addressTwo">Address Two:</label>
                <InputText id="addressTwo" className="w-full mb-3 p-inputtext-sm" value={_entity?.addressTwo} onChange={(e) => setValByKey("addressTwo", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["addressTwo"]) && (
              <p className="m-0" key="error-addressTwo">
                {error["addressTwo"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="addressThree">Address Three:</label>
                <InputText id="addressThree" className="w-full mb-3 p-inputtext-sm" value={_entity?.addressThree} onChange={(e) => setValByKey("addressThree", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["addressThree"]) && (
              <p className="m-0" key="error-addressThree">
                {error["addressThree"]}
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
                <label htmlFor="remark">Remark:</label>
                <InputText id="remark" className="w-full mb-3 p-inputtext-sm" value={_entity?.remark} onChange={(e) => setValByKey("remark", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["remark"]) && (
              <p className="m-0" key="error-remark">
                {error["remark"]}
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

export default connect(mapState, mapDispatch)(EstatesEditDialogComponent);

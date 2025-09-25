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

const SuppliersEditDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            supplierCode: _entity?.supplierCode,
supplierName: _entity?.supplierName,
company: _entity?.company,
addressOne: _entity?.addressOne,
addressTwo: _entity?.addressTwo,
addressThree: _entity?.addressThree,
postcode: _entity?.postcode,
telephone: _entity?.telephone,
fax: _entity?.fax,
mpobCertificateNumber: _entity?.mpobCertificateNumber,
certificateName: _entity?.certificateName,
expiryDate: _entity?.expiryDate,
plantedHa: _entity?.plantedHa,
yop: _entity?.yop,
uploadCertificate: _entity?.uploadCertificate,
        };

        setLoading(true);
        try {
            
        const result = await client.service("suppliers").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info suppliers updated successfully" });
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
        <Dialog header="Edit Suppliers" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="suppliers-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="supplierCode">Supplier Code:</label>
                <InputNumber id="supplierCode" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierCode} onChange={(e) => setValByKey("supplierCode", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierCode"]) && (
              <p className="m-0" key="error-supplierCode">
                {error["supplierCode"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="supplierName">Supplier Name:</label>
                <InputText id="supplierName" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierName} onChange={(e) => setValByKey("supplierName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierName"]) && (
              <p className="m-0" key="error-supplierName">
                {error["supplierName"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="company">Company:</label>
                <InputText id="company" className="w-full mb-3 p-inputtext-sm" value={_entity?.company} onChange={(e) => setValByKey("company", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["company"]) && (
              <p className="m-0" key="error-company">
                {error["company"]}
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
                <label htmlFor="postcode">Postcode:</label>
                <InputNumber id="postcode" className="w-full mb-3 p-inputtext-sm" value={_entity?.postcode} onChange={(e) => setValByKey("postcode", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["postcode"]) && (
              <p className="m-0" key="error-postcode">
                {error["postcode"]}
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
                <label htmlFor="mpobCertificateNumber">MPOB Certificate Number:</label>
                <InputNumber id="mpobCertificateNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.mpobCertificateNumber} onChange={(e) => setValByKey("mpobCertificateNumber", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["mpobCertificateNumber"]) && (
              <p className="m-0" key="error-mpobCertificateNumber">
                {error["mpobCertificateNumber"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="certificateName">Certificate Name:</label>
                <InputText id="certificateName" className="w-full mb-3 p-inputtext-sm" value={_entity?.certificateName} onChange={(e) => setValByKey("certificateName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["certificateName"]) && (
              <p className="m-0" key="error-certificateName">
                {error["certificateName"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="expiryDate">Expiry date:</label>
                <InputNumber id="expiryDate" className="w-full mb-3 p-inputtext-sm" value={_entity?.expiryDate} onChange={(e) => setValByKey("expiryDate", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["expiryDate"]) && (
              <p className="m-0" key="error-expiryDate">
                {error["expiryDate"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="plantedHa">Planted HA:</label>
                <InputNumber id="plantedHa" className="w-full mb-3 p-inputtext-sm" value={_entity?.plantedHa} onChange={(e) => setValByKey("plantedHa", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["plantedHa"]) && (
              <p className="m-0" key="error-plantedHa">
                {error["plantedHa"]}
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
                <label htmlFor="uploadCertificate">Upload Certificate:</label>
                <InputText id="uploadCertificate" className="w-full mb-3 p-inputtext-sm" value={_entity?.uploadCertificate} onChange={(e) => setValByKey("uploadCertificate", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["uploadCertificate"]) && (
              <p className="m-0" key="error-uploadCertificate">
                {error["uploadCertificate"]}
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

export default connect(mapState, mapDispatch)(SuppliersEditDialogComponent);

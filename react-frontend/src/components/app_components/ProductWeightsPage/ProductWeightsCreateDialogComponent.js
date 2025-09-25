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

const ProductWeightsCreateDialogComponent = (props) => {
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
            estateName: _entity?.estateName,productType: _entity?.productType,productName: _entity?.productName,productDescription: _entity?.productDescription,block: _entity?.block,division: _entity?.division,yop: _entity?.yop,weight: _entity?.weight,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("productWeights").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Product Weights  created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Product Weights " });
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
        <Dialog header="Create Product Weights " visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="productWeights-create-dialog-component">
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
                <label htmlFor="productType">Product Type:</label>
                <InputText id="productType" className="w-full mb-3 p-inputtext-sm" value={_entity?.productType} onChange={(e) => setValByKey("productType", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["productType"]) ? (
              <p className="m-0" key="error-productType">
                {error["productType"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="productName">Product Name:</label>
                <InputText id="productName" className="w-full mb-3 p-inputtext-sm" value={_entity?.productName} onChange={(e) => setValByKey("productName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["productName"]) ? (
              <p className="m-0" key="error-productName">
                {error["productName"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="productDescription">Product Description:</label>
                <InputText id="productDescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.productDescription} onChange={(e) => setValByKey("productDescription", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["productDescription"]) ? (
              <p className="m-0" key="error-productDescription">
                {error["productDescription"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="block">Block:</label>
                <InputText id="block" className="w-full mb-3 p-inputtext-sm" value={_entity?.block} onChange={(e) => setValByKey("block", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["block"]) ? (
              <p className="m-0" key="error-block">
                {error["block"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="division">Division:</label>
                <InputText id="division" className="w-full mb-3 p-inputtext-sm" value={_entity?.division} onChange={(e) => setValByKey("division", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["division"]) ? (
              <p className="m-0" key="error-division">
                {error["division"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="yop">YOP:</label>
                <InputNumber id="yop" className="w-full mb-3 p-inputtext-sm" value={_entity?.yop} onChange={(e) => setValByKey("yop", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["yop"]) ? (
              <p className="m-0" key="error-yop">
                {error["yop"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="weight">Weight:</label>
                <InputNumber id="weight" className="w-full mb-3 p-inputtext-sm" value={_entity?.weight} onChange={(e) => setValByKey("weight", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["weight"]) ? (
              <p className="m-0" key="error-weight">
                {error["weight"]}
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

export default connect(mapState, mapDispatch)(ProductWeightsCreateDialogComponent);

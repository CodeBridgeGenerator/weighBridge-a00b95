import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { classNames } from "primereact/utils";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import { SplitButton } from "primereact/splitbutton";
import client from "../../../services/restClient";
import CommentsSection from "../../common/CommentsSection";
import ProjectLayout from "../../Layouts/ProjectLayout";


const SingleIncomingPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState({});
  const [isHelpSidebarVisible, setHelpSidebarVisible] = useState(false);

    

    useEffect(() => {
        //on mount
        client
            .service("incoming")
            .get(urlParams.singleIncomingId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Incoming", type: "error", message: error.message || "Failed get incoming" });
            });
    }, [props,urlParams.singleIncomingId]);


    const goBack = () => {
        navigate("/incoming");
    };

      const toggleHelpSidebar = () => {
    setHelpSidebarVisible(!isHelpSidebarVisible);
  };

  const copyPageLink = () => {
    const currentUrl = window.location.href;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        props.alert({
          title: "Link Copied",
          type: "success",
          message: "Page link copied to clipboard!",
        });
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
        props.alert({
          title: "Error",
          type: "error",
          message: "Failed to copy page link.",
        });
      });
  };

    const menuItems = [
        {
            label: "Copy link",
            icon: "pi pi-copy",
            command: () => copyPageLink(),
        },
        {
            label: "Help",
            icon: "pi pi-question-circle",
            command: () => toggleHelpSidebar(),
        },
    ];

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-12">
                <div className="flex align-items-center justify-content-between">
                <div className="flex align-items-center">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Incoming</h3>
                    <SplitButton
                        model={menuItems.filter(
                        (m) => !(m.icon === "pi pi-trash" && items?.length === 0),
                        )}
                        dropdownIcon="pi pi-ellipsis-h"
                        buttonClassName="hidden"
                        menuButtonClassName="ml-1 p-button-text"
                    />
                </div>
                
                {/* <p>incoming/{urlParams.singleIncomingId}</p> */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Product</label><p className="m-0 ml-3" >{_entity?.product}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Estate</label><p className="m-0 ml-3" >{_entity?.estate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">DO Number</label><p className="m-0 ml-3" >{_entity?.doNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Trailor Number</label><p className="m-0 ml-3" >{_entity?.trailorNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Remark</label><p className="m-0 ml-3" >{_entity?.remark}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Seal</label><p className="m-0 ml-3" >{_entity?.seal}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Contract</label><p className="m-0 ml-3" >{_entity?.contract}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Vehicle Number</label><p className="m-0 ml-3" >{_entity?.vehicleNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Supplier</label><p className="m-0 ml-3" >{_entity?.supplier}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Driver</label><p className="m-0 ml-3" >{_entity?.driver}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Transporter</label><p className="m-0 ml-3" >{_entity?.transporter}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">First Weight</label><p className="m-0 ml-3" >{Number(_entity?.firstWeight)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Second Weight</label><p className="m-0 ml-3" >{_entity?.secondWeight}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Adjustment</label><p className="m-0 ml-3" >{_entity?.adjustment}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Adjusted Weight</label><p className="m-0 ml-3" >{_entity?.adjustedWeight}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Net Weight</label><p className="m-0 ml-3" >{_entity?.netWeight}</p></div>
            

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
         </div>

      


      <CommentsSection
        recordId={urlParams.singleIncomingId}
        user={props.user}
        alert={props.alert}
        serviceName="incoming"
      />
      <div
        id="rightsidebar"
        className={classNames("overlay-auto z-1 surface-overlay shadow-2 absolute right-0 w-20rem animation-duration-150 animation-ease-in-out", { "hidden" : !isHelpSidebarVisible })}
        style={{ top: "60px", height: "calc(100% - 60px)" }}
      >
        <div className="flex flex-column h-full p-4">
          <span className="text-xl font-medium text-900 mb-3">Help bar</span>
          <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
        </div>
      </div>
      </div>
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleIncomingPage);

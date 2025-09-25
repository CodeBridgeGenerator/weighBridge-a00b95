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


const SingleMillTicketsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState({});
  const [isHelpSidebarVisible, setHelpSidebarVisible] = useState(false);

    

    useEffect(() => {
        //on mount
        client
            .service("millTickets")
            .get(urlParams.singleMillTicketsId, { query: { $populate: [            {
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
                props.alert({ title: "MillTickets", type: "error", message: error.message || "Failed get millTickets" });
            });
    }, [props,urlParams.singleMillTicketsId]);


    const goBack = () => {
        navigate("/millTickets");
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
                    <h3 className="m-0">Mill Tickets</h3>
                    <SplitButton
                        model={menuItems.filter(
                        (m) => !(m.icon === "pi pi-trash" && items?.length === 0),
                        )}
                        dropdownIcon="pi pi-ellipsis-h"
                        buttonClassName="hidden"
                        menuButtonClassName="ml-1 p-button-text"
                    />
                </div>
                
                {/* <p>millTickets/{urlParams.singleMillTicketsId}</p> */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Estate WB Ticket Number</label><p className="m-0 ml-3" >{_entity?.estateWbTicketNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Estate Name</label><p className="m-0 ml-3" >{_entity?.estateName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Estate DO Number</label><p className="m-0 ml-3" >{_entity?.estateDoNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Mill Ticket Number</label><p className="m-0 ml-3" >{Number(_entity?.millTicketNumber)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Mill Received Time</label><p className="m-0 ml-3" >{Number(_entity?.millReceivedTime)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Mill Despatch Time</label><p className="m-0 ml-3" >{Number(_entity?.millDespatchTime)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Estate Weight</label><p className="m-0 ml-3" >{Number(_entity?.estateWeight)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Mill Weight</label><p className="m-0 ml-3" >{Number(_entity?.millWeight)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Mill Rejected Weight</label><p className="m-0 ml-3" >{Number(_entity?.millRejectedWeight)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Penalty</label><p className="m-0 ml-3" >{_entity?.penalty}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">OER</label><p className="m-0 ml-3" >{Number(_entity?.oer)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Crop Harvested By</label><p className="m-0 ml-3" >{_entity?.cropHarvestedBy}</p></div>
            

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
         </div>

      


      <CommentsSection
        recordId={urlParams.singleMillTicketsId}
        user={props.user}
        alert={props.alert}
        serviceName="millTickets"
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

export default connect(mapState, mapDispatch)(SingleMillTicketsPage);

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

import SingleIncomingPage from "../components/app_components/IncomingPage/SingleIncomingPage";
import IncomingProjectLayoutPage from "../components/app_components/IncomingPage/IncomingProjectLayoutPage";
import SingleOutgoingPage from "../components/app_components/OutgoingPage/SingleOutgoingPage";
import OutgoingProjectLayoutPage from "../components/app_components/OutgoingPage/OutgoingProjectLayoutPage";
import SingleProductsPage from "../components/app_components/ProductsPage/SingleProductsPage";
import ProductProjectLayoutPage from "../components/app_components/ProductsPage/ProductProjectLayoutPage";
import SingleTicketsPage from "../components/app_components/TicketsPage/SingleTicketsPage";
import TicketProjectLayoutPage from "../components/app_components/TicketsPage/TicketProjectLayoutPage";
import SingleGradingsPage from "../components/app_components/GradingsPage/SingleGradingsPage";
import GradingProjectLayoutPage from "../components/app_components/GradingsPage/GradingProjectLayoutPage";
import SingleMillTicketsPage from "../components/app_components/MillTicketsPage/SingleMillTicketsPage";
import MillTicketProjectLayoutPage from "../components/app_components/MillTicketsPage/MillTicketProjectLayoutPage";
import SingleEstatesPage from "../components/app_components/EstatesPage/SingleEstatesPage";
import EstateProjectLayoutPage from "../components/app_components/EstatesPage/EstateProjectLayoutPage";
import SingleProductWeightsPage from "../components/app_components/ProductWeightsPage/SingleProductWeightsPage";
import ProductWeightProjectLayoutPage from "../components/app_components/ProductWeightsPage/ProductWeightProjectLayoutPage";
import SingleSuppliersPage from "../components/app_components/SuppliersPage/SingleSuppliersPage";
import SupplierProjectLayoutPage from "../components/app_components/SuppliersPage/SupplierProjectLayoutPage";
import SingleVehiclesPage from "../components/app_components/VehiclesPage/SingleVehiclesPage";
import VehicleProjectLayoutPage from "../components/app_components/VehiclesPage/VehicleProjectLayoutPage";
import SingleCustomersPage from "../components/app_components/CustomersPage/SingleCustomersPage";
import CustomerProjectLayoutPage from "../components/app_components/CustomersPage/CustomerProjectLayoutPage";
import SingleTransportersPage from "../components/app_components/TransportersPage/SingleTransportersPage";
import TransporterProjectLayoutPage from "../components/app_components/TransportersPage/TransporterProjectLayoutPage";
import SingleCropDeductionsPage from "../components/app_components/CropDeductionsPage/SingleCropDeductionsPage";
import CropDeductionProjectLayoutPage from "../components/app_components/CropDeductionsPage/CropDeductionProjectLayoutPage";
import SingleDriversPage from "../components/app_components/DriversPage/SingleDriversPage";
import DriverProjectLayoutPage from "../components/app_components/DriversPage/DriverProjectLayoutPage";
//  ~cb-add-import~

const AppRouter = () => {
    return (
        <Routes>
            {/* ~cb-add-unprotected-route~ */}
            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
<Route path="/incoming/:singleIncomingId" exact element={<SingleIncomingPage />} />
<Route path="/incoming" exact element={<IncomingProjectLayoutPage />} />
<Route path="/outgoing/:singleOutgoingId" exact element={<SingleOutgoingPage />} />
<Route path="/outgoing" exact element={<OutgoingProjectLayoutPage />} />
<Route path="/products/:singleProductsId" exact element={<SingleProductsPage />} />
<Route path="/products" exact element={<ProductProjectLayoutPage />} />
<Route path="/tickets/:singleTicketsId" exact element={<SingleTicketsPage />} />
<Route path="/tickets" exact element={<TicketProjectLayoutPage />} />
<Route path="/gradings/:singleGradingsId" exact element={<SingleGradingsPage />} />
<Route path="/gradings" exact element={<GradingProjectLayoutPage />} />
<Route path="/millTickets/:singleMillTicketsId" exact element={<SingleMillTicketsPage />} />
<Route path="/millTickets" exact element={<MillTicketProjectLayoutPage />} />
<Route path="/estates/:singleEstatesId" exact element={<SingleEstatesPage />} />
<Route path="/estates" exact element={<EstateProjectLayoutPage />} />
<Route path="/productWeights/:singleProductWeightsId" exact element={<SingleProductWeightsPage />} />
<Route path="/productWeights" exact element={<ProductWeightProjectLayoutPage />} />
<Route path="/suppliers/:singleSuppliersId" exact element={<SingleSuppliersPage />} />
<Route path="/suppliers" exact element={<SupplierProjectLayoutPage />} />
<Route path="/vehicles/:singleVehiclesId" exact element={<SingleVehiclesPage />} />
<Route path="/vehicles" exact element={<VehicleProjectLayoutPage />} />
<Route path="/customers/:singleCustomersId" exact element={<SingleCustomersPage />} />
<Route path="/customers" exact element={<CustomerProjectLayoutPage />} />
<Route path="/transporters/:singleTransportersId" exact element={<SingleTransportersPage />} />
<Route path="/transporters" exact element={<TransporterProjectLayoutPage />} />
<Route path="/cropDeductions/:singleCropDeductionsId" exact element={<SingleCropDeductionsPage />} />
<Route path="/cropDeductions" exact element={<CropDeductionProjectLayoutPage />} />
<Route path="/drivers/:singleDriversId" exact element={<SingleDriversPage />} />
<Route path="/drivers" exact element={<DriverProjectLayoutPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
        </Routes>
    );
}

const mapState = (state) => {
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(AppRouter);

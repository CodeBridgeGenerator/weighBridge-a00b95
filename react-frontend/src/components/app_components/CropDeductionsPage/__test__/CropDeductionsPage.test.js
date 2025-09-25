import React from "react";
import { render, screen } from "@testing-library/react";

import CropDeductionsPage from "../CropDeductionsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cropDeductions page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CropDeductionsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cropDeductions-datatable")).toBeInTheDocument();
    expect(screen.getByRole("cropDeductions-add-button")).toBeInTheDocument();
});

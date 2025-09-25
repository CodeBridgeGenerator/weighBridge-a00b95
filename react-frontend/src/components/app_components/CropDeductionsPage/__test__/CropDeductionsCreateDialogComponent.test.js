import React from "react";
import { render, screen } from "@testing-library/react";

import CropDeductionsCreateDialogComponent from "../CropDeductionsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cropDeductions create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CropDeductionsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cropDeductions-create-dialog-component")).toBeInTheDocument();
});

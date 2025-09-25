import React from "react";
import { render, screen } from "@testing-library/react";

import ProductWeightsEditDialogComponent from "../ProductWeightsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders productWeights edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProductWeightsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("productWeights-edit-dialog-component")).toBeInTheDocument();
});

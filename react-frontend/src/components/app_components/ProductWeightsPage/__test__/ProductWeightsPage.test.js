import React from "react";
import { render, screen } from "@testing-library/react";

import ProductWeightsPage from "../ProductWeightsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders productWeights page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProductWeightsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("productWeights-datatable")).toBeInTheDocument();
    expect(screen.getByRole("productWeights-add-button")).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";

import TransportersPage from "../TransportersPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders transporters page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TransportersPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("transporters-datatable")).toBeInTheDocument();
    expect(screen.getByRole("transporters-add-button")).toBeInTheDocument();
});

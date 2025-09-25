import React from "react";
import { render, screen } from "@testing-library/react";

import DriversPage from "../DriversPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders drivers page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DriversPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("drivers-datatable")).toBeInTheDocument();
    expect(screen.getByRole("drivers-add-button")).toBeInTheDocument();
});

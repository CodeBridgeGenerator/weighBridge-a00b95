import React from "react";
import { render, screen } from "@testing-library/react";

import MillTicketsPage from "../MillTicketsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders millTickets page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MillTicketsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("millTickets-datatable")).toBeInTheDocument();
    expect(screen.getByRole("millTickets-add-button")).toBeInTheDocument();
});

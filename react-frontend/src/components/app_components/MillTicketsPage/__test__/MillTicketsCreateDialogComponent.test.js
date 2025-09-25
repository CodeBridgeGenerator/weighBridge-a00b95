import React from "react";
import { render, screen } from "@testing-library/react";

import MillTicketsCreateDialogComponent from "../MillTicketsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders millTickets create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MillTicketsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("millTickets-create-dialog-component")).toBeInTheDocument();
});

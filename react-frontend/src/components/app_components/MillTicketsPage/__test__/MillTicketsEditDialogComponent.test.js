import React from "react";
import { render, screen } from "@testing-library/react";

import MillTicketsEditDialogComponent from "../MillTicketsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders millTickets edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MillTicketsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("millTickets-edit-dialog-component")).toBeInTheDocument();
});

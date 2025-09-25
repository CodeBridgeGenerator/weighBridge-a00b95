import React from "react";
import { render, screen } from "@testing-library/react";

import OutgoingCreateDialogComponent from "../OutgoingCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders outgoing create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <OutgoingCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("outgoing-create-dialog-component")).toBeInTheDocument();
});

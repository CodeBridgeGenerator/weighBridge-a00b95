import React from "react";
import { render, screen } from "@testing-library/react";

import OutgoingEditDialogComponent from "../OutgoingEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders outgoing edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <OutgoingEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("outgoing-edit-dialog-component")).toBeInTheDocument();
});

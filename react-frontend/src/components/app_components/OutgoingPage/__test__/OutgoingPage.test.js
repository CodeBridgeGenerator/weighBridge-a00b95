import React from "react";
import { render, screen } from "@testing-library/react";

import OutgoingPage from "../OutgoingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders outgoing page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <OutgoingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("outgoing-datatable")).toBeInTheDocument();
    expect(screen.getByRole("outgoing-add-button")).toBeInTheDocument();
});

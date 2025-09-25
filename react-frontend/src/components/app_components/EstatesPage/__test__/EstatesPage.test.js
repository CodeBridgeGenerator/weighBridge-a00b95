import React from "react";
import { render, screen } from "@testing-library/react";

import EstatesPage from "../EstatesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders estates page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EstatesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("estates-datatable")).toBeInTheDocument();
    expect(screen.getByRole("estates-add-button")).toBeInTheDocument();
});

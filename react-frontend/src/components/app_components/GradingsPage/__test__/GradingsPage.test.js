import React from "react";
import { render, screen } from "@testing-library/react";

import GradingsPage from "../GradingsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders gradings page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <GradingsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("gradings-datatable")).toBeInTheDocument();
    expect(screen.getByRole("gradings-add-button")).toBeInTheDocument();
});

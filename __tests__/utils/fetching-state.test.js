import * as React from "react";
import { render, screen } from "@testing-library/react";
import { FetchingState } from "@/components/utils/fetching-state";

describe("FetchingState", () => {
  test("renders loading state initially", async () => {
    global.fetch = jest.fn(() => Promise.resolve({}));
    render(
      <FetchingState url="https://api.example.com/data">
        {(data, error, isLoading) => {
          if (isLoading) {
            return <div>Loading...</div>;
          }
        }}
      </FetchingState>
    );
    const loadingIndicator = await screen.findByText("Loading...");
    expect(loadingIndicator).toBeInTheDocument();
  });

  test("renders data after successful fetch", async () => {
    const data = { name: "John Doe", age: 30 };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data),
      })
    );
    render(
      <FetchingState url="https://api.example.com/data">
        {(data, error, isLoading) => {
          if (data) {
            return <div>{`${data.name}`}</div>;
          }
        }}
      </FetchingState>
    );

    const name = await screen.findByText(`${data.name}`);
    expect(name).toBeInTheDocument();
  });

  test("renders error message after failed fetch", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: "Error" }),
      })
    );
    render(
      <FetchingState url="api/data">
        {(data, error, isLoading) => {
          if (error) {
            return <div>ERROR</div>;
          }
        }}
      </FetchingState>
    );
    const errorMessage = await screen.findByText("ERROR");
    expect(errorMessage).toBeInTheDocument();
  });
});

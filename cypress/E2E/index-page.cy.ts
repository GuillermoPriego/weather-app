const defaultCity = "Entrevías";

describe("Index Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/forecast*").as("getForecast");
    cy.intercept("GET", "**/weather*").as("getWeather");

    cy.visit("http://localhost:3000");
    cy.wait(["@getForecast", "@getWeather"]);
  });

  it("renders the index page", () => {
    cy.get("nav > a")
      .should("contain", "Weather App")
      .should("have.attr", "href", "/");

    cy.get("input[type='text']#city-name").should("be.visible");

    cy.get("[data-testid='weather-section']")
      .should("be.visible")
      .should("contain", defaultCity);

    cy.get("[data-testid='forecast-section']")
      .should("be.visible")
      .should("contain", "Forecast");

    cy.get("[data-testid='forecast-item']").should("have.length", 5);
  });

  it("searches for a city and navigates to city details", () => {
    const searchCity = "Alcobendas";
    const cityData = [
      {
        name: searchCity,
        country: "ES",
        state: "",
        lat: 40.5333333,
        lon: -3.65,
      },
    ];

    cy.intercept(`GET`, `**/cities?name=*`, cityData).as("getCities");

    cy.get("input[type='text']#city-name")
      .type(searchCity)
      .should("have.value", searchCity);

    // wait 2 seconds because of debounce
    cy.wait(2000);

    cy.wait("@getCities").then(({ response }) => {
      const cities = response ? response.body : [];

      expect(cities[0].name).to.equal(searchCity);

      //data-testid="city-searcher-list" first child should be the city searched
      cy.get("[data-testid='city-searcher-list']")
        .should("be.visible")
        .should("have.length", 1)
        .children()
        .first()
        .should("contain", searchCity);

      cy.get("button[type='submit']").click();

      cy.url().should("include", `/city/${name}`);
    });
  });

  it("redirects to 404 page when city is not found", () => {
    cy.visit("http://localhost:3000/city/Alcobendas", {
      failOnStatusCode: false,
    });

    cy.get("[data-testid='404-page']").should("be.visible");

    cy.get("a[href='/']").should("be.visible");
  });
});

export {};

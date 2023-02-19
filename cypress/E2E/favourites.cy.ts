describe("Favourites", () => {
  beforeEach(() => {
    cy.window().then((win) => win.localStorage.removeItem("favourites"));
    cy.intercept("GET", "**/forecast*").as("getForecast");
    cy.intercept("GET", "**/weather*").as("getWeather");

    cy.visit("http://localhost:3000");
    cy.wait(["@getForecast", "@getWeather"]);
  });

  it("displays a message when there are no favourites", () => {
    cy.window().then((win) => win.localStorage.removeItem("favourites"));

    cy.get("[data-testid='favourite-cities-list']").should("not.exist");
    cy.get("[data-testid='no-favourite-cities']").should("be.visible");
  });

  it("adds a city to favourites", () => {
    cy.visit(
      "http://localhost:3000/city/Alcobendas?state=Community%20of%20Madrid&country=ES&lat=40.5400082&lon=-3.6358494"
    );

    cy.get("[data-testid='toggle-fav-city']")
      .should("be.visible")
      .should("contain", "Add to favourites")
      .click();

    cy.get("[data-testid='toggle-fav-city']")
      .should("be.visible")
      .should("contain", "Remove from favourites");

    cy.visit("http://localhost:3000");

    cy.get("[data-testid='favourite-cities-list']")
      .should("be.visible")
      // should have 1 child with the city name
      .children()
      .should("have.length", 1)
      .should("contain", "Alcobendas");
  });

  it("removes a city from favourites", () => {
    cy.window().then((win) => {
      win.localStorage.setItem(
        "favCities",
        JSON.stringify([
          {
            name: "Alcobendas",
            state: "Community of Madrid",
            country: "ES",
            lon: -3.6358494,
            lat: 40.5400082,
          },
        ])
      );
    });
    cy.visit("http://localhost:3000");

    cy.get("[data-testid='favourite-cities-list']")
      .should("be.visible")
      .children()
      .should("have.length", 1)
      .should("contain", "Alcobendas");

    cy.get("[data-testid='favourite-cities-list']")
      .children()
      .first()
      .get("button[data-testid='remove-fav-city']")
      .click();

    // window.confirm() returns true
    cy.on("window:confirm", () => true);

    cy.get("[data-testid='favourite-cities-list']").should("not.exist");
  });
});

export {};

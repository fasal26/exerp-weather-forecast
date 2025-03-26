describe('Weather Forecast Test', () => {
  beforeEach(() => {

    cy.fixture('weather').then((weatherData) => {
      // Mock API response using fixture data
      cy.intercept('GET', '**/weather/forecast*', {
        statusCode: 200,
        body: weatherData,
      }).as('getWeather')
    })

    cy.visit('/')
  })

  it('Handles location permission, geocoding, and weather data', () => {
    cy.wait(2000) 
    cy.wait('@getWeather').its('response.statusCode').should('eq', 200)

    // Verify the location input is not empty
    cy.get('#loc-search').should('not.have.value', '')

    // Check if the map container exists
    cy.get('.vue-map-container').should('exist')

    // Verify displayed weather matches API response
    cy.contains('10.5°C').should('be.visible')
    cy.contains('5.2 km/h').should('be.visible')
    cy.contains('180°').should('be.visible')
    cy.contains('12:00 PM').should('be.visible')
  })

  it('Displays an error message when the API fails', () => {
    cy.intercept('GET', '**/weather/forecast*', {
      statusCode: 500,
    }).as('getWeatherFail');
  
    cy.visit('/');
    cy.wait('@getWeatherFail');
  
    cy.contains('Oops something went wrong!').should('be.visible');
  });
})




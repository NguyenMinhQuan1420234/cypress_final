import { APIEndpoints } from "../constants/api-endpoints";
import { UrlConstants } from "../constants/url-constants";
import { HomePage } from "../pages/home-page";
import { PhotoDetailPage } from "../pages/photo-detail-page";

describe("download photo", () => {
  before(() => {
    cy.visit(Cypress.env("baseUrl") + UrlConstants.LOGIN_URL);
    cy.loginWithDefaultAccount();
  });

  it("download photo successfully", () => {
    HomePage.clickFirstImage();
    var imgID;
    var downloadLink;
    cy.sendRequest("GET", APIEndpoints.ENDPOINT_PHOTO_RANDOM_GET).then(
      (response) => {
        imgID = response.body.id;
        cy.sendRequest(
          "GET",
          APIEndpoints.ENDPOINT_PHOTO_DOWNLOAD.replace("%s", imgID)
        ).then((response) => {
          downloadLink = response.body.url;
          var filename = imgID+".jpg";
          cy.log(downloadLink);
          cy.downloadFile(downloadLink, "cypress/downloads", filename);
          cy.verifyDownload(filename, { contains: true });
        });
      });
  });
});

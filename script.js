"use strict";

// const { strict } = require("assert");
// const fs = require("fs");
// const path = require("path");
// const rs = fs.createReadStream(path.join(__dirname, "files", "bigfile.txt"), {
//   encoding: "utf8",
// });
// const ws = fs.createWriteStream(
//   path.join(__dirname, "files", "newbigfile.txt")
// );

// rs.on("data", (dataChunk) => ws.write(dataChunk));
// Function to set and update the date every 3 days

// Function to set and update the date every 3 days

// Function to update time every 5 minutes
// Function to set and update the date every 3 days
// Function to set and update the date every 3 days

// Function to update offer date every 3 days
// Updated on 18/03/2024
function updateOfferDate() {
  // Get the current date
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 3);

  // Check if the offer date is already stored in local storage
  let offerDate = localStorage.getItem("offerDate");

  // If the offer date is not stored or it's been more than 3 days since the last update, set a new offer date
  if (
    !offerDate ||
    currentDate - new Date(offerDate) >= 3 * 24 * 60 * 60 * 1000
  ) {
    // 3 days in milliseconds
    localStorage.setItem("offerDate", currentDate);
  }

  // Display the offer date
  document.getElementById("offerDateDisplay").textContent =
    "Offer Date: " +
    new Date(localStorage.getItem("offerDate")).toLocaleDateString();
}

// Call the function to update the offer date
updateOfferDate();

// Function to update the offer date every 3 days
setInterval(updateOfferDate, 3 * 24 * 60 * 60 * 1000); // 3 days in milliseconds

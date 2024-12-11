---
title: "Automating Checkboxes in Google Sheets with Apps Script"
description: "Discover the power of automation in Google Sheets with a guide on adding checkboxes using Apps Script. Simplify tasks and enhance productivity!”"
date: 2024-03-16
tags: [apps-script]
---

## What is Google Apps Script?

Google Apps Script, a JavaScript-based language, automates and enhances tasks across Google Workspace apps like Sheets, Docs, and Gmail. Users create custom scripts, triggers, and workflows in a web-based IDE, empowering them to manipulate data within Google services. The tool's accessibility to users with basic programming knowledge, combined with seamless integration with Google services, positions Google Apps Script as a potent tool for productivity enhancement.

## Automating Checkboxes in the Sheets

![Google Sheets - table for id, first name, last name and email ](https://github.com/victoriacheng15/victoriacheng15.vercel.app/assets/35031228/e44d5884-8279-445d-aaef-66755fefaa2a)

1. **Create a New Sheet:**
   - Open your Google Sheet
   - Set up fake data with [mackaroo](https://www.mockaroo.com/)
   - (Optional) set the named ranges, `Data` ⇒ `Named ranges`
   - Click on `Extensions` and then select `Apps Script`
2. **Initialize the Script:**
   - The initial code will look like this:
     ```js
     function myFunction() {
     	//
     }
     ```
3. **Rename the Function:**

   - Change the function name to `addCheckboxes`:

     ```js
     // Define a function named addCheckboxes
     function addCheckboxes() {
     	// Get the active sheet of the spreadsheet
     	const spreadsheet = SpreadsheetApp.getActiveSheet();

     	// Define the range where the data is located (e.g., "invitation" range)
     	// or A2:E
     	const range = spreadsheet.getRange("invitation");

     	// Get the values from the specified range
     	const list = range.getValues();

     	// Iterate through each row in the list
     	list.forEach((person, index) => {
     		// Extract data for each person
     		const firstName = person[1];
     		const lastName = person[2];
     		const email = person[3];
     		const inviteCol = person[4];

     		// Check if all required data is present and invite column is empty
     		if (firstName && lastName && email && iunviteCol === "") {
     			// Get the cell where the checkbox will be inserted
     			// index + 1, becasue it starts from 2nd row
     			// 5 is the E column that we want to add checkboxes
     			const cell = range.getCell(index + 1, 5).getA1Notation();

     			// Uncomment the following line if you want to log the cell location
     			// Logger.log(cell);

     			// Insert a checkbox in the specified cell
     			spreadsheet.getRange([cell]).insertCheckboxes();
     		}
     	});
     }
     ```

4. **Run the Script:**
   - Click the "Run" button.
   - A pop-up will appear, stating "Authorization required. This project requires your permission to access your data."
5. **Authorize the Script:**
   - Click on "Review permissions"
   - Choose the Google account associated with the Google Sheets document
   - Click "Advanced" at the bottom of the permissions pop-up
   - Click on "Go to [Untitled Project]" (or the name of the Apps Script)
   - Review the permissions required by the script
   - Click the "Allow" button to grant the necessary permissions

## Resources

[mockaroo](https://www.mockaroo.com/)

[Google Apps Script](https://developers.google.com/workspace)

[Google Apps Script Guide with the Sheets](https://developers.google.com/apps-script/guides/sheets)

[Apps Script Reference for the Sheets](https://developers.google.com/apps-script/reference/spreadsheet)

## Thank you!

Thank you for your time and for reading this!

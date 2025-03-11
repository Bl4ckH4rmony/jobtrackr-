# JobTrackr

JobTrackr is a web application designed to help job seekers track and manage their job applications. It provides a centralized platform to log job applications, update their status, and visualize progress through intuitive statistics.

## Features

- **Add Job Applications:** Log new job applications with details like company name, position, date applied, and status.
- **View Applications:** See a list of all job applications with options to edit or delete entries.
- **Statistics Dashboard:** Visualize job application progress with charts and metrics.
- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices.

## Changelog

### Features Added

- **Editable Job Applications:** Users can now edit all fields of existing job applications inline within the "View Jobs" page.
- **Hidden Navigation on Home Page:** The navigation links are now hidden on the home page ("/").

### Bug Fixes

- **Fixed: `TypeError: updateJob is not a function` error:** Resolved the error that occurred when saving edits.
- **Fixed: Incorrect Application Update:** Resolved the issue where editing one job application would update all applications due to missing unique IDs for newly added jobs.

## Technologies Used

- **Frontend:** React, CSS, React Router
- **Deployment:** Vercel
- **Data Persistence:** Local Storage

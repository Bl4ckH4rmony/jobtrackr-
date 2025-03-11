# CSS Styling Plan for JobTrackr

This document outlines the planned CSS changes for the JobTrackr application.

## 1. Center Titles

*   **File:** `jobtrackr/src/pages/Statistics.jsx`

    ```diff
    <<<<<<< SEARCH
      <div className="statistics">
    =======
      <div className="statistics text-center">
    >>>>>>> REPLACE
    ```

    *   `start_line`: 7
    *   `end_line`: 7

*   **File:** `jobtrackr/src/pages/ViewJobs.jsx`

    ```diff
    <<<<<<< SEARCH
      <div className="view-jobs">
    =======
      <div className="view-jobs text-center">
    >>>>>>> REPLACE
    ```

    *   `start_line`: 14
    *   `end_line`: 14

*   **File:** `jobtrackr/src/pages/AddJob.jsx`

    ```diff
    <<<<<<< SEARCH
      <h1 style={{ textAlign: 'center' }}>Add Job Application</h1>
    =======
      <h1>Add Job Application</h1>
    >>>>>>> REPLACE
    ```
        
    *    `start_line`: 9
    *   `end_line`: 9

## 2. Reduce Search Bar Length

*   **File:** `jobtrackr/src/components/SearchFilter.jsx`

    ```diff
    <<<<<<< SEARCH
      className="search-filter"
    =======
      className="search-filter w-3/4"
    >>>>>>> REPLACE
    ```

    *   `start_line`: 18
    *   `end_line`: 18

## 3. Unify Button Styles

*   **File:** `jobtrackr/src/index.css` (Add new CSS class after line 164)

    ```css
    .btn-primary {
      background-color: rgb(43, 1, 85);
      color: white;
      padding: 10px;
      border: 1px solid #374151;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }

    .btn-primary:hover {
      background-color: rgb(71, 60, 168);
    }
    ```

*   **File:** `jobtrackr/src/components/JobCard.jsx`

    ```diff
    <<<<<<< SEARCH
          <button onClick={() => deleteJob(job)}>Delete</button>
    =======
          <button onClick={() => deleteJob(job)} className="btn-primary">Delete</button>
    >>>>>>> REPLACE
    ```

    *   `start_line`: 69
    *   `end_line`: 69

    ```diff
    <<<<<<< SEARCH
          <button onClick={handleEdit}>Edit</button>
    =======
          <button onClick={handleEdit} className="btn-primary">Edit</button>
    >>>>>>> REPLACE
    ```

    *   `start_line`: 70
    *   `end_line`: 70

    ```diff
    <<<<<<< SEARCH
          <button onClick={handleSave} >Save</button>
    =======
          <button onClick={handleSave} className="btn-primary">Save</button>
    >>>>>>> REPLACE
    ```

    *   `start_line`: 60
    *   `end_line`: 60

    ```diff
    <<<<<<< SEARCH
          <button onClick={handleCancel} >Cancel</button>
    =======
          <button onClick={handleCancel} className="btn-primary">Cancel</button>
    >>>>>>> REPLACE
    ```

    *   `start_line`: 61
    *   `end_line`: 61
4.  **Style Edit Job Form Fields:**

    *   File: `jobtrackr/src/components/JobCard.jsx`

        ```diff
        <<<<<<< SEARCH
          <div className="job-card">
        =======
          <div className="job-card job-form">
        >>>>>>> REPLACE
        ```

        *   `start_line`: 31
        *   `end_line`: 31
5. **Reduce JobCard Size**
    * File: `jobtrackr/src/index.css`
      ```diff
      <<<<<<< SEARCH
      .job-card {
        background-color: rgba(17, 17, 17, 0.8); /* Semi-transparent black */
        padding: 20px;
        border: 1px solid #374151; /* Dark gray border */
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px); /* Blur effect */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      =======
      .job-card {
        background-color: rgba(17, 17, 17, 0.8); /* Semi-transparent black */
        padding: 15px; /* Reduced padding */
        border: 1px solid #374151; /* Dark gray border */
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px); /* Blur effect */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        max-width: 600px; /* Added max-width */
        margin-left: auto;
        margin-right: auto;
      }
      >>>>>>> REPLACE
      ```
      * `start_line`: 174
      * `end_line`: 181

      ```diff
      <<<<<<< SEARCH
      .job-card h3 {
        margin: 0;
        font-size: 20px;
        color: #e5e7eb; /* Light text */
      }
      =======
      .job-card h3 {
        margin: 0;
        font-size: 18px; /* Reduced font size */
        color: #e5e7eb; /* Light text */
      }
      >>>>>>> REPLACE
      ```
      * `start_line`: 189
      * `end_line`: 193

      ```diff
      <<<<<<< SEARCH
      .job-card p {
        margin: 5px 0;
        color: #9ca3af; /* Gray text */
      }
      =======
      .job-card p {
        margin: 3px 0; /* Reduced margin */
        color: #9ca3af; /* Gray text */
        font-size: 14px;
      }
      >>>>>>> REPLACE
      ```

      *   `start_line`: 195
      *   `end_line`: 198
### **Requirements:**

1. **Chrome extension:** Create a Chrome extension with a popup that includes a button to enable/disable the feature and a list of summaries generated so far.
2. **React components:** Create reusable React components for the popup, highlights list, and the summary tooltip. The highlights list should be sortable and filterable by date and tags.
3. **State management:** Use React hooks and context API to manage the application state. Ensure that the state is properly typed using TypeScript.
4. **TypeScript:** Strictly use TypeScript throughout the project and ensure proper typing for all components and functions.
5. **Highlight functionality:** When the feature is enabled, allow users to highlight text on a webpage by selecting it with their mouse. When a user clicks on a highlight, show the summary in the tooltip along with the tags associated with that highlight.
6. **API integration:** Integrate the OpenAI API to process the highlighted text and generate a brief summary. Ensure that the API calls are properly handled in the backend.
7. **Display the summary:** Show the summary in a tooltip when the user hovers over the highlighted text, using a custom React component. Ensure that the tooltip is properly positioned and styled.
8. **Backend:** Implement a NestJS backend that will handle the API calls to OpenAI and any necessary processing. The backend should be properly tested using Jest and Supertest.
9. **Data persistence:** Store the user's highlights and summaries using MongoDB. Ensure that the data models are properly typed and that the database calls are properly handled.
10. **Testing:** Write unit tests for your code to ensure the proper functionality of the Chrome extension, with a focus on testing React components and TypeScript typings. Write integration tests for the backend using Jest and Supertest.

### **Stretch Goals (Optional):**

1. **User authentication:** Implement a user authentication system using React components and context API, allowing users to access their saved highlights and summaries across devices. Use JWT tokens for authentication and implement refresh tokens for security.
2. **Tagging system:** Allow users to categorize their highlights with tags for easier organization and retrieval. Use React components to display and manage tags. Implement a tag autocomplete feature for improved usability.
3. **Export functionality:** Enable users to export their highlights and summaries as a PDF, CSV, or other formats using a dedicated React component. Ensure that the export feature is properly tested and handles large amounts of data.

### **Evaluation Criteria:**

- Code quality, readability, and organization, with a focus on React and TypeScript
- Proper use of React, NestJS, and TypeScript, including typing, hooks, and context API
- Effective integration with OpenAI API and MongoDB
- Responsive and user-friendly design of the Chrome extension
- Completeness of the solution and extra features implemented
- Proper testing of the frontend and backend, including unit tests and integration tests
# The Spice App

##### Introducing the ultimate tool for professional and aspiring cooks alike - a CRUD app designed to keep track of all the exotic spices that are out there! Built using Python and Django for the backend, and TypeScript and React for the frontend, this app provides users with the ability to add spice names, descriptions, and images, and manage them with all CRUD functionality. With this app, cooking enthusiasts can now easily catalog and organize their spice collections, making their culinary adventures more exciting than ever before.

### Technologies Used

#### Backend

- Python
- Django
- Postgres
- render.com

#### Frontend

- Typescript
- HTML
- CSS
- Tailwind CSS
- netlify.com

### Routes & Components

| Route      | Element | Loader      | Action       | Summary                                         |
| ---------- | ------- | ----------- | ------------ | ----------------------------------------------- |
| /          | Index   | indexLoader |              | Loads up list of spices                         |
| spice/:id  | Show    | showLoader  |              | Loads up an individual spices                   |
| create     | Create  |             | createAction | Handles submission of create form for one spice |
| update/:id | Update  |             | updateAction | Handles submission of update form for one spice |
| delete/:id | Delete  |             | deleteAction | Handles submission of delete form for one spice |

### User Stories

- As a user, I want to be able to see a list of my spices.
- As a user, I want to click on one of the spices and see the description and image of the spice on the show page.
- As a user, I want to be able to add, edit, and delete spices.

### Model

<img src="https://i.imgur.com/sq6giIs.png" width="600px" style="border: 2px solid black">

### Wireframes

#### Index Page - Desktop and mobile

<img src="https://i.imgur.com/nq1hJqd.jpg" width="600px">
<img src="https://i.imgur.com/DcVu9tC.jpg" width="300px">

#### Show Page - Desktop and mobile

<img src="https://i.imgur.com/69f5eCP.jpg" width="600px">
<img src="https://i.imgur.com/m9TUVmN.jpg" width="300px">

<!-- prettier-ignore-start -->
### Daily Plan

| Day | Goal |
|-----|------|
| 2/17 | Finish readme, repos, and deploy, then get project approved.|
| 2/18 | Work on all frontend functionality.|
| 2/19 | Learn the basics of Tailwind CSS and start styling app.|
| 2/20 - 2/24 | Continue working on styling. |
| 2/25 | Make final changes, test app, check/test deployed site.|
| 2/26 | Practice presentation.|
| 2/28 | Presentation day! |
<!-- prettier-ignore-end -->

### Link to Project

[Backend Deployed Project Page](https://the-spice-app-django.onrender.com)  
[Frontend Deployed Project Page](https://visionary-biscotti-9f36e0.netlify.app/)

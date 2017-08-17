React Kanban

A digital Kanban board made with React
kanban_guide_print_kpo_bleed_board2-1024x517

"The Kanban technique emerged in the late 1940s as Toyota’s reimagined approach to manufacturing and engineering. ... The system’s highly visual nature allowed teams to communicate more easily on what work needed to be done and when. It also standardized cues and refined processes, which helped to reduce waste and maximize value." - via LeanKit.com
Introduction

Build a Digital Kanban board using:

React for building the front-end User-Interface (UI)
HTML and CSS (via sass)
Express as the Server
Sequelize as your ORM for the Postgresql Datastore.
Layout/Style Guide

screen shot 2016-11-04 at 1 21 12 pm

Specifications

Card (component)

Cards contain information about a task.

Card Properties

A Card has 6 properties:

A unique identifier, e.g. "Card-Id #001".
A Title
A priority selection
A status, the status of a card. Should match the column the card can be found in. Columns: "Queue", "In Progress", or "Done".
A "Created by" field. This should display name of the person who created the task.
An "Assigned to field". This should display the name of the person who is currently working on the task.
Creating a new Card

There should be a form which is used to create a new Card. When a card is first created we need minimal information, the information needed is:

Title (String)
Priority (low, Medium, High, Blocker)
Created By (Full Name)
Assigned To (Full Name)
All other fields are not needed when creating a new Card. The other fields: "Unique Identifier", and "Status" fields will be automatically added by the application.

Cards in Columns

When a Card appears in a column there should be a way (something clickable?) to move that card to either the next or previous column.

Columns (component)

Columns contain Cards and each column is a collection of Cards that share the same status.

The board you will building will have 3 columns:

Queue
A card will automatically appear in this column after creation.
In Progress
When a card is being worked on it should be displayed in this column.
Done
When work has finished on a card it should be displayed in this column.
caveat: do not try to implement click-and-drag just yet, save it as a stretch goal!

Kanban Board (Main Component)

A Kanban board contains multiple Columns (and Columns contain Cards). This is the main application component. It is responsible for retreiving data and passing it down to other child components.

Server

Build an Express server which will serve your index.html and static assets.

Routes

Your server will have these routes:

RESTful API endpoints to create, read, update, and delete kanban cards for your application.
Remember to use MVC architechture: Models, Views, Controllers!
One route to
Database

MongoDB and Mongoose (ORM). Create a UML Schema for your database, consider LucidChart. Add these diagrams to your project.

Styles

Make It Pretty!™

Responsive Layout

create a desktop and mobile view. Tablet view is not needed (possible stretch goal).
References

Kanban Servies

Trello

Taiga

Asana
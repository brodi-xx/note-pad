# Note Pad

## Description

An app with the ablility to write and save notes, so that a user can organize their thoughts and keep track of tasks that need to be complete

The application has a db.json file db on the back end that is used to store and retrieve notes using the fs module.

The following HTML routes have been created:

GET /notes returns notes.html file.

GET * returns the index.html file.

GET /api/notes reads the db.json file and return all saved notes as JSON.

POST /api/notes should receives a new note to save on the body and added to the db.json file, and then returns the new note to the client. Each note has a unique id when it's saved using the uuid package

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To install the application, you would pull the files from my repo and install node and express.js

## Usage

Once you have the file running, you are able to add, save, delete your notes

## Credits

I ultized a tutoring session with Scott who is a TA as well as a youtube tutorial on routes and class content

<img src = "https://github.com/brodi-xx/README-Generator-/blob/main/Develop/Screenshot%202023-04-23%20at%205.57.55%20PM.png?raw=true">

## License

MIT

## Contributing

Use my information below


## Questions

For questions or feedback, please contact me via email or GitHub:

- [GitHub Profile](https://github.com/brodi-xx)
- [Email](mailto:brodi.leblanc@gmail.com)

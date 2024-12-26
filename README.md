# Portfolio Website - V1

![Website_v1](https://github.com/user-attachments/assets/e4febb1b-f134-4550-8af4-58042881f13e)

## Table of Contents
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Customization](#customization)
- [Development](#development)
- [Build](#build)

## Project Overview
This portfolio website serves as a showcase of my projects, skills, and personal information. It's built on Vue.js (version 2) and styled using Tailwind CSS. The project is optimized for modern browsers and has scripts for development, production, and Tailwind CSS integration.

## Installation
If you want to clone this project and set it up on your local environment, follow the steps below:

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn** (npm comes with Node.js, but you can install Yarn separately if preferred)

Note: In the following instructions, I will use **npm** commands, but you can also use **yarn** instead.

### Clone the repository

```bash
git clone <repository_url>
cd website-v1
```

### Install dependencies
Once inside the project folder, run the following command to install all project dependencies:

```bash
npm install
```
This will install both production and development dependencies as listed in the `package.json` file.

## Customization
Feel free to customize the website to your liking. You can change the content, linking to your projects, and personal information.
To customize the sidebar links and the project cards, edit the `src/settings.json`:
```
"projects":[
    {
      "title": "Project 1",
      "description": "Description of project 1",
      "usedTechnologies": ["HTML", "CSS", "JavaScript"],
      "githubUrl": "[GITHUB_URL]"
    },
    {
      "title": "Project 2",
      "description": "Description of project 2",
      "usedTechnologies": ["HTML", "CSS", "JavaScript"],
      "githubUrl": "[GITHUB_URL]"
    },
    {
      "title": "Project 3",
      "description": "Description of project 3",
      "usedTechnologies": ["HTML", "CSS", "JavaScript"],
      "githubUrl": "[GITHUB_URL]"
    }
  ],
  "gitHubProfileUrl": "[GITHUB_PROFILE_URL]",
  "stackoverflowProfileUrl": "[STACKOVERFLOW_PROFILE_URL]",
  "email": "[EMAIL]"
```
*Note: Currently the project cards are limited to 3.*

## Development
To start the development environment, there are two main scripts you need to run:

### 1. Start Tailwind CSS watcher
To compile your Tailwind CSS styles, use:
```bash
npm run dev-tailwind
```
This will start a watcher that compiles the Tailwind CSS from `src/main.css` into `dist/build.css`. Any changes to the Tailwind config or CSS will trigger a rebuild.

### 2. Start Vue development server
```bash
npm run dev
```
This will start the webpack-dev-server, and the site will be available on your local network at `http://localhost:8080`. The server supports hot-reloading, so any changes made will be reflected automatically.

## Build
Build is currently not working. Feel free to contribute :)

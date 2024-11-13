---
layout: page
title: GitHub pages
description: 
importance: 2
category: work
giscus_comments: true
---

Regardless of what your work is, documenting the work is very important. If we do not document our work, with the passage of time we will forget the steps and process that helped us achieve a goal. Also, documentation helps showcase your work, collaborate with others, and also help others in learning. It also helps improve your writing.

GitHub pages are a static website deployed on GitHub, free of charge, thanks to GitHub. The pages are used for documentation (for everything related to open source projects on GitHub) and GitHub user profiles.  In this project, we are going to learn how to create and deploy multi-repo GitHub pages under a GitHub organization, with [giscus app](https://giscus.app/) for comments. 

## 1. Setup a GitHub organization

The purpose of creating an organization is to isolate all the repos we will need in this project. You will be the only member of the organization, there is no need to add other members for now.
- Exercise: Login into your GitHub account and create a free public organization with a name of your choice, for example "gh-pages-project". For help, visit [GiHub docs](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

## 2. Setup a GitHub pages repo 

We have an organization, "gh-pages-project" (the org name that you picked while creating the organization), we need a repo under this organization that is necessary for deploying GitHub pages.
- Exercise: Go to your organization homepage, click on repositories, and create a new public repo with *your organization name* as the owner and the repo name "[your org name].github.io". Use "add a readme" option, for .gitignore option use jekyll, and for license use MIT license.

If all of the steps were successful, visit the address https://[your org name].github.io and --you have a website!

## 3. Add a jekyll theme

Our website layout is very basic so far. To improve it, we need to use a jekyll theme that is compatible with GitHub pages. Visit [supported themes](https://pages.github.com/themes/) to see a list of the jekyll themes we can use for this project. To use the theme, we need to create a new file at the root of our repo.

- Exercise: From homepage of your repo ("[your org name].github.io"), created a new file named _config.yml with the following content:

```
title: GitHub Pages
description: Bookmark for updates!
remote_theme: pages-themes/cayman
plugins:
- jekyll-remote-theme
```
Where "cayman" is the name of the theme we want to use. You may use any of the [supported themes](https://pages.github.com/themes/).

## 4. Create your first page

So far we have been using our README.md file for our homepage. Let us create our first page with some content in it.

- Exercise: Create a new file with the path "pages/home.md" and paste the following content in it and commit your changes:
  ```
  ---
  layout: default
  title: GitHub Pages
  description: A project for learning how to create and deploy GitHub pages
  permalink: /
  ---
  This is my project about GitHub pages.
  ```

Wait for a minute or so as your site rebuilds behind the scene, visit the pages site (https://[your org name].github.io) and refresh your browser, you will see the updated content.

## 5. Enable GitHub pages for another repo

Sometimes we have multiple projects in several repos and we want to keep the documentation where it belongs. It would be great if we have a way to show all our documentation on a single website. Luckily, it is very easy with GitHub pages. Below we go through the steps needed to enable the pages from a different repo.

- Exercise: Go to the homepage of the org for this project and click on repositories and create a new repository with the name "project-repo" (or any name you like) under the org for this project. Use options for creating readme.md, .gitignore (jekyll), and MIT license.

- Exercise: Enable the GitHub pages for the new repo you have created. Visit the repo homepage and:
  - click on "settings" 
  - click on "pages" on the left sidebar
  - under Build and Deployment, find the label "branch" select "main" and change "/(root)" to "/docs", then click "save".

The last step above is necessary for enabling pages for a repo, it was not needed for the repo "gh-pages-project.github.io" as the pages are enabled by default for a repo with name *.github.io.

- Exercise: Create a page in the new repo:
  - create a file with the path "docs/_config.yml" in the repo we have created above (named "project-repo") and paste the following contents in it:
    ```
    title: GitHub Pages for a project repo
    description: Bookmark for updates!
    remote_theme: pages-themes/cayman
    plugins:
    - jekyll-remote-theme
    ```
  - create a file with path "docs/home.md" and paste the following contents in it:
      ```
      ---
      layout: default
      title: Project Homepage
      description: Docs for the project-repo
      permalink: /
      ---
      This is the docs homepage for the [project-repo](https://github.com/gh-pages-project/project-repo). Also visit the [root page](https://gh-pages-project.github.io/) for my GitHub profile.
      ```

Visit the [pages](https://gh-pages-project.github.io/project-repo) and if everything went well you will see the homepage for the new repo. Well done! 
Before we take a coffee break, let us create a link to the above page: 
- Exercise: Create a link to the project-repo docs on the homepage of the repo "[your org name].github.io":
  - Go to the repo "[your org name].github.io" and add the following line at the bottom of the file "pages/home.md" (you will need replace [your org name] with the name of your org:
    ```
    Visit my [project-repo](https://github.com/[your org name]/project-repo) [docs](https://[your org name].github.io/project-repo/).
    ```

Wait for a minute or so and visit the  page https://[your org name].github.io/ and click on the link you just created. 
Great, now we can take a coffee break.







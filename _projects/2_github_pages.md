---
layout: page
title: GitHub Pages
description: A basic project on how to create and deploy GitHub pages
importance: 2
category: work
giscus_comments: true
---

Documenting your work is very important. If we do not document our work, with the passage of time we will forget the steps and process that helped us achieve our goal. Also, documentation helps showcase your work, collaborate with others, and makes it easier for others to build upon your dreams after you leave (:sad: I know!). It also helps improve your writing. GitHub provides an excellent [tools and service](https://docs.github.com/en/pages) for this purpose. 

GitHub pages is a static website deployed on GitHub, free of charge, thanks to GitHub. The pages are used for documentation (for everything related to open source projects on GitHub) and GitHub user profiles.  In this project, we are going to learn how to create and deploy multi-repo GitHub pages under a GitHub organization, with [giscus app](https://giscus.app/) for comments. 

## 1. Setup a GitHub organization

The purpose of creating an organization is to isolate all the repos we will need in this project. You will be the only member of the organization, there is no need to add other members for now.
- Exercise: Login into your GitHub account and create a free public organization with a name of your choice, for example, gh-pages-project. For help, visit [GiHub docs](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

## 2. Setup a GitHub pages repo 

We now have the organization named gh-pages-project (or the organization name that you picked while creating the organization). we need a repo named [your organization name].github.io under this organization. This repo is *required* for deploying GitHub pages.
- Exercise: Go to your organization homepage (https://github.com/[your organization name]), click on repositories, and create a new public repo with *your organization name* as the owner and the repo name [your organization name].github.io. Use *add a readme* option, .gitignore option (select jekyll from dropdown), and for license use MIT license.

If all of the steps were successful, visit the site at https://[your organization name].github.io and you see your static website hosted on GitHub!

## 3. Add a theme

Our website layout is very basic so far. To improve it, we need to use a theme. Github Jekyll based [supported themes](https://pages.github.com/themes/) make this step very simple. To use the theme, we need to create a new file at the root of our repo.

- Exercise: Create a new file named _config.yml in the root folder of the repo [your organization name].github.io with the following content:

```
title: GitHub Pages
description: Bookmark for updates!
remote_theme: pages-themes/cayman
plugins:
- jekyll-remote-theme
```
Where *cayman* is the name of the theme we want to use. You may use any of the [supported themes](https://pages.github.com/themes/).

## 4. Create your first page

So far we have been using our README.md file for our homepage. Let us create our first page with some content in it.

- Exercise: From root folder of your repo ([your organization name].github.io), create a new file with the path pages/home.md and paste the following content in it and commit your changes:
  ```
  ---
  layout: default
  title: GitHub Pages
  description: Create and deploy GitHub pages
  permalink: /
  ---
  This project is about GitHub pages.
  ```

Wait for a minute or so as GitHub rebuilds your site, visit the site (https://[your organization name].github.io) and refresh your browser, you will see the updated content.

## 5. Enable GitHub pages for another repo

Sometimes we have multiple projects in several repos and we want to keep the documentation where it belongs. It would be great if we have a way to show all our documentation on a single website. GitHub makes it very easy, below we go through the steps needed to enable the pages from a different repo. The process may be used for any new repos you create under the organization.

- Exercise: Go to the homepage (https://github.com/[your organization name]) of the organization for this project and click on *repositories* link and create a new public repository with the name "project-repo" (or any name you like) under the organization for this project. Use options for creating readme.md, .gitignore (jekyll), and MIT license.

- Exercise: Enable the GitHub pages for the new repo you have created. Visit the repo homepage and:
  - click *settings* 
  - click *pages* on the left sidebar
  - under Build and Deployment, find the label "branch" select *main* and change */(root)* to */docs*, then click *save*.

The last step above is necessary for enabling pages for a repo, it was not needed for the repo [your organization name].github.io as the pages are enabled by default for a repo with the name *.github.io.

- Exercise: Create a page in the new repo:
  - To add a theme, create a file with the path docs/_config.yml in the root folder of the repo (named project-repo) and paste the following content in it:
    ```
    title: project-repo docs
    description: Docs for the project-repo
    remote_theme: pages-themes/cayman
    plugins:
    - jekyll-remote-theme
    ```
  - Create a file with the path *docs/home.md* and paste the following content in it after editing the web links according to the name you picked for your organization:
      ```
      ---
      layout: default
      title: Project Homepage
      description: Docs for the project-repo
      permalink: /
      ---
      This is the docs homepage for the [project-repo](https://github.com/gh-pages-project/project-repo). Also visit the [root page](https://gh-pages-project.github.io/) for my GitHub profile.
      ```

Visit the link https://[your organization name].github.io/project-repo and if everything went well you will see the homepage for the  project repo docs. Well done! 
Before we take a coffee break, let us create a link to the above page: 
- Exercise: Create a link to the project-repo docs on the homepage of the repo [your organization name].github.io:
  - Go to the repo [your organization name].github.io and add the following line at the bottom of the file pages/home.md (replace gh-pages-project with the name of your organization:
    ```
    Visit my [project-repo](https://github.com/gh-pages-project/project-repo) and related [docs](https://gh-pages-project.github.io/project-repo/).
    ```

Wait for a minute or so and visit the  page https://[your organization name].github.io/ and click on the link you have just created. 
Great, now we can take a coffee break.

## 6. Enable comments

Taking comments from others about your work is a step towards collaboration and it also helps improve your work. Let us enable comments on our project-repo docs:

- Exercise 







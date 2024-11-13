---
layout: page
title: GitHub pages
description: 
importance: 2
category: work
giscus_comments: true
---

GitHub pages are a static website deployed on GitHub free of charge, thanks to GitHub. The pages are used for documentation (for everything related to open source projects on GitHub) and GitHub user profiles.  In this project, we are going to learn how to create and deploy multi-repo GitHub pages under a GitHub organization, with [giscus app](https://giscus.app/) for comments. 

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

## Create your first page

So far we have been using our README.md file for our homepage. Let us create our first page with some content in it.

- Exercise: Create a new file with the path "pages/home.md" and paste the following content in it:
  ```
  ---
  layout: default
  title: GitHub Pages
  description: A project for learning how to create and deploy GitHub pages
  permalink: /
  ---
  ```


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}

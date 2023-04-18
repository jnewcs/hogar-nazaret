# Repo for hogar-nazaret
The repo for the website for the Hogar Albergue para Niños Jesús de Nazaret. It is built on [Jekyll](https://jekyllrb.com), an open source project based on Ruby.

Having our site built on Jekyll, allows us to generate a static website which can be hosted on Github Pages, reducing our cost and allowing us to host the code on Github.

# Development Setup
The following instructions are meant for people who want to build the site locally (on your own machine) for development purposes. If you don't want to build the site locally, you can always modify any file in the `master` branch and it will build through GitHub Pages. This is, however, riskier since you cannot verify the changes before they become live.

Before you can build the site locally, you need a few things setup:

1. A GitHub account
    - You can create an account by going to [www.github.com](https://www.github.com) and signing up
    - You also need to be a collaborator for this repo. Please contact j.newcomb@outlook.com to request access

2. A way to interact with git on your computer
    - You can do this through one of two ways:
        - Github Desktop
            - If you haven't used git much before, this is probably the right choice. It gives you [a visual interface for git](https://desktop.github.com)
        - Using git in your command line
            - [Link to Installation Guide](https://help.github.com/en/github/getting-started-with-github/set-up-git)
            - After you install git, you probably want to use SSH so you don't have to reauthenticate every single time you commit something. To do this, you need to attach a SSH Key Pair to your GitHub account:
                - If you haven't done so already, you should [generate a personal ssh key pair (https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) and register it with your GitHub account.
                - I usually take all the default values (just keep hitting enter until it completes) when creating the SSH key pair.
                - Once done, login to [www.github.com](https://www.github.com) and navigate to your account settings. Under SSH Keys, click on the Add button and paste the contents of `~/.ssh/id_rsa.pub` into the key area. More detailed instructions can be found [here](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

3. Ruby installed
    - Jekyll requires a Ruby version installed and the Jekyll developer site has [great documentation to install Ruby on your computer](https://jekyllrb.com/docs/installation/) for various operating systems.
    - If you can run `ruby -v` and see a valid result, you have a version of Ruby installed on your computer and you should be able to proceed with the rest of the setup.
    - Jekyll needs Ruby 2.5 or higher, so you might have to install a higher version of Ruby to begin.
    - As a heads up, you will probably need `sudo` access to install Ruby.

4. Jekyll installed
    - Once Ruby has been installed, you can install Jekyll following the [documentation from Jekyll](https://jekyllrb.com/docs/installation/)
    - The basic command to install Jekyll should look something like this: `gem install --user-install jekyll`

5. Install Bundler
    - Since Jekyll is written in Ruby, it utilizes [gems](https://jekyllrb.com/docs/ruby-101/#gems) to add functionality to the sites. A lot of Jekyll repos, including this one, have a `Gemfile` - a list of gems required for the site. The purpose of the Bundler is to install gems from a `Gemfile`
    - Once Ruby is installed, you should be able to run `gem install bundler` to install the Bundler.


### Clone Repo

Once those items ^ are setup, you should clone this repo (using SSH) into a folder on your computer. For my workflow, I put the repo in the `~/personal_repos` folder, but you can place the repo wherever you can. You can run the following (you might have the make the folder first if it does not exist):

```
cd ~/personal_repos

git clone git@github.com:jnewcs/hogar-nazaret.git
```

### Run Bundler
Once the repo has been cloned locally, you should navigate into the repo and run bundler to install the [gems](https://jekyllrb.com/docs/ruby-101/#gems) specified in this repo:

```
cd ~/personal_repos/hogar-nazaret/site  # You don't need this if you are already in the repo

bundle install
```

### Build & view the site locally
You are now ready to preview content locally. Jekyll is a static site generator so every time we change a file, it generates a new build of the site and stores it within the `_site` folder locally. This mimics the building process that GitHub Pages does for us to publish the site to production at https://hogarjesusdenazaret.org. This is the basic command you can run to build the site locally:

```
cd ~/personal_repos/hogar-nazaret/site  # You don't need this if you are already in the repo

bundle exec jekyll serve
```

This command should output something like this:

```
Configuration file: /Users/jxnewcomb/personal_repos/hogar-nazaret/_config.yml
            Source: /Users/jxnewcomb/personal_repos/hogar-nazaret
       Destination: /Users/jxnewcomb/personal_repos/hogar-nazaret/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for noticias
       Jekyll Feed: Generating feed for upcoming_events
       Jekyll Feed: Generating feed for proximos_eventos
       Jekyll Feed: Generating feed for posts
   GitHub Metadata: No GitHub API authentication could be found. Some fields may be missing or have incorrect data.
                    done in 8.791 seconds.
 Auto-regeneration: enabled for '/Users/jxnewcomb/personal_repos/hogar-nazaret'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

If it works properly, you now can preview the site at http://127.0.0.1:4000. If the `serve` command is still running and you make a change, you can see that change reflected locally at http://127.0.0.1:4000 once the build finishes. Every time you change something, it might take `7+` seconds for the build to finish and for you to be able to see the change in the browser.

### Preview content locally to mimic "Staging" environment
We currently use [Forestry.io](https://forestry.io/) as our content management system (CMS). Within our CMS, we can preview content before commiting the changes to the `master` branch which will change https://hogarjesusdenazaret.org. We call this our "Staging" environment. If you want to view the "Staging" environment locally, you can run this command:

```
cd ~/personal_repos/hogar-nazaret/site  # You don't need this if you are already in the repo

bundle exec jekyll serve --drafts --future --unpublished --port 8080 --host 0.0.0.0 -d _site
```

# Development Notes
1. We use [Bulma](https://bulma.io) as our CSS Framework. It is a lightweight framework based on Flexbox and does not bring in any JS.

2. To standardize file configuration (tabs vs. spaces, newlines at the end of files), we use [EditorConfig](https://editorconfig.org/)
    - For a lot of text editors, you can install the EditorConfig extension and it will automatically configure any file you add or change
    - It will do things like adding an empty line to the end of the file or trimming whitespace from the end of a line.

3. We use Tiny Slider for our Highlight and News carousels: [Link to Github](https://github.com/ganlanyuan/tiny-slider)

4. To track page views and event funnels, we use [Woopra](https://www.woopra.com).

5. To process payments and webhooks, we have a Ruby on Rails API that is hosted on Heroku. Here is the link the [repo](https://github.com/jnewcs/hogar-nazaret-api)

5. To actually deploy, we don't use the [pages-gem](https://github.com/github/pages-gem), we are using Github Actions following this [blog post](https://sujaykundu.com/blog/introducing-devlopr-easily-deploy-your-jekyll-blog-using-github-pages-and-github-actions/). This allows us to use Jekyll 4.2.0 which is a lot faster at building the website.

6. To compress the photos, we are using a Google CLI tool called [Squoosh](https://github.com/GoogleChromeLabs/squoosh/tree/dev/cli). Here is an example command where we are compressing multiple photos:

```
npx @squoosh/cli --mozjpeg '{"quality":40,"baseline":false,"arithmetic":false,"progressive":true,"optimize_coding":true,"smoothing":0,"color_space":3,"quant_table":3,"trellis_multipass":false,"trellis_opt_zero":false,"trellis_opt_table":false,"trellis_loops":1,"auto_subsample":true,"chroma_subsample":2,"separate_chroma_quality":false,"chroma_quality":75}' 'disaster prep - 2.jpg' 'disaster prep - 3.jpg'
```

7. We ran into issues bumping the Jekyll version to 4.3. We followed [this](https://github.com/jekyll/jekyll/pull/9225)

8. If you are developing on a `m1 mac`, you might run into a problem bundle installing. Try installing the current version of Ruby like this first:

```
arch -arm64 rvm install 3.0.1
rvm use 3.0.1
arch -arm64 gem install eventmachine -v '1.2.7' -- --with-openssl-dir=$(brew --prefix openssl)
```

https://github.com/eventmachine/eventmachine/issues/932

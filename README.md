# Repo for hogar-nazaret
The repo for the website for the Hogar Albergue para Niños Jesús de Nazaret. It is built on [Jekyll](https://jekyllrb.com), an open source project based on Ruby.

Having our site built on Jekyll, allows us to generate a static website which can be hosted on Github Pages, reducing our cost and allowing us to host the code on Github.

# Development Setup
The following instructions are meant for people who want to build the site locally (on your own machine) for development purposes. If you don't want to build the site locally, you can always modify any file in the `master` branch and it will build through GitHub Pages. This is, however, riskier since you cannot verify the changes before they become live.

Before you can build the site locally, you need a few things setup:

1. Git setup on your computer - [Link to Installation Guide](https://help.github.com/en/github/getting-started-with-github/set-up-git)

2. A GitHub account
    - You can create an account by going to [www.github.com](https://www.github.com) and signing up

3. An SSH Key Pair attached to your GitHub account
    - If you haven't done so already, you should [generate a personal ssh key pair](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) and register it with your GitHub account.
    - I usually take all the default values (just keep hitting enter until it completes) when creating the SSH key pair.
    - Once done, login to [www.github.com](https://www.github.com) and navigate to your account settings. Under SSH Keys, click on the Add button and paste the contents of `~/.ssh/id_rsa.pub` into the key area. More detailed instructions can be found [here](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

4. Ruby installed
    - Jekyll requires a Ruby version installed and the Jekyll developer site has [great documentation to install Ruby on your computer](https://jekyllrb.com/docs/installation/) for various operating systems.
    - If you can run `ruby -v` and see a valid result, you have a version of Ruby installed on your computer and you should be able to proceed with the rest of the setup.

5. Jekyll installed
    - Once Ruby has been installed, you can install Jekyll also following the [documentation from Jekyll](https://jekyllrb.com/docs/installation/)
    - The basic command to install Jekyll should look something like this: `gem install --user-install jekyll`

6. Install Bundler
    - Since Jekyll is written in Ruby, it utilizes [gems](https://jekyllrb.com/docs/ruby-101/#gems) to add functionality to the sites. A lot of Jekyll repos, including this one, have a `Gemfile` - a list of gems required for the site. The Bundler will install gems from a `Gemfile`
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
bundle install
```

### Build & view the site locally
We are now ready to preview content locally. Jekyll is a static site generator so every time we change a file, it generates a new build of the site and stores it within the `_site` folder locally. This mimics the building process that GitHub Pages does for us to publish the site to production at https://hogarjesusdenazaret.org. This is the basic command you can run to build the site:

```
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

If it works properly, we now can preview the site at http://127.0.0.1:4000 and interact with it like we do the production site. If the `serve` command is still running, anytime we make a change, it will be reflected locally at http://127.0.0.1:4000 once the build finishes.

### Preview content locally in Staging
We currently use [Forestry.io](https://forestry.io/) as our content management system (CMS). Within our CMS, we can preview content before commiting the changes to the `master` branch which will change https://hogarjesusdenazaret.org. Sometimes, we want to view preview content locally. To do that, we can run this command:

```
bundle exec jekyll serve --drafts --future --unpublished --port 8080 --host 0.0.0.0 -d _site
```

# Development Notes
1. To standardize file configuration (tabs vs. spaces, newlines at the end of files), we use [EditorConfig](https://editorconfig.org/). For a lot of text editors, you can install the EditorConfig extension and it will automatically configure any file you add or change, doing things like adding an empty line to the end of the file and trimming whitespace from the end of a line.

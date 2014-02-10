Gateway Game
====

build status
====
master [![Build Status](https://travis-ci.org/ChristianMurphy/gateway.png?branch=master)](https://travis-ci.org/ChristianMurphy/gateway)

develop [![Build Status](https://travis-ci.org/ChristianMurphy/gateway.png?branch=develop)](https://travis-ci.org/ChristianMurphy/gateway)



contribute
====
###make a fork of the repository
[instructions](https://help.github.com/articles/fork-a-repo)

###add main repository as upstream
```
git remote add upstream https://github.com/ChristianMurphy/gateway
```

###update content with lastest from develop branch
```
git pull upstream develop
```

###add changes to the repository
```
git add --all
git commit --all
git push origin develop
```

###merge changes into main repository

on github click on pull requests to the right, open a pull request

###when you want to play it safe

create a new branch to commit changes to
```
git checkout -b branch-name
```
the change what you want, if you want to commit the changes follow add changes above, but push using
```
git push origin branch-name
``` 

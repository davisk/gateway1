Gateway Game
====
[Github Issue Scrum Board](https://huboard.com/Team-C/gateway)

build status
====
master [![Build Status](https://travis-ci.org/Team-C/gateway.png?branch=master)](https://travis-ci.org/Team-C/gateway)

develop [![Build Status](https://travis-ci.org/Team-C/gateway.png?branch=develop)](https://travis-ci.org/Team-C/gateway)



git flow
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

styleguide
====
for python please follow the [PEP 8 styleguide](http://www.python.org/dev/peps/pep-0008/)

for javascript please follow the [JS Hint styleguide](http://www.jshint.com/)

for templates please follow [valid HTML 5 standards](http://validator.w3.org/nu/) and [follow django best practices](https://oncampus.oberlin.edu/webteam/2012/09/architecture-django-templates)

for stylesheets please use [bootstrap](http://getbootstrap.com/) for modifying bootstrap follow [the SMACSS styleguide](http://smacss.com/)

naming convensions
====
bootstrap mixins should use the class naming system

example bootstrap panel
``` html
<div class="panel panel-default">
  <div class="panel-heading">Panel heading without title</div>
  <div class="panel-body">
    Panel content
  </div>
</div>
```

in django the variables would be
``` django
<section class="panel panel-default">
  <div class="panel-heading">
    {{ header }}
  </div>
  <div class="panel-body">
    {{ body }}
  </div>
</section>
```

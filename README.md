# computer-science

[![Build Status](https://travis-ci.org/greybutton/computer-science.svg?branch=master)](https://travis-ci.org/greybutton/computer-science)
[![codecov](https://codecov.io/gh/greybutton/computer-science/branch/master/graph/badge.svg)](https://codecov.io/gh/greybutton/computer-science)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/15438da258824323a0d79339cf5a14e4)](https://www.codacy.com/app/greybutton/computer-science?utm_source=github.com&utm_medium=referral&utm_content=greybutton/computer-science&utm_campaign=badger)
[![Dependency Status](https://gemnasium.com/badges/github.com/greybutton/computer-science.svg)](https://gemnasium.com/github.com/greybutton/computer-science)

My implementation algorithms and data structures

### Docker development

Install

`docker build -t <image-name:tag> .`

`docker run --rm -it -v "$PWD":/code <image-name:tag> make install`

Test

`docker run --rm -it -v "$PWD":/code <image-name:tag> make test`

`docker run --rm -it -v "$PWD":/code <image-name:tag> make test-coverage`

`docker run --rm -it -v "$PWD":/code <image-name:tag> make test-watch`


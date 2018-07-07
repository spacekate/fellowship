# CfA Fellowship - Frontend Code Challenge

This is a single page website created to satisfy the [CfA Fellowship Frontend Code Challenge](https://docs.google.com/document/d/1-Mub-O8dIvT2GamDlfcWmzASMIvDCSnPGaNw6tK4Q40/edit)

## Author

[Kate Currie](mailto:kate@currie.com.au)

## View

**[View Online (GitHub Pages)](https://spacekate.github.io/fellowship/)**

## Download

To download the code
[Fork, Clone, or Download on GitHub](https://github.com/spacekate/fellowship)

## About

I "borrowed" the team photo and favicon from the CfA website - hope that's okay!

### Requirements

Normally I would check in with the relevant stakeholders to ensure my solution
satisfies the requirements completely. However, it's the weekend and my solution needs
to be delivered by Monday morning, so I have interpreted the requirements as follows:

* Requirement: add filters for Fellowship, Active/inactive and Alphabetically
  * Usually I would assume that a filter would only display the
records that match, but in this case it seemed more useful to display all of the records,
sorted by the chosen filter.
  * For the Alphabetical filter I sorted by last name.
* Requirement: a search box to search by fellows information
  * The fields to search weren't specified, so I used
  Name (first and last), Fellowship and About.

### CSS Framework

My demo uses a responsive Bootstrap design. I started with a
[free template](https://startbootstrap.com/template-overviews/one-page-wonder/)
from [Start Bootstrap](https://startbootstrap.com/). I made numerous css changes
to give the page a Code for Australia feel, and added my own "fellows"
elements and styles to display the fellows data and filter/search controls clearly.

### JS Framework

I used jQuery to read and display the fellowship dataset and to manipulate
the DOM. I used native JS for the sort and filter functions. I used
a combination of jQuery and native JS for the search function. On a more
complicated project a more fully featured library such as React or Vue may
be appropriate.

### Code documentation

I have included appropriate comments within the code to ensure readability.

### GitHub Documentation

This page comprises the GitHub Documentation.
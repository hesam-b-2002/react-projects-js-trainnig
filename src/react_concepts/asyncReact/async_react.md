# types of data fetching :

## data on demand :

    autocompletes , dynamic forms , search expreiences , the fetch of this data is usually triggerd in scallbacks

## **initial data** :

    fetch before compenent ends up on the screeen , as soon as possible , usually happens in useEfect

# Request watefalls:

a performance issue when multiple fetch requests / API calls are chained togather and executed one after another

## Why Do Fetch Waterfalls Happen?

parent component fetches data -> child component relies on that data ,
so it wont start it's fetch request / API call till the parent request is complete.
**fetch requests / API calls happen sequentially , and rely on the previous one to complete**

# when is it okay to start fetching ?

# what can we do while the data fetching is in progress ?

# what should we do when data fetching is done ?

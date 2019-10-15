# Company Finder

This app lets you search for company details when you query a name or ABN number.

Searching by name will give you upto 10 results.

<img src="https://user-images.githubusercontent.com/14803518/66860672-8bffd980-ef85-11e9-87c7-b1da0a483769.png" alt="name search screenshot" width="400"/>

Clicking on each result will reveal more details.

<img src="https://user-images.githubusercontent.com/14803518/66860673-8c987000-ef85-11e9-92ee-9df5d400f7c7.png" alt="name search open screenshot" width="400"/>

Searching by ABN number will show the corresponding company if it matches.

<img src="https://user-images.githubusercontent.com/14803518/66860675-8c987000-ef85-11e9-9aa6-7173a04bd808.png" alt="name search screenshot" width="400"/>

Incorrect GUID key will show an error message.

<img src="https://user-images.githubusercontent.com/14803518/66867961-4eef1380-ef94-11e9-8b0f-9a96e6b62d8a.png" alt="error message screenshot" height="400"/>

Reponsive layout means mobile usage is possble.

<img src="https://user-images.githubusercontent.com/14803518/66866021-60362100-ef90-11e9-90ed-121461b724dc.png" alt="name search screenshot" height="450"/>


## Installation

Due to a blocker this project needs to unlock CORS in order for the api to grant acess to their data. I did this using the Moesif CORS [Chrome extension](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc).

After you put in your GUID key, please turn on the CORS Chrome extension before clicking the submit button. Warning - this will effect all tabs so remember to turn this off once usage is completed.

![Moesif CORS](https://user-images.githubusercontent.com/14803518/66866548-70023500-ef91-11e9-98f5-264e4730ef5d.png)

This project is deployed at https://puyanwei.github.io/company-finder

To run the project locally put the following into your terminal;

```
git clone https://github.com/puyanwei/company-finder.git
cd company-finder
npm install
npm start
```

## Tech Stack

- React Hooks and complete pure functional components
- SCSS SASS Styling
- ES6 Javascript
- HTML

For source control I used [Gitkraken](https://www.gitkraken.com/)

## Planning

I started out by drawing how I thought the page would look. That helped me think about how to split up my components and structure my code. At first I thought I would use a radio button to toggle between a name search and an ABD number, but this didn't pan out that way in the end.

<img src="https://user-images.githubusercontent.com/14803518/66866549-70023500-ef91-11e9-9a01-182a600f553e.jpg" alt="plan" height="400"/>

I planned to work my way down the list, making small changes at a time and committing them, working in an agile fashion.

After setting up the environment, my plan was to get a MVP version up and running with a basic structure, fetch the data, refactor it up into smaller components if needs be, and then work on the styling.

## Hurdles

### Cors and Fetching Issues

It was a struggle dealing with the issues when fetching the data from the API, this was and still is my main blocker. Although I had found a temporary solution I did not find a way to avoid the 'No CORS' security issue.

Initially I had a 'No Cors' error in the console, of which I knew that you could add a 'mode: no-cors' option in the fetch. However this did not solve the issue. It was confusing as the call was successful (I used [Postman](https://www.getpostman.com/) to check if all was correct) but it was returning a limited if not minimal response.

In the data it had `Response { type:"opaque", ... }`

After some more research I realised this was another security issue related to Cors only. I found the Chrome extension Moesif CORS to help me bypass this issue.

Once I had successfully fetched the data, I realised it was not in a typical JSON structure. It was in text format and also had the data wrapped in a parameter of a function. I had to add `text/plain; charset=ISO-8859-1` to the header to get the data  be fetch in the text format.

### Conditional Trees

I realised that there were quite a few different outcomes to different scenarios. This was making the code that renders to the page to become rather complex and unmanagable with the multiple nested ternary operators in jsx.

So writing out the outcomes in a tree format helped.

<img src="https://user-images.githubusercontent.com/14803518/66866547-6f699e80-ef91-11e9-9f7a-99459a71a145.jpg" alt="conditional tree" height="400"/>

This also helped me realise that I could reduce the conditionals if I made the data format reusable by my `Company.jsx` component. So I manipulated the data after it was fetched so that whether it was multiple or just a single object it would be available in an array. This helped me reuse my component and cut out the duplicate outcomes of checking which type of search it was.

## Future Improvements?

Some potential future features that could be added;

- Refactoring the fetch function into its own custom hook that could scale up if other types of queries are wanted by the user.
- Accounts for users so they can save their GUID key.
- A centralised state management system as the application grows using useContext and useReducer.
- More comprehensive testing using testing-library/@react.

It has been a great project to work on, pleasently surprised at how React has improved so much with hooks and also incorperating scss without a compiler! I am still rather confused about the CORS issues, I will have to continue researching. Recently I have been diving into React hooks and this was a great excuse to get more stuck in, I have learned a lot over the past few days.

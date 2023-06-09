# Capture_the_Flag_Challenge
Created with CodeSandbox

I have capture the flag from url and showcase that flag using React.js. Just for learning purpose.

Below is challenge detail which I have used it for implementation. 

## Instructions

1. Open this [link](https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge)
2. Find a hidden URL within the HTML
   - Each character of the URL is given by this DOM tree, in this specific order. You need to find (in order) all of the occurrences and join them to get the link.
   - The asterisk **(\*)** is a wildcard representing zero or more characters that can be present in the string. These characters are irrelevant to the result and should be ignored.
   - There can be zero or more DOM nodes between each valid tag. These nodes are irrelevant to the result.
   - Any additional attribute that doesn't interfere with the described pattern can be safely ignored.

Pattern of the DOM tree for each valid character of the URL

```html
<ul data-tag="*75*">
  <li data-id="98*">
    <div data-class="*35">
      <span class="value" value="VALID_CHARACTER"></span>
    </div>
  </li>
</ul>
```

(_To validate this step, you should be able to open the URL and get an English word. This means you have captured the flag!_ 🥳)

3. Create a CodeSandbox React application
4. Make an HTTP request to URL obtained in step 2 to load the flag into a React component
   - Don't use any external libraries. Use browser APIs
   - Render a "Loading..." text while the request is ongoing
5. Render the flag you loaded in step 4 with the following conditions:
   - Simulate a typewriter effect with a half second delay between each character. _Start showing nothing and then display characters one by one until the full string is displayed._
   - No style required
   - Render the flag a list, where each character is a list item
   - Animation should trigger after you load the flag
   - Animation should run only once
   - Use React APIs only. Don't use CSS or external libraries


## Results

Initially, I have fetch the flag using the step 1 and 2. For this, I have used Python script. You can find this script in Github repository.

<img width="474" alt="image" src="https://github.com/Rushikesh1234/Capture_the_Flag_Challenge/assets/38386736/83eac2d3-495f-4a9e-8a5b-064c93127251">

<img width="474" alt="image" src="https://github.com/Rushikesh1234/Capture_the_Flag_Challenge/assets/38386736/250de74d-d966-4a75-a9bc-4b69c2f5826e">

Then, I used this url in my react page, and display that flag in list format after every interval. You can see React project in Github repository.

<img width="474" alt="image" src="https://github.com/Rushikesh1234/Capture_the_Flag_Challenge/assets/38386736/a412515a-a295-4535-861b-cdfd3c22b7a1">

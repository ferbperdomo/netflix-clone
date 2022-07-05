# Clonetflix

[Clonetflix](https://clonetflix.vercel.app/) is a clone of the actual Netflix webpage built in a dark mode which allows users to register, select a plan for watching movies, paying the subscription through Stripe (for testing), add and remove movies from their list and play the trailers for the selected movies besides having extra information about them. Some of the functionalities are still on the development process for a more advanced version.

## Tools

Clonetflix was build using TypeScript, Nextjs and Tailwind. It collects real time information from The Movie Database TMDB api. It is connected to Firebase for authentication of users and to Stripe to allow the payment of each plan according to the user election.

## How to use

You can create an account by filling the form in the login page and clicking in the subscription link or use the default account with the email and password given below. When a new user signs up, it will ask for the desired plan and will move to the Stripe platform to process the payment. As it is in test mode, default data is given below the plans to make this process easier. 
Once the payment is processed, it will come back to the account page where you will find the information about the plan, the option to change the current plan will take the user to Stripe to modify it, and finally the logout. Some of the links are not connected because it is planned for a second version of the app.
By clicking in the logo on the top-left corner the user will be taken to the index page where will find different movie categories and can play the trailer of each one. Also, at the beggining there is no "My List" but once the user add some movie, it will be displayed as first row in the page.



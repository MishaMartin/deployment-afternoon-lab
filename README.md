# deployment-afternoon-lab

For this lab, I will create a landing page for a small terrarium and mushroom growing kit. This page will be hosted on Heroku.


Deployment Lab
Instructions
For today’s lab, you are going to create a landing page. Landing pages are usually for when users click on ads. They are taken to a landing page that tries to get them to buy something or sign up for something – it’s all about taking action. Feel free to make a landing page about an existing product/service (a book, video game, piano lessons, plants, window washing etc.) or make something up (feel free to be silly).

To start off, setup your basic HTML template and add an h1 tag (for testing purposes, so it can say anything, you’ll change/remove it later). Then get your express server setup to render your HTML page.

At this point, get your page deployed to Heroku. Once you have your page successfully deployed, come back and build out your HTML & CSS. As you progress, add a single ‘feature’ at a time, and then redeploy. For example:

Add a header and an image

Redeploy

Add description

Redeploy

Add CSS

Redeploy

These are just some examples, make this page your own! But, remember, one of the main objectives for this lab is to practice deployment to a hosting service like Heroku.

Getting CSS and JS to Work on Your Hosted Site

Your server doesn’t automatically know how to serve your JavaScript and CSS files! It can see the references to them in your HTML but doesn’t know what to do with them. You have a couple of options for handling this.

Add new endpoints for your different file types. You’ll need to reference these endpoints in your HTML instead of the actual file paths.

JavaScript:

app.get('/js', (req, res) => {
  res.sendFile(path.join(__dirname, './public/main.js'))
})
HTML:

<script src="/js"></script>
Use middleware to serve the files on each request.

JavaScript:

app.use('/js', express.static(path.join(__dirname, 'public/main.js')))
HTML:

<script src="/js"></script>
There is no limit to the landing page, so it should take you all the way through the end of the day. However, if you feel like you have done all that you can with it, deploy your application to a different hosting service such as Glitch or Netlify!
## Our Vision
Speeding up your learning process. **#SkyrocketYourProductivity** 			

Our aim is to streamline learning and providing a distraction-free environment so that you can advance in your career.

## Problems Faced Today
Youtube is the millennial hub of education. Almost everything is available on Youtube nowadays. From coding videos to interview prep, everything is just one click away. Every beginner uses Youtube to learn how to code. Isn't it amazing how we don't need to spend hundreds of dollars on expensive courses?

But Youtube has its own downfalls. 

It is highly addictive. Youtube's algorithm works so well that as soon as one video ends, we directly go on to the other and then another and the cycle goes on...

Videos are too long. A lot of time is wasted seeing such long videos only to gain a few tips on "how to code faster." There are sometimes just 5 tips hidden in twenty-minute-long videos. Ads are also a pain to watch and distract from the actual subject of the video.

## HERE'S HOW **PRODUCTIFY** COMES IN

Enter any Youtube video URL and our product generates a text transcript using powerful machine learning tools so that you can quickly glance over what the speaker of the video actually wants to say. 

Our backend neatly organizes the text into bullet point paragraphs and also strikes out any sponsor present in the video because let's face it, we hate it when a sponsor pops up in the middle of the video.

The text on clicking will also direct you to the exact part of the video where the speaker spoke that sentence. This is all done to assist your learning so that you can learn faster and get ahead of others.

## USE FOR COLLEGE-STUDENTS
This product is highly useful for college students as it can be used to quickly go over a Professor's lecture and only read the important points neatly organized in paragraphs. This will turn boring lectures fun and will help in retaining what you learned as you can quickly reference the text instead of going back to the exact point in the video since our product already takes care of that. 

You can easily copy important parts of the lecture and paste them somewhere in your notes. This will help you in saving a lot of time as you will not have to type them out manually from your memory and you can quickly use them later in the future while preparing for a test.

## Challenges we ran into
Training the summary for the ML Model. 
At first, we were planning on using pre-trained models but after some debate, settled on using Pegasus (Google) to generate text summaries.
We have also used Google Cloud Translate API to translate the text but couldn't integrate it due to time constraints.

## Accomplishments that we're proud of
We are proud of learning how to leverage open-source APIs in order to generate a transcript of the video that can then be parsed into a short summary. We also set up a fully functional Python REST API on the backend and were able to host the whole project. Check it out [here](https://hunaidkhan.github.io/flask-transcriptor-api/)

## Why Should You Use This
If you want to boost your productivity and get ahead of others, you should definitely give this a try. Next time, before watching a Youtube video, try using our product and you will be surprised that a 10-minute long video will take you just 4-5 minutes to read. 

Work smarter, not harder.

## Business Viability
Our fully functional product will make for a great business opportunity. We will give the users 30 free uses of our product to get the transcript at first and after that charge them with a monthly or yearly (which will be cheaper) subscription. Since our product strikes out the sponsor in the Youtube Video, once our product has enough users, we can approach those sponsor brands and take money from them if they do not want their brand name to get striked out in the text transcript. This will be a great option to monetize the application.

One other option could be to use a freemium model where limited features are available for free but the more advanced features - like striking out the sponsor, summarizing the video, translating the text into different languages, downloading text as audiobooks for those who don't like to read, highlight the important parts of the text using machine learning - will only be available with a premium subscription.

We don't want to use ads as an income source because it will destroy the whole purpose of a distraction-free website. It will go against the very fundamentals of our project and values and the very essence of entrepreneurship. 

## What's next for Productify
In the future, we would like to roll this out as an actual product and make it into a chrome extension to make it easier to use. We would also like to better our Machine Learning models so that the text summary and organization are much better.

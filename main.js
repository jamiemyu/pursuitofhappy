let ideas = [
"Take a power nap",
"Get rid of 3 things you never use",
"Write down 3 things you're grateful for",
"Don't use Facebook for the rest of the day",
"Stop watching/reading the news for a week",
"Write a journal entry",
"Meditate",
"Practice yoga",
"Go to your local coffee shop and order a latte",
"Clean out your closet",
"Take a walk outside without distractions",
"Bake chocolate chip cookies",
"Have a dance party by yourself",
"Take 3 deep breaths",
"Facetime a friend",
"Write down 3 things you've always wanted to do, and then do one",
"Draw a picture from your imagination",
"Power down your laptop, phone, and TV",
"Write a letter to yourself",
"Go on a run",
"Start a personal project"
];

function generateIdea() {
    let randInt = Math.floor(Math.random() * ideas.length);
    document.getElementById('idea-container').innerHTML = ideas[randInt];
}

const testTimonal = [
    {
        name: "Cherise G",
        Url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "Everyone’s on the same page. Many of our people are not very organized naturally, so facebook is a godsend.Facebook autor has really helped our business. Definitely worth the investment. Thank you!"
    },
    {
        name: "Jhon Deep",
        Url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
        text: "I would recommend youtube for anyone trying to get the word out about their business. It has saved me so much time!If you want to take your business to the next level, use youtube and don't look any further."
    },
    {
        name: "Alon Tic",
        Url: "https://images.unsplash.com/photo-1507081323647-4d250478b919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
        text: "Everyone’s on the same page. Many of our people are not very organized naturally, so instagram is a godsend!.Instagram is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!"
    },
    {
        name: "Triston Tate",
        Url: "https://images.unsplash.com/photo-1579038773867-044c48829161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUzfHx8ZW58MHx8fHx8",
        text: "I love dell products! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.I have been using dell products for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great."
    }
];

const img1 = document.querySelector('#imge');
const text1 = document.querySelector('.text');
const uName = document.querySelector('.username');
let id = 0;

function updateTetimonial() {
    const { name, Url, text } = testTimonal[id];
    img1.src = Url;
    text1.innerText = text;
    uName.innerText = name;
    id++;

    if (id == testTimonal.length) {
        id = 0;
    }

    setTimeout(() => {
        updateTetimonial();
    }, 5000);  // Changed the timeout to 3 seconds for a better transition effect
}


updateTetimonial();

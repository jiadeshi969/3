function playGame(userChoice) {
            var choices = ['rock', 'paper', 'scissors'];
            var computerChoice = choices[Math.floor(Math.random() * choices.length)];
            var result = '';
            
            if (userChoice === computerChoice) {
                result = "平手！";
            } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
                       (userChoice === 'paper' && computerChoice === 'rock') ||
                       (userChoice === 'scissors' && computerChoice === 'paper')) {
                result = "你贏了！";
            } else {
                result = "你輸了！";
            }
            
            document.getElementById('result').innerText = "你選擇了：" + userChoice + "，電腦選擇了：" + computerChoice + "，" + result;
        }
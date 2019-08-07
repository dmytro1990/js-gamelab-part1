const play= prompt('do you want to play a game');

if(play === 'no'){
  console.log('bye')
}else if (play === 'yes'){
  const name = prompt('what is your name?')

  let user = 40;
  let grant = 10;
  let wins = 0;

  while(user > 0 && wins < 3){
    user -= Math.floor((Math.random() * 2) +1);
    grant -= Math.floor((Math.random() * 2) +1);
    console.log('Grant has ' + grant + ' health left')
    console.log(name + ' has ' + user + ' health left')

    if(grant <= 0){
      wins++;
      grant = 10;
      console.log(name + ' won a round')
    }
  }

if(user > 0 && wins === 3){
  console.log('Game over ' + name + ' WON!!!')
}
    
}


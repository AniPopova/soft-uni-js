function friendListMaintenance(friendList) {
    let friends = friendList[0].split(', ');
    let blacklistedCount = 0;
    let numberOfLostContacts = 0;
  
    for (let i = 1; i < friendList.length; i++) {
      let command = friendList[i];
  
      if (command === 'Report') {
        break;
      }
  
      let element = command.split(' ');
      let commandType = element[0];
      let name = element[1];
      let index = Number(element[1]);
  
      if (commandType === 'Blacklist') {
        if (friends.includes(name)) {
          let friendIndex = friends.indexOf(name);
          friends[friendIndex] = 'Blacklisted';
          blacklistedCount++;
          console.log(`${name} was blacklisted.`);
        } else {
          console.log(`${name} was not found.`);
        }
      } else if (commandType === 'Error') {
        if (index >= 0 && index < friends.length) {
          let currentName = friends[index];
          if (currentName !== 'Blacklisted' && currentName !== 'Lost') {
            friends[index] = 'Lost';
            numberOfLostContacts++;
            console.log(`${currentName} was lost due to an error.`);
          }
        }
      } else if (commandType === 'Change') {
        let newName = element[2];
        if (index >= 0 && index < friends.length) {
          let currentName = friends[index];
          friends[index] = newName;
          console.log(`${currentName} changed his username to ${newName}.`);
        }
      }
    }
  
    console.log(`Blacklisted names: ${blacklistedCount}`);
    console.log(`Lost names: ${numberOfLostContacts}`);
    console.log(friends.join(' '));
  }
  

friendListMaintenance(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);
console.log('-----------------------');
friendListMaintenance((["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"]));
console.log('-----------------------');
friendListMaintenance(["Mike, John, Eddie, William", "Blacklist Maya", "Error 1", "Change 4 George", "Report"]);

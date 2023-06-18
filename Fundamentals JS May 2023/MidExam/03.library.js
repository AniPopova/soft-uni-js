function library(data) {
  let bookRaft = data[0].split('&');
  data = data.slice(1);

  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'Done') {
      break;
    }

    let receivedOrder = data[i].split(' | ');
    let action = receivedOrder[0];

    if (action === 'Add Book') {
      let bookName = receivedOrder[1];
      if (!bookRaft.includes(bookName)) {
        bookRaft.unshift(bookName);
      }
    } else if (action === 'Take Book') {
      let bookName = receivedOrder[1];
      let indexOfBook = bookRaft.indexOf(bookName);
      if (indexOfBook !== -1) {
        bookRaft.splice(indexOfBook, 1);
      }
    } else if (action === 'Swap Books') {
      let firstBook = receivedOrder[1];
      let secondBook = receivedOrder[2];
      let firstBookIndex = bookRaft.indexOf(firstBook);
      let secondBookIndex = bookRaft.indexOf(secondBook);

      if (firstBookIndex !== -1 && secondBookIndex !== -1) {
        [bookRaft[firstBookIndex], bookRaft[secondBookIndex]] = [bookRaft[secondBookIndex], bookRaft[firstBookIndex]];
      }
    } else if (action === 'Insert Book') {
      let bookName = receivedOrder[1];
      if (!bookRaft.includes(bookName)) {
        bookRaft.push(bookName);
      }
    } else if (action === 'Check Book') {
      let index = Number(receivedOrder[1]);
      if (index >= 0 && index < bookRaft.length) {
        console.log(bookRaft[index]);
      }
    }
  }

  console.log(bookRaft.join(', '));
}

function schoolLibrary(data) {
  let bookRaft = data[0].split('&');
  data = data.slice(1);

  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'Done') {
      break;
    }

    let receivedOrder = data[i].split(' | ');
    let action = receivedOrder[0];

    if (action === 'Add Book') {
      let bookName = receivedOrder[1];
      if (!bookRaft.includes(bookName)) {
        bookRaft.unshift(bookName);
      }
    } else if (action === 'Take Book') {
      let bookName = receivedOrder[1];
      let indexOfBook = bookRaft.indexOf(bookName);
      if (indexOfBook !== -1) {
        bookRaft.splice(indexOfBook, 1);
      }
    } else if (action === 'Swap Books') {
      let firstBook = receivedOrder[1];
      let secondBook = receivedOrder[2];
      let firstBookIndex = bookRaft.indexOf(firstBook);
      let secondBookIndex = bookRaft.indexOf(secondBook);

      if (firstBookIndex !== -1 && secondBookIndex !== -1) {
        let temp = bookRaft[firstBookIndex];
        bookRaft[firstBookIndex] = bookRaft[secondBookIndex];
        bookRaft[secondBookIndex] = temp;
      }
    } else if (action === 'Insert Book') {
      let bookName = receivedOrder[1];
      if (!bookRaft.includes(bookName)) {
        bookRaft.push(bookName);
      }
    } else if (action === 'Check Book') {
      let index = Number(receivedOrder[1]);
      if (index >= 0 && index < bookRaft.length) {
        console.log(bookRaft[index]);
      }
    }
  }

  console.log(bookRaft.join(', '));
}

function schoolLibrary2(data) {
  let bookRaft = data[0].split('&');
  data = data.slice(1);

  for (const order of data) {
    if (order === 'Done') {
      break;
    }

    const receivedOrder = order.split(' | ');
    const action = receivedOrder[0];

    if (action === 'Add Book') {
      const bookName = receivedOrder[1];
      if (!bookRaft.includes(bookName)) {
        bookRaft.push(bookName);
      }
    } else if (action === 'Take Book') {
      const bookName = receivedOrder[1];
      const indexOfBook = bookRaft.indexOf(bookName);
      if (indexOfBook !== -1) {
        bookRaft.splice(indexOfBook, 1);
      }
    } else if (action === 'Swap Books') {
      const firstBook = receivedOrder[1];
      const secondBook = receivedOrder[2];
      const firstBookIndex = bookRaft.indexOf(firstBook);
      const secondBookIndex = bookRaft.indexOf(secondBook);

      if (firstBookIndex !== -1 && secondBookIndex !== -1) {
        [bookRaft[firstBookIndex], bookRaft[secondBookIndex]] = [bookRaft[secondBookIndex], bookRaft[firstBookIndex]];
      }
    } else if (action === 'Insert Book') {
      const bookName = receivedOrder[1];
      if (!bookRaft.includes(bookName)) {
        bookRaft.push(bookName);
      }
    } else if (action === 'Check Book') {
      const index = Number(receivedOrder[1]);
      if (index >= 0 && index < bookRaft.length) {
        console.log(bookRaft[index]);
      }
    }
  }

  console.log(bookRaft.join(', '));
}

function schoolLibrary3(data) {
  let bookRaft = data[0].split('&');
  data = data.slice(1);

  data.forEach((order) => {
    if (order === 'Done') {
      return;
    }

    const receivedOrder = order.split(' | ');
    const action = receivedOrder[0];

    if (action === 'Add Book') {
      const bookName = receivedOrder[1];
      if (!bookRaft.includes(bookName)) {
        bookRaft.push(bookName);
      }
    } else if (action === 'Take Book') {
      const bookName = receivedOrder[1];
      const indexOfBook = bookRaft.indexOf(bookName);
      if (indexOfBook !== -1) {
        bookRaft.splice(indexOfBook, 1);
      }
    } else if (action === 'Swap Books') {
      const firstBook = receivedOrder[1];
      const secondBook = receivedOrder[2];
      const firstBookIndex = bookRaft.indexOf(firstBook);
      const secondBookIndex = bookRaft.indexOf(secondBook);

      if (firstBookIndex !== -1 && secondBookIndex !== -1) {
        [bookRaft[firstBookIndex], bookRaft[secondBookIndex]] = [bookRaft[secondBookIndex], bookRaft[firstBookIndex]];
      }
    } else if (action === 'Insert Book') {
      const bookName = receivedOrder[1];
      if (!bookRaft.includes(bookName)) {
        bookRaft.push(bookName);
      }
    } else if (action === 'Check Book') {
      const index = Number(receivedOrder[1]);
      if (index >= 0 && index < bookRaft.length) {
        console.log(bookRaft[index]);
      }
    }
  });

  console.log(bookRaft.join(', '));
}
schoolLibrary3(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger","Add Book | Catch-22","Swap Books | Anna Karenina | Catch-22","Take Book | David Copperfield","Done"])
schoolLibrary2(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger","Add Book | Catch-22","Swap Books | Anna Karenina | Catch-22","Take Book | David Copperfield","Done"])
library(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger","Add Book | Catch-22","Swap Books | Anna Karenina | Catch-22","Take Book | David Copperfield","Done"])
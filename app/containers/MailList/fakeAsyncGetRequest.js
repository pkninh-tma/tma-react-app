const data = [
  {
    id: '1',
    from: 'Maxime Preaux',
    address: 'maxime@codepen.io',
    time: '2016-10-07 15:35:14',
    message: 'This is my first attempt at using Redux.\nDuis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. ' +
      'Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras',
    subject: 'Messing with Redux.js',
    tag: 'inbox',
    read: 'false',
  },
  {
    id: '2',
    from: 'Dribbble',
    address: 'digest@dribbble.com',
    time: '2016-05-09 14:23:54',
    message: 'Here are the latest shots from Dribbblers you follow! Nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. ' +
      'Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. ' +
      'Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien,',
    subject: 'Dribbble Digest',
    tag: 'inbox',
    read: 'true',
  },
  {
    id: '3',
    from: 'Christopher Medina',
    address: 'dolor@luctusutpellentesque.net',
    time: '2015-07-03 21:48:27',
    message: 'Woops, that last pull request messed up the csproj. Mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra',
    subject: 'Broken PR?',
    tag: 'inbox',
    read: 'false',
  },
  {
    id: '4',
    from: 'Slack HQ',
    address: 'fishbowl@slack.com',
    time: '2015-07-21 09:47:57',
    message: 'Click here to consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi',
    subject: 'Join the Fishbowl Team',
    tag: 'inbox',
    read: 'true',
  },
  {
    id: '5',
    from: 'Ray Lamb',
    address: 'ut.erat.Sed@volutpatNulla.co.uk',
    time: '2016-01-08 10:14:40',
    message: 'Trepalium is going on tour! Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. ' +
      'Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris',
    subject: 'Concert tickets on sale',
    tag: 'inbox',
    read: 'false',
  },
  {
    id: '6',
    from: 'StackOverflow',
    address: 'non@semmolestie.com',
    time: '2016-06-29 15:39:06',
    message: 'You\'re almost done! Finish registering your account, and you\'ll be able to demand answers from random people that are smarter than you.' +
      ' Cum sociis natoque penatibus et magnis dis parturient',
    subject: 'Verify your StackOverflow account',
    tag: 'inbox',
    read: 'true',
  },
  {
    id: '7',
    from: 'Pastebin.com',
    address: 'Phasellus.dapibus.quam@vitaenibh.org',
    time: '2016-03-14 09:43:27',
    message: 'Buy a cheap lifetime subscrition today! Or we\'ll remind you every two weeks until you die. Quis massa. ' +
      'Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. ' +
      'Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla.',
    subject: 'Pastebin PRO',
    tag: 'deleted',
    read: 'true',
  },
];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async function showResults() {
  await sleep(2000);
  return data;
};

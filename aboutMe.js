
 
const generateRandomNum = num => {
    return Math.floor(Math.random() * num);
  }
  
  const about = {
    MyHobby: ['Watching Horror Movies 📺', 'Surfing 🏄 ', 'Cooking 🍳', 'Baking 🎂'],
    MyFavMovie: ['Taare Zameen Par 🎥 ', 'Ta Ra Rum Pum 🎥', 'Vicky and her Mystery 🎥'],
    MyMotivationalMsg: ['💪 The key to Success is consistency and to believe in yourself, Stay Patient and trust your Journey', '💪 Believe in something with such a Passion that it becomes a Reality', "💪 Don't be discouraged, It's often the Last Key in the Bunch that Opens the Lock"],

}
  

  let aboutMe = [];
  
  for(let collect in about) {
    let index = generateRandomNum(about[collect].length);
  
    switch(collect) {
      case 'MyHobby':
        aboutMe.push(`My Hobby is "${about[collect][index]}".`);
        break;
      case 'MyFavMovie':
        aboutMe.push(`My Favourite Movie is "${about[collect][index]}".`);
        break;
      case 'MyMotivationalMsg':
        aboutMe.push(`My Motivational Message is "${about[collect][index]}".`);
        break;
      default:
        aboutMe.push('Error');
    }
  }
  
  function autoBioGraphy(Myself) {
    aboutMe.unshift("👸");
    const formatted = aboutMe.join('\n');
    console.log(formatted);
  }
  
  autoBioGraphy(aboutMe);
  
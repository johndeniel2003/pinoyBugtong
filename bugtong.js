export default function bugtong(){
  const createdQuestion = document.querySelector('.createdQuestion');
  const createdAnswer = document.querySelector('.createdAnswer');
  const createBtn = document.querySelector('#AddBtn');


  let bugtong = JSON.parse(localStorage.getItem("bugtongList")) || [
    {
      question: "Sa gabi sumisiklab, sa umaga'y nawawala. Ano ito?",
      answer: "Bituin"
    },
    {
      question: "May paa ngunit hindi makalakad, may ulo ngunit hindi makahinga. Ano ito?",
      answer: "Mesa"
    },
    {
      question: "Isa itong prinsesa, mataas ang korona. Hindi ako hari, pero ako'y nagdadamit pula. Ano ako?",
      answer: "Sili"
    },
    {
      question: "Daliri ko'y di pang nagdidilim, ngunit ako'y nagbibigay liwanag. Ano ako?",
      answer: "Kandila"
    },
    {
      question: "Habang lumalakad, sumusunod ang likod. Hindi tao, hayop o sasakyan, ngunit palaging kasama. Ano ito?",
      answer: "Anino"
    },
    {
      question: "Sa umaga'y mataas, sa gabi'y mababa. Ano ito?",
      answer: "Araw"
    },
    {
      question: "Binibigay lihim ng tubig, nagpapalakas sa bakal. Ano ito?",
      answer: "Kalderetang Baka"
    },
    {
      question: "Malambot sa labas, masarap sa loob. Laging kasama ng kanin. Ano ito?",
      answer: "Itlog"
    },
    {
      question: "Matigas kung buhay, malambot kung patay. Ano ito?",
      answer: "Kawayan"
    },
    {
      question: "Nang nangangagat, hindi sumusuntok. Ano ito?",
      answer: "Ngipin"
    }
    
  ];
 

 


  createBtn.addEventListener('click', () => {
    if(createdAnswer.value === '' || createdQuestion.value === ''){
      alert('Please add some values to create your bugtong');

     
    }else{
      bugtong.push({
        question: createdQuestion.value,
        answer: createdAnswer.value
      });
  
      
      localStorage.setItem("bugtongList", JSON.stringify(bugtong));

      alert('New Bugtong Created');
      location.reload();
    }
  });

  if (!localStorage.getItem("bugtongList")) {
    localStorage.setItem("bugtongList", JSON.stringify(bugtong));
  }
}








  


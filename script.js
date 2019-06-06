var dataController = (function() {
  var comment, introArray, subjectArray, genderGram, genderGramCap, lastChar;
  genderGram = [];
  introArray = [];
  subjectArray = [];
  comment = "";
  function isVowel(letter) {
    return ["a", "e", "i", "o", "u"].indexOf(letter.toLowerCase()) !== -1;
  }
  return {
    clearData: function() {
      comment = "";
      introArray = [];
      subjectArray = [];
    },
    adjustSelectedArray: function(e) {
      //MAKE THIS A SWITCH
      if (e.checked) {
        if (e.value === "intro") {
          introArray.push(e);
          console.log("added " + e.name + " to Intro");
          // dataCtrl.introArray = introArr;
        } else if (e.value === "subject") {
          subjectArray.push(e);
          console.log("added " + e.name + " to Subjects");
          // dataCtrl.subjectArray = subjectArr;
        }
      } else {
        if (e.value === "intro") {
          introArray.forEach(function(thing, i) {
            if (introArray[i] === e) {
              introArray.splice(i, 1);
              console.log("removed " + e.name + " from Intro");
            }
          });
          // dataCtrl.introArray = introArr;
        } else if (e.value === "subject") {
          subjectArray.forEach(function(thing, i) {
            if (subjectArray[i] === e) {
              subjectArray.splice(i, 1);
              console.log("removed " + e.name + " from Subject");
              // dataCtrl.subjectArray = subjectArr;
            }
          });
        }
      }
      // console.log(introArray);
    },
    getSelected: function() {
      return {
        selectedIntro: introArray,
        selectedSubjects: subjectArray
      };
    },
    addIntro: function(studentsName) {
      comment = "";
      comment += studentsName + " is ";
      introArray.forEach(function(e, i) {
        if (i === 0) {
          if (isVowel(e.name.charAt(0))) {
            comment += "an ";
          } else {
            comment += "a ";
          }
          comment += e.name;
        } else if (i + 1 === introArray.length) {
          comment += " and " + e.name;
        } else {
          comment += ", " + e.name;
        }
      });
      comment += " student. ";
      return comment;
    },
    addData: function(gender, name) {
      //get random number for the selection
      var rNum = 0;
      var rating = "";
      comment = "";

      //set correct grammar for gender
      if (gender === "male") {
        genderGram = ["he", "his", "him"];
        genderGramCap = ["He", "His", "Him"];
      } else {
        genderGram = ["she", "her", "her"];
        genderGramCap = ["She", "Her", "Her"];
      }
      //find correct section and add sentence based on rating and Random number
      subjectArray.forEach(function(thing, i) {
        rating = document.getElementById(subjectArray[i].name).value;
        rNum = Math.floor(Math.random() * 4) + 1;
        //Christine = 1
        //Ty        = 2
        //Sharlene  = 3
        //Christy   = 4
        console.log(rating);

        switch (subjectArray[i].name) {
          case "reading":
            switch (rating) {
              case "okay":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    name +
                    " could use a little bit of improvement with " +
                    genderGram[1] +
                    " reading skills, but I believe " +
                    genderGram[0] +
                    " is on the right track for improvement. We will continue to work on it together.";
                } else if (rNum === 2) {
                  comment +=
                    genderGramCap[1] +
                    " reading skills are okay, but could use some more practice. As the semester progresses, I see that " +
                    genderGram[0] +
                    " is improving with practice.";
                } else if (rNum === 3) {
                  comment += `${name} is slowly improving on ${
                    genderGram[1]
                  } reading skills. We will continue to work on it in class`;
                } else if (rNum === 4) {
                  comment += `${name} needs to put more practice into ${
                    genderGram[1]
                  } reading skills. With a little more effort and focus ${name} will be able to improve ${
                    genderGram[1]
                  } reading abilities.`;
                }
                break;
              case "good":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    name +
                    `'s reading skills are good. I believe that with just a little more practice ${
                      genderGram[0]
                    } will continue to improve.`;
                } else if (rNum === 2) {
                  comment +=
                    genderGramCap[0] +
                    " does well when we read, but has troubles occasionally. With more practice " +
                    genderGram[0] +
                    " will be great.";
                } else if (rNum === 3) {
                  comment += `${name} has good reading skills. ${
                    genderGramCap[0]
                  } has been improving with corrections made in class.`;
                } else if (rNum === 4) {
                  comment += `When I have ${genderGram[2]} read by ${
                    genderGram[2]
                  }self, it is evident ${
                    genderGram[0]
                  } has gotten much better at speaking and reading clearly.`;
                }
                break;
              case "great":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment += name + " has impeccable reading skills.";
                } else if (rNum === 2) {
                  comment +=
                    "For " +
                    genderGram[1] +
                    " level, " +
                    genderGram[0] +
                    " is an excellent reader.";
                } else if (rNum === 3) {
                  comment += `${name} has amazing reading skills. ${
                    genderGramCap[0]
                  } is one of the top voices heard when reading.`;
                } else if (rNum === 4) {
                  comment += `${name} reads with fluency and ease. ${
                    genderGramCap[0]
                  } is able to handle difficult vocabulary and have consistently clear pronunciation.`;
                }
                break;
            }
            break;

          case "listening":
            switch (rating) {
              case "okay":
                rNum = Math.floor(Math.random() * 4) + 1;

                if (rNum === 1) {
                  comment +=
                    name +
                    " sometimes needs extra explanation in class, but has been improving over the term.";
                } else if (rNum === 2) {
                  comment +=
                    name +
                    " will either need me to explain in more detail or speak slower, but I have noticed that " +
                    genderGram[0] +
                    " is improving with time.";
                } else if (rNum === 3) {
                  comment += `${name} is slowly improving on ${
                    genderGram[1]
                  } listening skills in class.`;
                } else if (rNum === 4) {
                  comment += `${name} is doing okay with ${
                    genderGram[1]
                  } listening skills but usually needs further explanation to understand.`;
                }
                break;
              case "good":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    name +
                    " is able to listen well and follow what is being taught in class.";
                } else if (rNum === 2) {
                  comment +=
                    genderGramCap[0] +
                    " can be confused sometimes in natural conversation, but does really well following along with a story.";
                } else if (rNum === 3) {
                  comment += `${genderGramCap[0]} is doing well with ${
                    genderGram[1]
                  } listening skills. ${name} listens to questions or directions and will answer appropriately.`;
                } else if (rNum === 4) {
                  comment += `${
                    genderGramCap[0]
                  } is a good listener and is able to understand my questions in class with ease.`;
                }
                break;
              case "great":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    name +
                    " has amazing listening skills. " +
                    genderGramCap[0] +
                    " both listens to corrections well and then applies them.";
                } else if (rNum === 2) {
                  comment +=
                    genderGramCap[0] +
                    " listens attentively and always understands what I am asking the class to do.";
                } else if (rNum === 3) {
                  comment += `${name} has wonderful listening skills. ${
                    genderGramCap[0]
                  } is able to understand and follow in-class discussions.`;
                } else if (rNum === 4) {
                  comment += `${name} is an exceptional listener. ${
                    genderGramCap[0]
                  } is focused on the class discussion and can easily understand the flow of the conversation.`;
                }
                break;
            }
            break;

          case "comprehension":
            switch (rating) {
              case "okay":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    name +
                    " can sometimes need extra explanation in class, but " +
                    genderGram[0] +
                    " is continuing to improve.";
                } else if (rNum === 2) {
                  comment +=
                    genderGramCap[0] +
                    " sometimes needs extra review to comprehend the material, but " +
                    genderGram[0] +
                    " is making steady progress.";
                } else if (rNum === 3) {
                  comment += `${name} is always trying ${
                    genderGram[1]
                  } best to understand the lesson. With a little extra help ${name} is showing improvement.`;
                } else if (rNum === 4) {
                  comment += `${name} is having some difficulties understanding some of the information in class, but once ${
                    genderGram[0]
                  } is focused ${genderGram[0]} improves ${
                    genderGram[1]
                  } understanding of the lesson material.`;
                }
                break;
              case "good":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    genderGramCap[0] +
                    " is able to read and follow in-class readings well.";
                } else if (rNum === 2) {
                  comment +=
                    "When " +
                    name +
                    " comes prepared, " +
                    genderGram[1] +
                    " comprehension skills really shine and show what " +
                    genderGram[0] +
                    " is capable of.";
                } else if (rNum === 3) {
                  comment += `${genderGramCap[0]} is doing well with ${
                    genderGram[1]
                  } comprehension of the lesson and will only need a little guidance.`;
                } else if (rNum === 4) {
                  comment += `${name} seems to understand the information in class. ${
                    genderGramCap[0]
                  } responds to questions accurately when ${
                    genderGram[0]
                  } takes ${genderGram[1]} time to fully understand what ${
                    genderGram[0]
                  } is being asked.`;
                }
                break;
              case "great":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    genderGramCap[0] +
                    " has really amazing in-depth reading comprehension skills which " +
                    genderGram[0] +
                    " applies to questions in class.";
                } else if (rNum === 2) {
                  comment +=
                    genderGramCap[0] +
                    " demonstrates " +
                    genderGram[1] +
                    " understanding of new material by consistently providing answers to my questions.";
                } else if (rNum === 3) {
                  comment += `${name} is understanding the lessons and it shows when ${
                    genderGram[0]
                  } is asked a question and ${
                    genderGram[0]
                  } can find the answer.`;
                } else if (rNum === 4) {
                  comment += `${name} has amazing comprehension skills. ${
                    genderGramCap[0]
                  } is able to engage in natural conversation with ease and really demonstrate that ${
                    genderGram[0]
                  } has a strong understanding of the English language.`;
                }
                break;
            }
            break;

          case "pronunciation":
            switch (rating) {
              case "okay":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    name +
                    " has shown improvement in " +
                    genderGram[1] +
                    " pronunciation.";
                } else if (rNum === 2) {
                  comment +=
                    genderGramCap[0] +
                    " requires extra time to accurately pronounce some words, but " +
                    genderGram[0] +
                    " is making steady progress.";
                } else if (rNum === 3) {
                  comment += `${genderGramCap[0]} is working on improving ${
                    genderGram[1]
                  } pronunciation. We are currently working on breaking down the words and fixing any mispronunciation.`;
                } else if (rNum === 4) {
                  comment += `${
                    genderGramCap[0]
                  } does well to repeat after me but has trouble pronouncing correctly when reading on ${
                    genderGram[1]
                  } own. ${genderGramCap[0]} can improve if ${
                    genderGram[0]
                  } reviews and continues to practice.`;
                }
                break;
              case "good":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    name +
                    " listens well to how I pronounce words and is continuing to improve " +
                    genderGram[1] +
                    " own speaking.";
                } else if (rNum === 2) {
                  comment +=
                    "Sometimes " +
                    name +
                    " stumbles when trying to pronounce a word, but overall, I am very impressed with " +
                    genderGram[1] +
                    " pronunciation.";
                } else if (rNum === 3) {
                  comment += `${name} is doing well with listening to the pronunciation of the words and making sure to have the correct sounds. There are times when ${
                    genderGram[0]
                  } needs to fix the pronunciation, however, it is done with enthusiasm.`;
                } else if (rNum === 4) {
                  comment += `${name} has good pronunciation. ${
                    genderGramCap[0]
                  } is consistent in ${
                    genderGram[1]
                  } pronunciation and require very little help from me when reading in class.`;
                }
                break;
              case "great":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    genderGramCap[0] +
                    " has very good and natural sounding English pronunciation.";
                } else if (rNum === 2) {
                  comment +=
                    genderGramCap[0] +
                    " has excellent pronunciation. " +
                    genderGramCap[0] +
                    " speaks very well for such a young student.";
                } else if (rNum === 3) {
                  comment += `${name} has amazing pronunciation and does not need help with fixing any pronunciation. ${
                    genderGramCap[0]
                  } speaks clearly with confidence.`;
                } else if (rNum === 4) {
                  comment += `${
                    genderGram[0]
                  } has amazing pronunciation when speaking and reading in class. ${
                    genderGramCap[0]
                  } speaks naturally and without any hesitation in ${
                    genderGram[1]
                  } voice.`;
                }
                break;
            }
            break;

          case "participation":
            switch (rating) {
              case "okay":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    "In class time is the opportunity for students' real time English application. I think " +
                    name +
                    ` would improve more substantially if ${
                      genderGram[0]
                    } participated a bit more.`;
                } else if (rNum === 2) {
                  comment +=
                    name +
                    " participates on " +
                    genderGram[1] +
                    " own from time to time, but it would be really beneficial for " +
                    genderGram[2] +
                    ` if ${genderGram[0]} was a little more active.`;
                } else if (rNum === 3) {
                  comment += `${
                    genderGram[0]
                  } is working on participating more. Whenever ${
                    genderGram[0]
                  } answers a question, I encourage ${
                    genderGram[2]
                  } in hopes that ${genderGram[0]} will participate more.`;
                } else if (rNum === 4) {
                  comment += `${name} isn’t as eager to speak and participate in class and misses out on learning opportunities because of this. I am encouraging ${
                    genderGram[2]
                  } to participate more and I hope to hear them speak more in class.`;
                }
                break;
              case "good":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    name +
                    " answers questions and speaks when I give " +
                    genderGram[2] +
                    " the opportunity to. I would love to hear even more from " +
                    genderGram[2] +
                    ".";
                } else if (rNum === 2) {
                  comment +=
                    "Occasionally I need to encourage " +
                    genderGram[2] +
                    " to participate in class, but " +
                    genderGram[0] +
                    " is usually active and participating on " +
                    genderGram[1] +
                    " own!";
                } else if (rNum === 3) {
                  comment += `${name} is doing well with participating in class. At times I need to encourage ${
                    genderGram[2]
                  } to answer.`;
                } else if (rNum === 4) {
                  comment += `${name} answers questions when called on and occasionally speaks up in class to join the discussion.`;
                }
                break;
              case "great":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    name +
                    " does a really good job actively participating in class.";
                } else if (rNum === 2) {
                  comment +=
                    genderGramCap[0] +
                    " always comes to class with a good attitude and ready to participate at every chance " +
                    genderGram[0] +
                    " gets.";
                } else if (rNum === 3) {
                  comment += `${name} is doing an excellent job at participating in class. ${
                    genderGramCap[0]
                  } actively answers all questions and will take part in open discussions.`;
                } else if (rNum === 4) {
                  comment += `${name} is always eager to answer questions in class.`;
                }
                break;
            }
            break;

          case "sentencestructure":
            switch (rating) {
              case "okay":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    name +
                    " could use some improvement when it comes to sentence structure and creating " +
                    genderGram[1] +
                    " own sentences.";
                } else if (rNum === 2) {
                  comment +=
                    genderGramCap[0] +
                    " struggles a little bit trying to piece a sentence together. We have been focusing on this, and I see improvement. ";
                } else if (rNum === 3) {
                  comment += `${genderGramCap[0]} is slowly improving on ${
                    genderGram[1]
                  } sentence structure. We have been focusing on the different parts of the sentence and understanding their meanings and how to use them in our day to day speech.`;
                } else if (rNum === 4) {
                  comment += `${name} struggles with the order of English sentences and should focus on building basic sentences with subject, verb, object structure.`;
                }
                break;
              case "good":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    genderGramCap[0] +
                    " is usually able to form sentences well for questions. We continue to work on it in class and I believe with time and practice " +
                    genderGram[0] +
                    " will continue to improve upon " +
                    genderGram[1] +
                    " sentence structure.";
                } else if (rNum === 2) {
                  comment +=
                    name +
                    " is good at expressing " +
                    genderGram[1] +
                    " thoughts with very few mistakes, but with a little more practice, " +
                    genderGram[0] +
                    " will be great.";
                } else if (rNum === 3) {
                  comment += `${genderGramCap[0]} is doing well with ${
                    genderGram[1]
                  } sentence structure. However, ${
                    genderGram[0]
                  } listens to the corrections and makes adjustments.  `;
                } else if (rNum === 4) {
                  comment += `${name} is doing well but sometimes gets the structure of ${
                    genderGram[1]
                  } sentences a little mixed up. If ${
                    genderGram[0]
                  } slows down to think a little more about ${
                    genderGram[1]
                  } word order, ${genderGram[1]} sentence structure improves.`;
                }
                break;
              case "great":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    genderGramCap[0] +
                    " is really good at creating " +
                    genderGram[1] +
                    " own sentences using proper grammatical structure.";
                } else if (rNum === 2) {
                  comment +=
                    genderGramCap[0] +
                    " is able to successfully communicate " +
                    genderGram[1] +
                    " ideas in English.";
                } else if (rNum === 3) {
                  comment += `${name} is doing fantastic with ${
                    genderGram[1]
                  } sentence structures. ${
                    genderGramCap[0]
                  } is even able to express ${
                    genderGram[1]
                  } thoughts and answers to the lesson.`;
                } else if (rNum === 4) {
                  comment += `${name} is able to speak and write in grammatically correct sentences with ease and fluency.`;
                }
                break;
            }
            break;

          case "speechtest":
            switch (rating) {
              case "okay":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    genderGramCap[0] +
                    " has shown that " +
                    genderGram[0] +
                    " is capable of performing well on speech test when " +
                    genderGram[0] +
                    " studies.";
                } else if (rNum === 2) {
                  comment +=
                    genderGramCap[0] +
                    " has troubles when it comes to speech tests. If " +
                    genderGram[0] +
                    " studies more before class, " +
                    genderGram[0] +
                    " can do really well!";
                } else if (rNum === 3) {
                  comment += `${genderGramCap[0]} is doing well with ${
                    genderGram[1]
                  } speech test. ${name} needs some guidance during the speech test; however, ${
                    genderGram[0]
                  } listens and corrects ${genderGram[2]}self.`;
                } else if (rNum === 4) {
                  comment += `${name} is able to do well on speech test so long as ${
                    genderGram[0]
                  } has practiced and studied.`;
                }
                break;
              case "good":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    genderGramCap[0] +
                    " performs well on " +
                    genderGram[1] +
                    " speech tests.";
                } else if (rNum === 2) {
                  comment +=
                    genderGramCap[0] +
                    " frequently scores well on " +
                    genderGram[1] +
                    " speech tests.";
                } else if (rNum === 3) {
                  comment += `${name} is doing great with ${
                    genderGram[1]
                  } speech test. There are very few mistakes and has shown that ${
                    genderGram[0]
                  } understands what ${genderGram[0]} is saying.`;
                } else if (rNum === 4) {
                  comment += `${name} does well on speech test and often scores high consistently.`;
                }
                break;
              case "great":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    name +
                    " consistently receives fives, the highest score, for " +
                    genderGram[1] +
                    " speech tests.";
                } else if (rNum === 2) {
                  comment +=
                    "It’s clear that " +
                    name +
                    " prepares for " +
                    genderGram[1] +
                    " speech tests, because " +
                    genderGram[0] +
                    " performs well.";
                } else if (rNum === 3) {
                  comment += `${name} does wonderfully on ${
                    genderGram[1]
                  } speech test. There are never any mistakes and it shows that ${
                    genderGram[0]
                  } studied very diligently.`;
                } else if (rNum === 4) {
                  comment += `${name} has received top scores on all of ${
                    genderGram[1]
                  } speech tests.`;
                }
                break;
            }
            break;

          case "handwriting":
            switch (rating) {
              case "okay":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    name +
                    " could improve " +
                    genderGram[1] +
                    " writing substantially if " +
                    genderGram[0] +
                    " slowed down a bit and took " +
                    genderGram[1] +
                    " time.";
                } else if (rNum === 2) {
                  comment +=
                    name +
                    " tends to write too fast which ends up with messy handwriting. If " +
                    genderGram[0] +
                    " slows down, " +
                    genderGram[1] +
                    " handwriting can really improve";
                } else if (rNum === 3) {
                  comment += `${genderGramCap[0]} has shown that ${
                    genderGram[0]
                  } can have legible handwriting when ${
                    genderGram[0]
                  } writes on the line and takes ${genderGram[1]} time.`;
                } else if (rNum === 4) {
                  comment += `${name} needs to slow down and take ${
                    genderGram[1]
                  } time with ${genderGram[1]} writing so that ${
                    genderGram[0]
                  } can write neatly.`;
                }
                break;
              case "good":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    "When " +
                    genderGram[0] +
                    " is writing, it is usually nice writing and easy to read.";
                } else if (rNum === 2) {
                  comment +=
                    "I am pleased with how well " +
                    name +
                    " writes. It’s usually very easy to read.";
                } else if (rNum === 3) {
                  comment += `${name} is doing well with ${
                    genderGram[1]
                  } writing. ${genderGramCap[0]} is taking ${
                    genderGram[1]
                  } time to make sure the words are correct and that the writing is legible.`;
                } else if (rNum === 4) {
                  comment += `${
                    genderGram[0]
                  } has good handwriting especially when ${
                    genderGram[0]
                  } slows down and takes ${
                    genderGram[1]
                  } time to write neatly.`;
                }
                break;
              case "great":
                rNum = Math.floor(Math.random() * 4) + 1;
                if (rNum === 1) {
                  comment +=
                    name + " has beautiful and consistent handwriting.";
                } else if (rNum === 2) {
                  comment +=
                    name +
                    " has some of the nicest handwriting amongst the students in class. ";
                } else if (rNum === 3) {
                  comment += `${name} has uniform handwriting that islegible.`;
                } else if (rNum === 4) {
                  comment += `${name} has excellent handwriting not only on ${
                    genderGram[1]
                  } book reports but in ${genderGram[1]} class book as well.`;
                }
                break;
            }
            break;
        }
        comment += " ";
      });
      return comment;
    },
    addConclusion: function(name) {
      comment = "";
      var x = Math.floor(Math.random() * 3) + 1;
      if (x === 1) {
        comment += "All in all, ";
      } else if (x === 2) {
        comment += "To sum up, ";
      } else {
        comment += "Overall, ";
      }

      x = Math.floor(Math.random() * 12) + 1;
      switch (x) {
        case 1:
          comment +=
            name +
            " is a great student to have in the classroom, and I look forward to seeing " +
            genderGram[2] +
            " progress as the semester continues.";
          break;
        case 2:
          comment +=
            name +
            " is a good student and can become a great English student someday if " +
            genderGram[0] +
            " keeps up the good work.";
          break;
        case 3:
          comment +=
            name +
            ` shows potential to really improve ${
              genderGram[1]
            } English abilities if ${genderGram[0]} keeps working hard!`;
          break;
        case 4:
          comment +=
            name +
            " is a great student and has the potential to be a very good English speaker if " +
            genderGram[0] +
            " keeps studying hard.";
          break;
        case 5:
          comment +=
            name +
            " is an exceptional student and will continue to be one if " +
            genderGram[0] +
            " keeps studying like this.";
          break;
        case 6:
          comment += `${name} is a great student and I am sure if ${
            genderGram[0]
          } continues to study then ${
            genderGram[0]
          } will have a bright future with English.`;
          break;
        case 7:
          comment += `If ${
            genderGram[0]
          } continues to work hard and become more confident in class then I am sure ${name} will continue to improve ${
            genderGram[1]
          } English.`;
          break;
        case 8:
          comment += `I have seen clear improvements over the term. I think the more ${
            genderGram[0]
          } practices the more ${
            genderGram[0]
          } will improve. ${name} is a very smart student and a joy to have in class.`;
          break;
        case 9:
          comment += `I think if ${name} continues to study and work hard then ${
            genderGram[0]
          } will continue to improve ${genderGram[1]} English skills.`;
          break;
        case 10:
          comment += `${name} is incredibly well-rounded in ${
            genderGram[1]
          } English skills. I think ${
            genderGram[0]
          } is on the right track for continuing to improve ${
            genderGram[1]
          } English skills.`;
          break;
        case 11:
          comment += `I think ${name} has accomplished a lot this term and if ${
            genderGram[0]
          } continues to study then ${genderGram[0]} will continue to improve.`;
          break;
        case 12:
          comment += `I think ${name} is a wonderful student and ${
            genderGram[0]
          } is so much fun to have in class. ${
            genderGramCap[0]
          } is a smart student and I would love to hear even more from ${
            genderGram[2]
          } in class.
          `;
          break;
      }
      return comment;
    },
    countWords(str) {
      lastChar = str[str.length - 1];
      if (str === "") {
        return 0;
      }
      if (lastChar === " ") {
        return str.split(" ").length - 1;
      } else {
        return str.split(" ").length;
      }
    }
  };
})();

var UIController = (function() {
  var DOMStrings;
  DOMStrings = {
    inputName: ".students_name",
    inputGender: ".students_gender",
    generateBtn: ".btn_generate",
    clearBtn: ".btn_clear",
    introCheck: ".intro",
    subjectCheck: ".subject_check",
    inputRating: ".subject_rating",
    commentArea: "student-comment"
  };

  return {
    getInput: function() {
      return {
        gender: document.querySelector(DOMStrings.inputGender).value,
        name: document.querySelector(DOMStrings.inputName).value
      };
    },
    addComment: function(comment) {
      document.getElementById(DOMStrings.commentArea).value = comment;
    },
    addWordCount: function(num) {
      var newHtml;
      //create HTML string with placeholder text
      newHtml = "Word Count: " + num;
      document.getElementById("word-count").innerHTML = newHtml;
    },
    addWarningClass: function() {},
    clearComment: function() {
      document.getElementById(DOMStrings.commentArea).value = "";
    },
    clearName: function() {
      document.querySelector(DOMStrings.inputName).value = "";
      document.querySelector(DOMStrings.inputName).focus();
    },
    clearSelected: function(checkedItemsArray) {
      checkedItemsArray.forEach(function(e, i) {
        e.checked = false;
      });
    },
    getDOMstrings: function() {
      return DOMStrings;
    }
  };
})();

var controller = (function(UICtrl, dataCtrl) {
  var input, DOM, newComment, introBtns, wordCount;
  newComment = "";
  DOM = UICtrl.getDOMstrings();
  introBtns = document.querySelectorAll(DOM.introCheck);
  subjectBtns = document.querySelectorAll(DOM.subjectCheck);

  var setupEventListeners = function() {
    document.querySelector(DOM.inputName).focus();
    DOM = UICtrl.getDOMstrings();
    //selecting checkboxes
    introBtns.forEach(function(element) {
      element.addEventListener("click", function() {
        dataCtrl.adjustSelectedArray(element);
      });
    });

    subjectBtns.forEach(function(element) {
      element.addEventListener("click", function() {
        dataCtrl.adjustSelectedArray(element);
      });
    });

    //generate button
    document
      .querySelector(".btn_generate")
      .addEventListener("click", updateComment);
    document.querySelector(".btn_clear").addEventListener("click", clearAll);

    document
      .querySelector(".btn_shh")
      .addEventListener("click", updateCommentShh);

    // when wordcount changes
    document
      .getElementById("student-comment")
      .addEventListener("input", textChange);
  };

  var updateComment = function() {
    input = UICtrl.getInput();
    // //1. clear any data from the pervious comment
    // dataCtrl.clearData();

    //2. add Intro
    newComment = dataCtrl.addIntro(input.name);

    //3. add body
    newComment += dataCtrl.addData(input.gender, input.name);

    //4. add conclusion
    // newComment += dataCtrl.addConclusion(input.name);

    UICtrl.addComment(newComment);

    //5. get word count
    textChange();
  };

  var updateCommentShh = function() {
    input = UICtrl.getInput();
    // //1. clear any data from the pervious comment
    // dataCtrl.clearData();

    //2. add Intro
    newComment = dataCtrl.addIntro(input.name);

    //3. add body
    newComment += dataCtrl.addData(input.gender, input.name);

    //4. add conclusion
    newComment += dataCtrl.addConclusion(input.name);
    UICtrl.addComment(newComment);

    //5. get word count
    textChange();
  };

  var textChange = function() {
    const element = document.getElementById("word-count");
    newComment = document.getElementById("student-comment").value;
    wordCount = dataCtrl.countWords(newComment);
    UICtrl.addWordCount(wordCount);

    if (wordCount < 140 && element.classList.contains("warning")) {
      // remove warning class from element
      element.classList.remove("warning");
    } else if (wordCount >= 140 && !element.classList.contains("warning")) {
      // add warning class
      element.classList.add("warning");
    }
  };

  var clearAll = function() {
    //get the selected checkboxes from intro and subjects and put into one array
    var x = dataCtrl.getSelected();
    var checkedItemsArray = x.selectedIntro.concat(x.selectedSubjects);
    console.log(checkedItemsArray);

    //clear everything from the UI
    UICtrl.clearSelected(checkedItemsArray);
    UICtrl.clearComment();
    UICtrl.clearName();

    //clear the stored data
    dataCtrl.clearData();
  };

  return {
    init: function() {
      setupEventListeners();
      console.log("Started");
    }
  };
})(UIController, dataController);

controller.init();

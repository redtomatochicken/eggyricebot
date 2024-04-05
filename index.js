const { CommandClient } = require('eris')
var counter = 0;
var buttonHit = 0;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// ------------hima quotes-------------

const himahima = [];
himahima.push(
  "I'd like to join the student council to make this school an even better place for everyone.",
"What did you say?",
"Homeroom ran late.",
"Organize paperwork?",
"I'd be happy to do it for you.",
"I won't lose! I will be the next student council Vice President!",
"You're such a brat, Sakurako...",
"Huh? A photo?",
"So did I.",
"Take a look at my right hand! I was going to punch you.",
"There sure is a lot of paperwork.",
"I wonder if we can find anyone to help us.",
"Thank you. I wasn't sure I could do it with just Sakurako's help.",
"Funami-senpai, would you mind taking care of these?",
"Sakurako, you're too slow.",
"We've been in the same class since preschool, and I'm sick of it.",
"Certainly.",
"No, we'll be fine. Thank you again.",
"Of course.",
"You were slow, though.",
"You're so careless. You should watch your step.",
"Our friends came to help us.",
"Oh, right...",
"This is for you, Sugiura-senpai.",
"I wanted to thank you for helping us organize the paperwork.",
"Even you can make them.",
"What, Sakurako? Do you want some, too?",
"How rude.",
"Oh? I forgot my gym clothes.",
"I don't want to ask my rival for help, but... just for today!",
"Thank you.",
"Are you? You know I have a complex about my large chest!",
"Don't bite me!",
"Get out of the way.",
"There!",
"I did it!",
"Sakurako.",
"Cut it out!",
"I'll wash it before I return it.",
"Shut up!",
"Um, Sakurako.",
"You can have them.",
"There were some left over, so...",
"Don't read into it!",
"What do you want?",
"They're not...",
"If Sakurako weren't here, it would be a perfect day.",
"That's disgusting!",
"What's wrong with you?",
"Mine's longer. Mine's longer. No.",
"I'll tear that mouth off. My goodness.",
"I'm here because you said you couldn't finish your homework by yourself.",
"A book report.",
"Please go and die.",
"Shut up and do your homework.",
"Wh...",
"Sakurako!",
"What are you going to do to her?",
"Another non sequitur.",
"Let's see... I believe it's in November.",
"Hey! I can't pretend I didn't hear that!",
"Unlike you, I have good grades!",
"Perhaps it's a little late to ask, but why did you even join the student council?",
"What?",
"You think that's cool?",
"You rely on Akaza-san too much.",
"I do not understand.",
"I suppose you're right. I should learn from Akaza-san and become more thoughtful of others.",
"Please cease living.",
"That was touching. Yes.",
"What? You didn't read anything.",
"I hope that doesn't happen either.",
"I would have much more fun spending Christmas with with the cute Yoshikawa-san, rather than you.",
"Anyone but Sakurako, anyone but Sakurako.",
"Did you decide yet?",
"And I would have preferred Yoshikawa-san.",
"I can't believe I have to do this with you.",
"I know exactly how you feel.",
"My goodness. Let's just order.",
"The Japanese style style salisbury steak set",
"Do you want some cake, then?",
"Because of the Christmas Fest, there are Santa Clauses everywhere.",
"What, then?",
"Excitement, huh?",
"I need some dressing.",
"Maybe I'll have the Japanese style instead.",
"What are you doing?",
"I do not understand.",
"I still have no idea what you're talking about.",
"What? You're so hopeless.",
"You have to learn to eat them.",
"Sakurako, bell peppers.",
"Okay, okay.",
"Eat this.",
"Sakurako, you idiot!",
"I am next vice protagonist Furutani Himawari.",
"New Year's just ended and it's already spring. Time flies.",
"I challenge you to an April Fool's battle, Sakurako!",
"I will be the last one standing!",
"Sakurako just got in the way.",
"What is this?",
"We already hardly get any screen time.",
"I wish this had happened to Sakurako instead of Toshino-senpai.",
"Toshino-senpai knocked before she came in!",
"But she's as impudent as you...",
"The two of you behave rather similarly.",
"I'm not praising you.",
"Aren't the two of you going to your club today?",
"Are you all right, Senpai?",
"What's gotten into you?",
"I didn't expect you to do well in an intellectual contest.",
"What is?",
"Um, am I supposed to do this?",
"I'm... Rivalrun. This is... embarrassing.",
"What? Of course not.",
"Why don't you get out first?",
"My breasts have nothing to do with this.",
"I'll go borrow some futons.",
"What does that mean?",
"I do not want your stifling behavior ruining my wonderfully fresh morning with Akaza-san.",
"You can kiss me, too! You can do that every day!",
"Oh, right. I baked some cookies.",
"They were left over.",
"It's just like you to start eating from your trademark buns!",
"So do I!",
"No! Sakurako, no!",
"But... But this is so sudden...",
"Wait! Don't go so deep...",
"Sakurako... It came out!",
"Senpai, watch out!",
"Look down!",
"I don't like snakes...",
"There must be something wrong with you if you don't mind snakes.",
"No way! If I had a choice, I'd choose cockroaches any day!",
"That has nothing to do with this!",
"Then can you catch it—",
"Who're you impersonating?",
"Sakurako, you're so strong.",
"I knew that would happen.",
"Heads up.",
"She's angry at the wrong person.",
"What? Wait...",
"No, I think she just wants to show her...",
"She must've gotten herself into trouble.",
"I bet you were up late last night.",
"You're hopeless.",
"No.",
"How does that make me mean?",
"Isn't it normal for people to take their own notes?",
"You think name calling will make me show you my notes?",
"You don't say.",
"Sakurako, shut up.",
"Yes, yes. I'll go get it.",
"Hey...",
"Did I hear you say you don't want your Isobe-Age fries, Sakurako?",
"Then allow me...",
"We played five-character shiritori.",
"All you're saying is \"delicious.\"",
"Of course I can!",
"This is rice.",
"I do just fine in class...",
"What sort of game is this?",
"An embarrassing story?",
"...Win?",
"What does that mean?",
"Chocolate?",
"How unexpectedly normal, coming from you.",
"Hey! Why would you give this to someone?",
"If I had eaten this and gotten sick...",
"Is that what it means to win?",
"That's not a story.",
"Huh? I don't have any plans.",
"How very like you.",
"You're just slow.",
"Then let's get to the gym a little early and play.",
"What?",
"Just hurry up and eat.",
"A scarf?",
"Well, I do...",
"Sure. Yes.",
"Unfortunately, I just agreed to help Yoshikawa-san this weekend.",
"That's no way to talk about someone.",
"Yes, of course.",
"Sakurako, you always make this kind of mistake here.",
"First, you need to stop doing that.",
"Also, I've made a list of the words you always get wrong.",
"You should review these.",
"Where did that come from?",
"Unfortunately, I have plans with Yoshikawa-san next Saturday as well.",
"It takes quite a while to make a scarf.",
"I'll be meeting with Yoshikawa-san after school for some time.",
"You should add yarn at the start of a new layer.",
"You will.",
"You're learning quickly, Yoshikawa-san.",
"Being a picky eater stunts your growth.",
"What's wrong with her?",
"If you only use your special attacks, you'll have trouble when you get to the boss.",
"I'll make you dinner, so stop eating so many snacks.",
"Yoshikawa-san.",
"Really? That's great.",
"It was nothing.",
"Sakurako?",
"Why are you angry? Why are you crying?",
"Hit me? I don't know what you're...",
"Could she be...",
"Are you jealous?",
"You can have this.",
"I made this scarf while teaching Yoshikawa-san.",
"Now that I'm done with it, you can have it.",
"The chocolate's a bonus. Can we start walking home and doing homework together again?",
"I suppose I have no choice.",
"Who are you calling your servant?",
"What?",
"Already?",
"Have you ever thought about doing it yourself?",
"Faster?",
"Well, fine.",
"You're opening that here?",
"Sheesh.",
"You don't need to give me anything.",
"Your mouth is covered in chocolate.",
"That's right. You've already given me something.",
"You're the one making it messy!",
"We'll start by cleaning the windows.",
"Come on, Sakurako...",
"Huh? Window Cleaner",
"Why are you pointing that at me?",
"Oh my, Sakurako... Window Cleaner",
"If you don't stop now...",
"I'll shoot.",
"What's it doing here?",
"Start cleaning already.",
"Why would you say that?",
"At least take that triangle off your head.",
"Use this, then.",
"You think?",
"I'm finished cleaning the windows.",
"Clean something, you lazy maid.",
"It's too bad you aren't a mute maid.",
"Do you really hate cleaning that much?",
"Here's a rag. Wipe that.",
"Who do you think you are?",
"Senpai, why do you stare at that ice cream every day?",
"What?",
"What time is it?",
"I'd prefer something simpler.",
"We just need it to work.",
"Hey! That's dangerous!",
"Thank you.",
"Sakurako.",
"What?",
"So where are we going?",
"You didn't even plan that far ahead...",
"What?",
"Black coffee!",
"What're you doing?",
"Akaza-san is still sleeping...",
"You better apologize to her tomorrow!",
"You live next door. Go home!",
"Go home!",
"Thank you, Kaede.",
"Thank you.",
"I'm glad you liked it.",
"Really? I enjoy cooking for you, too.",
"No, not really.",
"Want to go out together?",
"Where would you like to go?",
"Yeah? Well, we can go anywhere you want.",
"Why?",
"Huh?",
"That was just...",
"What?",
"It went up...",
"That can't be right.",
"One more time...",
"I've really gained weight...",
"Why?",
"I haven't been binging on food...",
"If anything, I've been trying to eat a balanced diet...",
"Thanks for the food.",
"I'm not really hungry. I'll have some more if I get hungry.",
"Yes...",
"Shut up!",
"Just hold my feet.",
"I'll get you a steak for lunch.",
"I can't do any more...",
"I know, but...",
"Wouldn't she just disappear?",
"I'm sorry. I don't get where this is going.",
"Thank you. How am I supposed to use this?",
"So she's not really using it...",
"Maybe like this...",
"Or this...",
"Or perhaps this?",
"I don't know, Sakurako...",
"You're just lying around!",
"But it's so hot outside...",
"What?",
"I'm working up a good sweat.",
"I wonder what part of me is gaining weight.",
"Aside from my chest.",
"Liar! I gained weight.",
"It must be somewhere.",
"Sakurako...",
"Please answer me seriously!",
"What?",
"Dinner's ready.",
"I'm on a diet.",
"Anyway, try some of the boiled pumpkin.",
"I'm sure it's delicious.",
"I'm so hungry, I can't sleep.",
"Maybe I'll snack on some cookies...",
"No, I mustn't!",
"I'll have skipped dinner for nothing!",
"I have to refrain so I lose that extra weight.",
"I'm fine. I've been drinking vegetable juice.",
"What?",
"I'm sorry...",
"But...",
"But I gained some weight...",
"I'll try measuring myself.",
"They have gotten bigger.",
"My waist hasn't changed.",
"But I feel conflicted now...",
"You think so? Thank you.",
"What?",
"What do you want?",
"What? Now?",
"You're hopeless.",
"I thought you were done singing?",
"You're always so selfish.",
"Sakurako, this is a duet.",
"What did you say?",
"Sugiura-senpai, you haven't sung anything yet.",
"That's why they're Russian.",
"What did you come here to do?",
"You can't afford to take breaks!",
"Should we figure out who's best at each subject?",
"I'm good at English and math.",
"And I'm okay at social studies,  so I can probably cover that.",
"That really doesn't help us at all.",
"Sakurako!",
"You mustn't slack off.",
"Akaza-san, about this problem...",
"Oh, I see.",
"I see. So that's how it works.",
"What're you talking about?",
"That should've been obvious.",
"Please don't become friends!",
"Toshino-senpai!",
"Could you not call me Boob-chan?",
"She gave me a nickname...",
"Recipe books and study guides.",
"Toshino-senpai, what  are you looking for?",
"I see.",
"Toshino-senpai's ribbon...",
"I thought it was a ribbon, but it's cat ears?",
"What should I do?",
"Should I say something?",
"But if she's wearing that to look nice...",
"I want to know.",
"I want to know, but I can't ask!",
"And now that I look more closely... What's that?",
"What is that?",
"What animal is that? Whose ears are those?",
"Senpai...",
"I don't know what to say...",
"M-Memorize?",
"Oh, you're right.",
"It brings everything together so it's easy to understand.",
"She's a bit strange, but I have to respect how mature she actually is.",
"She's nothing like Sakurako.",
"Where'd that come from?",
"You're such a child.",
"Who would you go with, anyway?",
"Why do you act so condescending?",
"Well? Where are we going?",
"Is that really a trip?",
"I hope you don't get tired and give up halfway.",
"Haven't we walked far enough? Have you discovered anything new?",
"No one cares about that.",
"Anyway, I'm feeling a little hungry. Shall we stop somewhere?",
"What's that? A rock?",
"Did you make this for me?",
"Oh, no. Thank you.",
"It's so salty.",
"Did you taste this before serving it? You should try it.",
"How's it taste?",
"How stubborn are you?",
"I'll choke you with that rice ball!",
"Could you not say things like that?",
"I've heard playing dead is actually dangerous.",
"I heard on TV that they'll stay away if you let them know there are humans around.",
"For example, by whistling.",
"You're not whistling.",
"That's it. A bell.",
"This should work, too.",
"You're still not whistling.",
"We haven't beaten any bears, either.",
"Huh?",
"Wh-What is it?",
"What? You don't remember how we got here?",
"This is nothing to laugh about! I thought you'd remember how to get home!",
"Don't be proud of it.",
"A third time?",
"We need to find a way home.",
"Shut up and think.",
"Sakurako is thinking harder than usual.",
"Maybe she has a plan!",
"Sakurako, have you got an idea?",
"What?",
"Why didn't you tell me sooner?!",
"Oh my. You're right.",
"What are we going to do?",
"We've no idea where we are, and we're lost.",
"That's it! A phone!",
"We'll be fine if we call home and have someone pick us up!",
"Sakurako, we can call...",
"Unbelievable.",
"She plays until she drops. Literally.",
"Okay.",
"The wolf following Little Red Riding Hood saw her playing...",
"She hasn't matured a day since we were kids.",
"I knew nothing good would happen today.",
"I suppose I haven't matured either, if I followed her knowing that.",
"W-what's that?!",
"Could it be? A bear?!",
"Akaza-san...",
"What are you doing here?",
"These woods? You walk this far?",
"Wake up already!",
"Hello.",
"Is Sakurako here?",
"Sorry to bother you.",
"Uh, I'll have some tea, then.",
"Yes.",
"Sure, go right ahead.",
"What's with that weird ringtone?",
"Is it a school friend?",
"Just what is their relationship?",
"Welcome back.",
"Sakurako, does your sister have a girlfriend?",
"Never mind.",
"I didn't know!",
"I'll show you how to do it. Let's get to work.",
"I didn't sit next to you because I wanted to.",
"I can't read your textbook if I don't sit here.",
"Then it would be hard for you to read.",
"Who is?",
"If you insist.",
"Here, this one's next.",
"When this happens, move the adverb...",
"Listen to me.",
"See? You're not listening.",
"We can't read the characters.",
"Thanks.",
"I wanna be the wife!",
"I don't wanna be the husband!",
"But...",
"Sa-chan, thank you.",
"Job?",
"When we get married, I'll make you sweets every day.",
"Yeah.",
"I'll make really good stuff.",
"I could say the same!",
"I always help you with your homework! How dare you call me that?!",
"Who's the one always eating my lunch?",
"It's you.",
"We'll never finish at this rate.",
"What a shame. I'd even brought some homemadesweets to share with you.",
"You can eat them once you've finished your homework.",
"Madeleines.",
"I'm your protagonist who's finally arrived, Furutani Himawari.",
"I've been waiting ages for my turn to do the preview.",
"Our next episode will kind of be our final, so it may be a little serious.",
"Don't worry, though. Sakurako will be her usual self.",
"He took no longer than usual.",
"Oh my. Someone wrote on this desk. That's unfortunate.",
"Wouldn't it be sad to start your first day at a new school with a vandalized desk?",
"Someone wrote on your desk...",
"I'd like to join the student council to make this school an even better place for everyone.",
"What did you say?",
"How unusual for you to introduce yourself properly.",
"A warning from God?",
"I didn't write the script!",
"What in the world are you doing?!",
"I'm not mad at all!",
"You just can't take a hint!",
"Why do you two look so surprised?",
"Wh-What amazing acting.",
"I thought it was a graveyard...",
"Quiet! Sakurako, quiet!",
"I can't do that!",
"We brought cookies to share with—",
"What?",
"What on earth happened here?",
"Wait, Sakurako!",
"I'm sorry. I'll leave the cookies here.",
"Wait, Sakurako!",
"Excuse the intrusion.",
"The straws only go up to six.",
"One of us is the King.",
"I'm three.",
"But...",
"I guess I don't mind if Sugiura-senpai kisses me on the cheek...",
"O-Okay.",
"You're the one who issued it.",
"You mean north.",
"It's the only way to draw it.",
"Do your homework already.",
"If she'd take her studies more seriously,",
"she wouldn't be so panicked before tests...",
"She's doing her homework so seriously!",
"She finally feels motivated...",
"Sakurako...",
"She even brought that?",
"Could there be some reason  why she refuses to study?",
"Perhaps there's a painful memory...",
"Sakurako...",
"Is there something bothering you?",
"Well, we are talking about you.",
"You don't have anything to worry about.",
"Shut up.",
"She seems a bit down.",
"Does she hate studying that much?",
"Does it make her realize how stupid she is?",
"But if she never gets better at it, she'll never grow.",
"What she needs is tough love.",
"Sakurako.",
"I have something serious to say. Listen closely.",
"You certainly are stupid,",
"but don't let it get you down.",
"Besides, um...",
"I don't d-dislike",
"that about you.",
"What? What are you—",
"What?",
"I've been thinking about you this whole time.",
"You shouldn't call people stupid.",
"Oh, good.",
"She wants to study now.",
"Sakurako, what's the answer to this question?",
"What?",
"You're the one who's staring too much.",
"What did you call me?",
"Those breasts are ridiculous!",
"Don't you think that's too mean?",
"Of course.",
"It's my masterpiece.",
"Try not to react the same way I did.",
"You're worried that your breasts are underdeveloped.",
"If anything, you should be grateful.",
"What are you doing?",
"Then you give me yours!",
"I agree! This is no joke.",
"Come on, Sakurako. Fix those breasts so they look normal.",
"There. A brand new brush.",
"For some reason new notebooks",
"and brushes make me nervous.",
"Oh?",
"No, it's nothing.",
"By the way, how does that brush feel?",
"I'm glad I could help...",
"Hey! What are you doing?",
"Well, I find it embarrassing!",
"That doesn't help anything!",
"Um...",
"If anything, I've managed to preserve your privacy.",
"You need to shape up.",
"Well,",
"be serious and strong...",
"Quiet. For example...",
"Like the ideal Japanese woman.",
"How about Sugiura-senpai?",
"You should try to be like her.",
"I advised her to shape up and",
"try to be more like Sugiura-senpai.",
"No one told you to copy that.",
"She's copying her physical appearance again...",
"Sugiura-senpai seems desperate.",
"Even though you're the student council vice president?",
"What are you going to do if you make her stupid?",
"There it is.",
"Sugiura-senpai isn't so quick to pick fights.",
"I'm sorry.",
"Senpai.",
"I thought this might happen.",
"Sakurako, um...",
"I think you were plenty composed today.",
"Yes, so...",
"Really? That's great.",
"It's a little embarrassing, though.",
"Do you remember saying the same thing before?",
"They're cute.",
"Do you understand what you're saying?",
"Yoshikawa-san, are you all right?",
"Thank you.",
"I can't think of anything on the spot.",
"That's so childish.",
"You were serious?",
"What kind of idea is that?",
"Anyway, it's hard to surprise someone.",
"Please don't.",
"Did she see a ghost?",
"I'd like to get this over with.",
"That's right. What's wrong with that?",
"What?",
"Of course.",
"My body's just a little cold.",
"Probably something stupid again.",
"Sakurako's fortunes...",
"Firewood...",
"We don't need background music.",
"That's too broad.",
"Approximate color... Approximate...",
"Did you mean orange?",
"That's enough.",
"So she can write red.",
"I'm impressed you could tell.",
"You need to study your kanji more.",
"Purple and orange.",
"No, they're not.",
"Peach uses the tree radical.",
"I'm glad you understand now.",
"Don't act like it can't be helped.",
"That can't be helped.",
"What kind of monster is that?",
"Oh, really?",
"Don't scavenge for food on the way home.",
"I am distressed.",
"My back hip circle test is tomorrow.",
"I talked to Sakurako about it, but...",
"I tried talking to Akaza-san and Yoshikawa-san, but...",
"Either way...",
"Please! Teach me how to do back hip circles!",
"The smallest advice helps!",
"Thank you.",
"Okay.",
"It's no use...",
"Okay...",
"I did it.",
"Okay.",
"I need to try harder.",
"I'd be letting my seniors down if I gave up now.",
"Okay.",
"There!",
"There!",
"One more time...",
"There!",
"Here...",
"What?",
"I did it!",
"Thank you. It's all thanks to you, Sakurako.",
"I hope you'll help me next time, too.",
"Sugiura-senpai!",
"Thanks to you, I did it!",
"Thank you so much!",
"How cute.",
"Thank you very much for the food.",
"By the way, Sakurako, a catch refers to fish.",
"I'll look it up next time.",
"Did you say something?",
"Would you like some, president?",
"You shouldn't compare her to yourself.",
"It's strange.",
"When they're cut differently, they seem to taste better, too.",
"I'm totally flat.",
"Please, Sakurako-chan-man!",
"Make me voluptuous!",
"Sakurako-chan-man!",
"Sakurako, are you hungry?",
"Here, have some sweets.",
"Of course it is.",
"After all, I made this for you.",
"What's wrong? Why are you making that cute face?",
"Oh, my. You have some on your cheek.",
"Oh, please. You're so weird, Sakurako.",
"We have homework, don't we? Let's go.",
"I'll stay with you for hours and hours.",
"You're awfully quiet today.",
"What's wrong? Why are you making that cute face?",
"What was that for?",
"Unbelievable.",
"Good morning.",
"I baked chocolate cookies for today.",
"These are the cookies.",
"Here.",
"These are for you.",
"What?",
"Cookie monster?",
"Sakurako.",
"What's wrong with you?",
"You're acting weird and restless.",
"Your face seems red, too.",
"What was that for?",
"Sakurako, I had no idea you were into that.",
"Then what on earth is wrong with you?",
"Stop saying I'm not nice, you cutting board!",
"I'm talking about your perfectly flat chest, of course!",
"Watermelons?",
"You said you didn't want them.",
"Now you're being impudent!",
"What is this?",
"I see...",
"I won't take that from you.",
"\"This is the Story of a Little Love and Courage.\"",
"Is she her friend?",
"You're right.",
"By the way, did we have to wear these?",
"Fine, whatever.",
"In any case, she didn't have trouble buying everything.",
"Not like you.",
"When I asked you to get soy sauce the other day...",
"What?",
"You don't need to make stupid jokes. Let's Protect the Neighborhood Kids",
"You can't be serious.",
"But how?",
"What?",
"You look really pale.",
"We have art first period.",
"We're down two points.",
"Meatballs and potato salad.",
"We have all the ingredients.",
"Do you mind if I join you?",
"I'm responsible for lunch, too.",
"Besides, I enjoy cooking with someone else.",
"It's sort of exciting.",
"I'm so excited for tomorrow.",
"Indeed.",
"Oh, this is...",
"When I told my mother about the flower viewing,",
"she dug these out of the closet.",
"I thought they'd help add to the atmosphere.",
"I wonder what they're doing right now.",
"There are a lot of people here.",
"Don't be so rude.",
"Mister?",
"I guess it was too difficult for you, Sakurako.",
"Yes, yes. Good work.",
"I'm so glad you like it.",
"Is it in that bag?",
"It's all right, you two.",
"Thank you.",
"What is that?",
"Another fortune teller?",
"Wait, district?",
"Fine.",
"There.",
"I see...",
"You're right.",
"I'd completely forgotten.",
"Of course.",
"Sakurako, yours is a bowl lid.",
"I'm joking.",
"I'm jealous.",
"There are koi over there.",
"It's your fault for dropping caterpillars on us.",
"I feel like my heart is being cleansed.",
"There you go again."
);

// ---------- end hima quotes ---------



//------------ saku quotes-------------

const sakusaku = [];
sakusaku.push(
  "Acting like a goody-two-shoes? What an idiot.",
  "You wanna fight?",
  "Sorry I'm late.",
  "No problem. Leave it to us!",
  "Hooray!",
  "I won't lose either! The Vice President always becomes the President!",
  "I won't lose to you, Himawari!",
  "Yeah!",
  "The student council group photo!",
  "I pretended to get along with you even though I didn't want to!",
  "What about your hand?",
  "What?",
  "I'll get you first!",
  "I'm a pacifist...",
  "Yeah. I'd like to take care of all of it and impress the upperclassmen.",
  "I bet we could ask those girls.",
  "Yeah! The two of you aren't in a club, right? Do you think you could help?",
  "Wow, really?",
  "Didn't you have a club to go to?",
  "Hey! That pudding!",
  "Himawari-san, you're the one who hasn't made any progress.",
  "That's right! We're always fighting, but we just can't get rid of each other!",
  "So am I!",
  "I'll do it.",
  "All right!",
  "We're finished!",
  "Thank you for all your help, everyone!",
  "Thank you.",
  "Everything's neat and tidy. The upperclassmen will be impressed!",
  "Look who's talking...",
  "Thanks...",
  "Huh? Sugiura-senpai, what's wrong?",
  "Toshino-senpai and them helped us, too!",
  "Cookies...",
  "Huh? I don't want any!",
  "I said I didn't want any!",
  "Stupid! Idiot!",
  "I've got two...",
  "Do you want one?",
  "Boing, boing!",
  "Are you trying to start a fight?",
  "I missed!",
  "Just this once, all right?",
  "Boing, boing!",
  "Just give it back!",
  "Sheesh.",
  "Are you trying to make me angry?",
  "What? This...",
  "What?",
  "They're wrapped. The ones she gave to Akari-chanand the others were just in a tin.",
  "I know! You wanted to give these to someone you like, but they rejected you!",
  "Those unforgivable breasts...",
  "Take this!",
  "Let's light them! Come on!",
  "No, mine is!",
  "No, mine is!",
  "Hey, tell me the answer to this one.",
  "You cheapskate.",
  "What homework do you have left?",
  "That's why you've been reading that book.",
  "When you're done, tell me what it's about.",
  "Don't say it like that.",
  "I don't want to think any more. My brain's tired.",
  "Tell me the answer. Don't you care what happens to her?",
  "I'll squish her cheeks! And tickle her a lot!",
  "I'm sorry.",
  "When's the next student council election?",
  "I see. I'll become the vice president in November.",
  "Unlike you, I've got a lot of friends. I'm sure I'll win.",
  "Because you said you were joining the student council.",
  "You on the student council without me felt like losing, and I didn't like it.",
  "Besides the student council's pretty cool, don't you think?",
  "We work hard for the school behind the scenes!",
  "We're just like Akari-chan who changes the water in the vase every day.",
  "Akari-chan's actually amazing!",
  "I scraped my leg!",
  "My button came off!",
  "I forgot my chopsticks!",
  "See?",
  "I'm sure she secretly fights evil in the name of justice!",
  "And that's how she defended peace and her face time today.",
  "Go! You can do it, Akarin!",
  "Her buns turned invisible after she got them back. Akarin's invisibility is amazing!",
  "Then show me your homework!",
  "Gross.",
  "Are you going to write your report?",
  "All right, then I'll write mine, too.",
  "I agree. I might end up spending Christmas with Himawari.",
  "Then I'll spend my Christmas with Akari-chan!",
  "Anyone but Himawari, anyone but Himawari.",
  "I wanted to be with Akari-chan.",
  "This is the worst case scenario.",
  "My Christmas is ruined!",
  "Wait!",
  "I haven't decided yet.",
  "Oh, they've got a new pasta! Let's see...",
  "What are you having, Himawari?",
  "That looks good.",
  "No way! I don't want the same thing as you.",
  "Just wait!",
  "This doesn't feel like Christmas at all.",
  "What? Let me see that!",
  "There's a reindeer version, too! And a miniature cake.",
  "No, no. That's not what I meant!",
  "You know... We're missing that fresh excitement.",
  "No breasts!",
  "I'm in a terrible mood! So no breasts allowed.",
  "Your breasts have ruined my Christmas.",
  "I don't like carrots. Eat them.",
  "But...",
  "What? Oh, fine.",
  "One more.",
  "Why'd you do that?",
  "True next vice protagonist Omuro Sakurako here!",
  "I'll never let Himawari take the titles of vice protagonist or vice president!",
  "Someday I'll even have bigger breasts, damn it!",
  "Oh, I forgot about the preview.",
  "What did you say? Well, your annoying boobs got in the way!",
  "What?",
  "What's going on?",
  "If you have something to say, say it, you busty beast!",
  "Yeah, as... Hey!",
  "What? You'll embarrass me.",
  "Quit acting like a good girl, you busty moron.",
  "Stupid, stupid.",
  "Neither will I.",
  "Don't treat me like an idiot.",
  "That's odd...",
  "When did Akari-chan put a stone there? I didn't notice at all.",
  "Excessive.",
  "Can you tell the difference?",
  "Himawari, even your boobs have turned bright red.",
  "A rush mat's good enough for you.",
  "Akari-chan!",
  "What do you think you're doing?",
  "What'd you say?",
  "Akari-chan! You can give me a good morning kiss, if you want!",
  "It's not like I'm happy or anything...",
  "What was that?",
  "I want to see you do that again. Your \"Akarin.\"",
  "I see.",
  "What? You're really gonna do it?",
  "You can't escape now.",
  "More... Deeper...",
  "It's so... tight...",
  "It's... It's coming!",
  "It went back to hiding.",
  "Nope! I don't like to touch them, though.",
  "They're way better than cockroaches.",
  "No, that's crazy.",
  "Ikeda-senpai, you're not scared?",
  "You all disgust me!",
  "I, Sakurako-sama, shall capture the snake for you!",
  "Hey!",
  "Come on out, snake!",
  "Come out! Come...",
  "Then you do it!",
  "Fine then, I'll just grab you with my hand!",
  "I'll be fine as long as it doesn't bite me.",
  "You should've said that earlier!",
  "Now I'm angry!",
  "Prepare yourself, snake!",
  "Got it!",
  "It'd be a waste to just let it go.",
  "I'll go show Akari-chan!",
  "Akari-chan!",
  "Look, a snake!",
  "What are you doing?",
  "I'm so tired!",
  "Once I started reading The Glass Mask, I couldn't stop.",
  "Oh, right.",
  "I'm gonna sleep through first period, so let me copy your notes later!",
  "What?",
  "Why not?",
  "Himawari, you're so mean!",
  "Because it is mean.",
  "Fine, you oppai majin!",
  "Monster, monster, oppai majin, go!",
  "This is actually kinda fun!",
  "Isobe-age! Isobe-age!",
  "But I like them.",
  "Hey, Himawari, my lunch.",
  "These are mine!",
  "Oh my God!",
  "Forgot chopsticks...",
  "Akari-chan, thank you!",
  "You're so much better than Himawari!",
  "How mean to only bring chopsticks for yourself!",
  "I'm sorry!",
  "What did we do yesterday?",
  "Let's all speak English!",
  "Starting now, only English!",
  "Start!",
  "Oh, delicious!",
  "Isobe-age delicious!",
  "Can you do any better?",
  "I know that!",
  "Let's say cheesy things.",
  "Chinatsu-chan, your eyes are beautiful.",
  "They're like stars twinkling in the night sky.",
  "That's not really the same.",
  "Oh, Himawari! Your Isobe-age are truly fine and delicious looking...",
  "Gimme!",
  "Then it's time for this!",
  "I made it during class.",
  "Roll it.",
  "Okay, you gotta tell us one.",
  "You're next, Akari-chan.",
  "Now you have another embarrassing story you can tell!",
  "Himawari, you're next.",
  "Himawari won, huh?",
  "Here you go.",
  "To be honest, I dunno how old that chocolate is.",
  "I'm next.",
  "Isn't it almost Valentine's Day?",
  "Who's planning to give someone chocolate?",
  "What about you, Akari-chan?",
  "I buy some every year, but I always end up eating it myself.",
  "Are you calling me a fatty?",
  "That was quick!",
  "I still haven't finished  my Isobe-age fries!",
  "Hey, wait.",
  "Don't you know what will happen if you leave without me?",
  "CHOP! CHOP! CHOPPUSUTICKKUUUU!",
  "Himawari!",
  "I got an extra assignment because I forgot my homework.",
  "It's due next Monday.",
  "Could you help me with it this weekend?",
  "What? Really?",
  "I don't need Himawari.",
  "You can take her.",
  "She went shopping for yarn with Chinatsu-chan.",
  "No, I'm not lonely.",
  "I was just gonna have her help me with my assignment.",
  "What am I gonna do?",
  "Really?",
  "Okay, then let's go to my house!",
  "Himawari, I'm thirsty...",
  "Oh, sorry. It's a habit.",
  "I don't get this!",
  "Boobs!",
  "Oh, sorry! It's a habit!",
  "Yeah, this part...",
  "Of course. Himawari's good at teaching me...",
  "Sorry, I wasn't listening.",
  "Himawari! You're my personal tutor!",
  "You should be happy I chose you.",
  "So, next Saturday...",
  "Again?",
  "After school, too?",
  "I'm cheerful!",
  "I hate pumpkin.",
  "Shut up!",
  "You don't like peppers, Himawari!",
  "I'm going to the bathroom.",
  "Let's see...",
  "Um, this is...",
  "Sheesh!",
  "Shoot! How come Himawari's having all the fun?",
  "I can have fun, too!",
  "Okay, go!",
  "Shut up!",
  "Shut up, shut up! Ow!",
  "No fun, no fun, no fun!",
  "Why do I feel so sick?",
  "Chinatsu-chan... I mean, Himawari!",
  "It's fine if you wanna teach Chinatsu-chan to knit a scarf, but it's still your responsibility to help me with my homework! Argh!",
  "I hate scarves!",
  "I've had enough. I've had enough!",
  "Why? Why? Why are you spending all of your time with Chinatsu-chan?",
  "Have you forgotten it's your job to check my homework?",
  "I don't know! I don't know why, but I feel so sick!",
  "Lately, when I see you and Chinatsu-chan together, I want to hit you!",
  "I'm not talking about food!",
  "Huh? That's my servant! I'll work you hard!",
  "Hey, Himawari.",
  "Check my homework today.",
  "It's been building up since you were gone.",
  "I tried, but I can't do it.",
  "It's way faster when you show me how to do it.",
  "Hooray!",
  "I'm hungry.",
  "Oh, I didn't give you any chocolate...",
  "Should I give you something on White Day?",
  "Really? Lucky me!",
  "Here you go.",
  "Um...",
  "This scarf makes my neck itch.",
  "Your lunchtime protagonist is the Isobe-age Oomuro Sakurako!",
  "What should I give Himawari on White Day?",
  "You're supposed to give people something you'd like to receive, right?",
  "I know! I'll give her lots of fish cakes!",
  "Good idea.",
  "I was just thinking it's getting a little messy.",
  "Freeze!",
  "Oh, my mistake.",
  "I thought you were a oppai majin.",
  "She's serious...",
  "What's this?",
  "There's all kinds of stuff in here.",
  "I see.",
  "Can we have a mock culture festival?",
  "Maid of the dead.",
  "I couldn't find one of those frilly headbands.",
  "What is it?",
  "Well, I guess that's close enough.",
  "I'm hungry.",
  "They say you shouldn't judge a book by its cover.",
  "Just because I make a cute maid doesn't mean I have to clean.",
  "Sheesh! It's my fault for dressing like this!",
  "There!",
  "Tada! I changed my job from maid to Omuro Sakurako!",
  "Now you can't tell me to clean.",
  "What?",
  "Himawari, you idiot.",
  "You're an evil stepmother.",
  "I'm a modern day Cinderella.",
  "I guess I have no choice...",
  "Oh, I know. When I'm done, can I have some pudding as a reward, Sugiura-senpai?",
  "Hooray!",
  "So, can I have some pudding?",
  "That sounds fun! Let's play.",
  "I'll start.",
  "Stamp.",
  "Hooray, pudding!",
  "Really? Guess it can't be helped, then.",
  "I'll have to hold back this time.",
  "Ice cream! Can I have it?",
  "Yay! Lemme try!",
  "Huh? It's moving by itself...",
  "Huh? What?",
  "That's not radio controlled!",
  "Why even have this controller?",
  "What? But that's so boring.",
  "We need something with more of a bang to it!",
  "Let's have some ice cream.",
  "What kind of story was that?",
  "Himawari!",
  "Play with me!",
  "Himawari, you're here, right?",
  "Sakurako-sama is willing to play with you!",
  "Hey!",
  "I hope your boobs explode, you oppai majin!",
  "She's not answering.",
  "I guess she really isn't home...",
  "Oh, Kaede...",
  "What?",
  "No... Not really...",
  "What?",
  "I mean, I \"still don't\" what?",
  "Thanks.",
  "You're a good girl.",
  "Himawari, you're late!",
  "Your boobs weigh ya down! Cut 'em off!",
  "Good question!",
  "I was bored!",
  "It's Akari-chan.",
  "Okay, let's follow her!",
  "She's buying something.",
  "Akari-chan likes that?",
  "Don't force yourself.",
  "Sorry, I couldn't help it...",
  "This is bad! Some pervert might do something to her!",
  "I'll save her!",
  "Okay.",
  "I'm tired.",
  "I'm sleeping over. I want Wagyu steak for dinner.",
  "Sushi's fine too!",
  "You're such a good girl, Kaede.",
  "Not like my little sister...",
  "What?",
  "What a nice little sister...",
  "By which you mean I'm bothering you. Right?",
  "You too, Hanako?",
  "Dinner, huh?",
  "I want Camembert pizza.",
  "What about curry?",
  "Fine.",
  "But you know, being called a pest doesn't make me want to do you any favors.",
  "If you want me to go shopping, can't you ask nicely?",
  "What?",
  "That doesn't make me feel any better!",
  "We're having curry for dinner. Make it.",
  "You gained weight?",
  "You're a fatty.",
  "So? How much did you gain?",
  "What?",
  "What? You only did ten.",
  "You need to do it like this!",
  "Your body's too heavy?",
  "You gotta do that thing they do in manga. When people draw out their true power...",
  "Just take off your boobs like that.",
  "I borrowed this from my sister.",
  "Well, my sister...",
  "She uses it like that.",
  "Enough already! Just go run around outside!",
  "If you sweat a bunch, you might lose weight.",
  "So... hot...",
  "Why do I have to do this, too?",
  "Sheesh! I'm already skinny, so now I'm gonna be even skinnier!",
  "I don't care if you're fat!",
  "Go be a fatty by yourself!",
  "I'm turning on the AC!",
  "Your boobs.",
  "Nothing's really changed.",
  "I don't know.",
  "You're bowing?",
  "Himawari, you're that worried about this?",
  "Fine, then...",
  "If you say, \"Help me, oh beautiful Sakurako-sama,\" then I might answer.",
  "What?",
  "She's still dieting?",
  "How can you keep going on about this diet?",
  "Kaede's worried sick about you!",
  "I told you the other day you look the same. I meant that! It's the truth!",
  "Your hips, legs, and arms haven't changed!",
  "I'm all for it!",
  "I've never heard of it.",
  "You're next, Sugiura-senpai!",
  "I don't know this part. Himawari, come here!",
  "Here!",
  "I dunno the words.",
  "I know this part.",
  "This part's fun to sing!",
  "I put this song in!",
  "Get out of the way.",
  "Who cares?",
  "There's no rule saying I can't sing a duet by myself.",
  "Your small-mindedness is why your boobs are so big.",
  "What? I don't want that.",
  "I brought tons of snacks!",
  "I brought cards, too!",
  "I also brought...",
  "Huh? We're not gonna take breaks?",
  "This is boring!",
  "Arts and crafts...",
  "I'll study later.",
  "Akari-chan, here. Say, \"ah.\"",
  "Akari-chan, did you buy this ribbon?",
  "Akari-chan, you're so funny!",
  "Really? Maybe it's my intelligence...",
  "Doesn't Toshino-senpai cram",
  "the night before a test and score the highest in her grade?",
  "If I'm like her, maybe that'll work for me.",
  "All right!",
  "A lie?",
  "I understand!",
  "So, what happened to my bread?",
  "Onions and tofu and grilled meat...",
  "What are you making?",
  "You can make that at home?",
  "Huh?",
  "You made bread before, too!",
  "Funami-senpai, are you a chef?",
  "I thought it was an instant dinner.",
  "I'm supposed to cook today.Is there anything easy I can make?",
  "That's a good idea! You just buy 'em and fry 'em.",
  "All I have to do is add hot water!",
  "But they look a bit weird.",
  "I've never seen 'em so black.",
  "I wonder where they're from. Do you think they're cute?",
  "What's going on?",
  "I wanna go on a trip, too!",
  "I'm jealous of the upperclassmen's trip.",
  "I wanna go somewhere, too! I wanna go!",
  "I have no choice. I guess I'll go with you.",
  "I don't have any money, so we're going as far as we can walk.",
  "Don't treat me like a kid! I'm an adult!",
  "Stupid, stupid!",
  "Yes.",
  "There are a bunch of people named Hasegawa around here.",
  "There are probably lots of Shibatas, too.",
  "A rice ball.",
  "You used to like bonito. Do you still like it?",
  "N-No. If you don't want it, give it back.",
  "What's that?! But I made it for you!",
  "What?",
  "You're just too picky when it comes to tas—",
  "There's just enough salt to restore what's lost during an intense workout.",
  "Fitness food for a true athlete.",
  "Its flavor would make a TV gourmet reporter exclaim, \"It's a festival of salt!\"",
  "Himawari, you like bonito, right? You can have mine, too.",
  "The forest is getting a little thick.",
  "There aren't any bears around here, are there?",
  "What are we supposed to do if a bear appears? Play dead?",
  "Whistling? Leave that to me.",
  "Good job, Himawari. You're always prepared.",
  "We'll take that bear down with our bare hands.",
  "Himawari.",
  "I've been wondering for a while...",
  "Where're we?",
  "I don't.",
  "Butler!",
  "Maybe if we call a butler, a limousine will—",
  "Okay.",
  "There's a caterpillar on your foot.",
  "You told me to shut up.",
  "There's a park over there.",
  "Read it, read it!",
  "I'm home.",
  "Huh? Did I walk into the wrong house?",
  "My sister's on the phone, huh?",
  "I smell oranges.",
  "Himawari, you drank my orange juice, didn't you?",
  "I was looking forward to drinking that!",
  "Fine, then. I'll have milk.",
  "To make up for the juice, do my homework before going.",
  "I've got my stuff.",
  "Why are you sitting next to me? Sit over there.",
  "I'll turn it around for you.",
  "Geez, you're selfish.",
  "We'll do this, then.",
  "Actually, I wouldn't mind letting you sit next to me.",
  "That hits the spot!",
  "I'm listening. What's that about adjectives?",
  "Tell us what it says.",
  "I wanna be the wife!",
  "Poor Hima-chan.",
  "I know.",
  "You can write your name in the wife's spot.",
  "It's okay, just go like this.",
  "Now we're both the wife.",
  "What do we write here?",
  "Okay.",
  "Really?",
  "Let's see...",
  "I'll eat candy every day.",
  "I love you!",
  "I'd never wanna be friends with her!",
  "What was that, you booby demon?",
  "So what! You're the one who drank my orange juice!",
  "I don't wanna do this anymore.",
  "If I don't wanna, I don't wanna.",
  "What? Let's eat them!",
  "What?",
  "What did you make, anyway?",
  "Hooray, madeleines!",
  "The principal wouldn't shut up.",
  "What're you doing to that girl's desk?",
  "Acting like a goody-two-shoes? What an idiot.",
  "You wanna fight?",
  "I got a warning note!",
  "Don't get ahead of yourself, dammit!",
  "She said stupid! I wonder who she's talking about.",
  "Delicious!",
  "What? Why are you mad?",
  "Huh?",
  "Is it ready yet?",
  "Huh? Isn't one of us missing?",
  "The Remarkably Unremarkable Elf, wasn't it?",
  "She ate it all by herself? Unfair!",
  "Huh? I don't think that face was on the original backdrop.",
  "In that case, fire! Boob missiles!",
  "Girls!",
  "Would anyone like cookies?",
  "The King Game!",
  "That sounds super fun!",
  "I'll get Sugiura-senpai and the others!",
  "There you are!",
  "Apparently Akari-chan and her friends are playing the King Game!",
  "Let's join them!",
  "It's decided! All right!",
  "I'm the King!",
  "The King... Truly an appropriate title for me.",
  "Now then! Number seven!",
  "What? But we have seven people.",
  "Oh, right.",
  "Starting over, then...",
  "Numbers two and three, kiss!",
  "What?",
  "What?",
  "Stop, stop!",
  "I take back my command!",
  "I'm the King! I'm changing my orders!",
  "King, punch number three!",
  "Done!",
  "Now you can find it, right?",
  "You don't know, Akari-chan? It indicates which direction is up.",
  "That's one way to draw it!",
  "Welcome!",
  "Wasn't my map perfect?",
  "Success!",
  "Yeah, I know!",
  "What's wrong with you?",
  "She's acting weird.",
  "Is she depressed about something?",
  "Is it because I took some of her lunch the other day?",
  "Because I made fun of her during the physical exam?",
  "Or...",
  "Okay!",
  "Let's play cards!",
  "What? You don't like cards?",
  "Then...",
  "How about Pop-up Pirate?",
  "What?",
  "Seriously, what's wrong with her?",
  "What's she worrying about?",
  "Yeah, it's you!",
  "No, not really...",
  "What does that mean?",
  "Are you listening? Hey!",
  "Boobs.",
  "I barely whispered it...",
  "Since she overreacted, does that mean",
  "it's her boobs that are bothering her?",
  "This happened before.",
  "Did they grow again?",
  "And when are mine going to grow, huh?",
  "What are your plans, huh?",
  "What?",
  "What?",
  "She suddenly called me stupid and then tried to cheer me up!",
  "Sheesh!",
  "I'm done!",
  "I don't feel like studying today!",
  "I can't focus in this environment.",
  "You're supposed to be helping me study,",
  "but you've been thinking about other stuff!",
  "What?",
  "Wh-What are you talking about?",
  "Are you stupid? Stupid, stupid!",
  "You're one to talk!",
  "Fine. Hurry up and help me study!",
  "Huh? She's in a good mood now...",
  "What was she worrying about, anyway?",
  "It's not...",
  "boobs, is it?",
  "Himawari, stop looking at me.",
  "No, I'm not!",
  "You self-conscious oppai majin!",
  "Finished!",
  "You're worried about your huge boobs, right?",
  "If anything, you should be grateful.",
  "Are you finished, Himawari?",
  "Those breasts are ridiculous!",
  "That's way too mean!",
  "Why, you...",
  "Give me that!",
  "It's even more conspicuous if they don't look like the real thing!",
  "Give it to me so I can fix it!",
  "Wh-What are you talking about, Azuma-sensei?",
  "Fix yours, too!",
  "This thick brush is hard to paint with...",
  "Looking good!",
  "What's wrong? Does your stomach hurt?",
  "This thing? I borrowed it.",
  "I didn't have the right brush. Thanks.",
  "You're spitting blood.",
  "Concave",
  "Who cares? It's funny.",
  "Then...",
  "How about this?",
  "Hey! You just messed up my face, didn't you?",
  "Show me!",
  "Hey!",
  "What?",
  "What exactly does that mean?",
  "That's me.",
  "What?",
  "No, no, no! What are you saying?",
  "Oh, yeah. I think I get it.",
  "Hello.",
  "I wore tights to be more like you,",
  "but they're so hot.",
  "That's why I wore tights to school!",
  "That's right!",
  "There!",
  "There.",
  "Chitose, could you get those forms?",
  "Don't mind me.",
  "What?",
  "What is it, Sugiura-senpa—",
  "Huh?",
  "Where did she go?",
  "Don't mind me.",
  "I know.",
  "I'll share some of my mental fortitude with you.",
  "Here!",
  "What did you say? Well, you're just a oppai majin!",
  "Oh, right. Um...",
  "You shouldn't use that kind of language at... at...",
  "At all xylitol!",
  "Me!",
  "I'll go!",
  "You always seem so busy,",
  "so I'll get it this time.",
  "Feel free to rest.",
  "I'm off!",
  "Toshino Kyoko... senpai.",
  "Hey.",
  "Toshino-senpai, I'm here for your form.",
  "All right!",
  "What is this?",
  "Wan wan!",
  "Wan! Wan wan!",
  "Wan wan!",
  "I have returned!",
  "I have collected her form.",
  "Well? Am I more like Sugiura-senpai now?",
  "Not quite, huh?",
  "What else can I do to be like Sugiura-senpai?",
  "I'll eat pudding!",
  "It's okay.",
  "I'll split it in half like you always do.",
  "Huh? It's empty.",
  "Aw...",
  "What should I do next?",
  "What? Really?",
  "Then I'd better keep it up, starting tomorrow!",
  "Thank you, Senpai!",
  "Um...",
  "Ponytails and tights!",
  "Also, I seemed a lot like Sugiura-senpai",
  "when I shouted Toshino Kyoko.",
  "Toshino Kyoko... senpai.",
  "I'll go get it right—",
  "Chirp, chirp.",
  "Really? All right!",
  "I'm going to wear mine at home.",
  "Don't you think a rabbit suit is too cute for you?",
  "What? Really?",
  "This doggy is cute.",
  "I want one, too,",
  "but I've already got my big sister and Hanako.",
  "What's wrong?",
  "What should we do next?",
  "We're out.",
  "Hey.",
  "Let's surprise her.",
  "Let's do something to make Akari-chan",
  "scream in surprise when she comes back.",
  "What about pretending to be dead?",
  "Then we could all hide.",
  "There's the ceiling!",
  "It'll be cool, like ninjas!",
  "But I don't know how they stick on the ceiling.",
  "She's back!",
  "Uh, um...",
  "Let's pretend time is stopped!",
  "Chinatsu-chan loses!",
  "Time for a punishment game!",
  "We wanted to surprise you, Akari-chan.",
  "You were more bewildered than surprised.",
  "Maybe I'll become her apprentice.",
  "That was shocking!",
  "Going to school from Akari-chan's place feels so strange.",
  "She's fine. She's always like this.",
  "We've got PE first period, right?",
  "We'd better hurry.",
  "What?",
  "It's PE, and I'm bored.",
  "Himawari, you're depressed because you're bad at sports.",
  "What's wrong?",
  "Even you can handle back hip circles, right?",
  "It is a little cold when we're sitting still.",
  "Okay!",
  "And one more here.",
  "It's done. Write your names wherever you want.",
  "Today's lucky color fortune.",
  "They're always right.",
  "I'll take the one left on the end.",
  "Akari-chan, we'll start with you.",
  "Tada!",
  "It's purple. Purple!",
  "Can't you guys read?",
  "Fine, then.",
  "Chinatsu-chan, you're next.",
  "Okay.",
  "Chinatsu-chan's lucky color is...",
  "Tada!",
  "What are you talking about? That's what I wrote.",
  "Himawari, it's your turn.",
  "Okay.",
  "Himawari, this is yours.",
  "Tada!",
  "That's the face you make when you make fun of me.",
  "What? Where did that come from?",
  "They're so detailed.",
  "Finally, there's my lucky color.",
  "This one must be right!",
  "Peach color!",
  "What?",
  "I didn't think I was this bad...",
  "But everyone has their strengths and weaknesses.",
  "But you're not good at sports, right?",
  "No fair!",
  "What?",
  "Sure I can.",
  "See?",
  "What?",
  "I got it wrong.",
  "Let's see...",
  "This is my final answer.",
  "What? No trick questions!",
  "No fair!",
  "I know. Learning them was really hard.",
  "This is the \"sakura\" in Sakurako, right?",
  "That's when I came up with the Omuro memorization technique!",
  "If you break it down,",
  "you get \"tree,\" \"clam,\" \"clam,\" and \"woman,\" so...",
  "I remembered it as tree-clawing lady.",
  "Scratch, scratch, scratch, scratch...",
  "Scratch!",
  "But my sister is lazy,",
  "and I have to use",
  "my allowance if I go with Hanako.",
  "The next episode is...",
  "Falls to the dark side?",
  "Well...",
  "Excuse me!",
  "I have plans with my family, so I'm leaving early.",
  "We're having okonomiyaki.",
  "Are you making fun of me?",
  "Well, excuse me.",
  "Thanks.",
  "What? You can't do back hip circles?",
  "What are you guys doing?",
  "You're excluding me?",
  "Here!",
  "Here I go!",
  "What do you think of Sakurako-chan's gorgeous back hip circle, Himawari?",
  "Were you watching?",
  "Why do you look so gloomy?",
  "Don't tell me you can't do back hip circles.",
  "I'm right, huh?",
  "It's because of those, right?",
  "You can't do it because your boobs are too heavy.",
  "Just kidding.",
  "Hey!",
  "Good for you.",
  "No way! That really hurt!",
  "There you are!",
  "Thanks for waiting!",
  "Huh? It's the upperclassmen.",
  "Hello.",
  "Sorry, Hanako. Your big sister forgot we were meeting.",
  "These are my older and younger sisters.",
  "Surprising, right?",
  "Unlike me, they're not too sharp.",
  "Toshino-senpai, your T-shirt is awesome!",
  "Really?",
  "All right!",
  "We'll be matching!",
  "They look delicious!",
  "What a great catch!",
  "Huh?",
  "What do they call it when you catch a bunch of stuff hunting in the mountains?",
  "You're always scolding me to look things up",
  "right away when I don't know something...",
  "Thanks for the food, then!",
  "What?",
  "Sure, if you really want it.",
  "Sugiura-senpai, you're such a glutton.",
  "I'll have this one, then.",
  "So good! These rabbits are delicious!",
  "We're eating live rabbits!",
  "Boing, boing.",
  "Full of energy. Boing, boing.",
  "Everyone's hero. Boing, boing.",
  "Boing, boing.",
  "I hear someone crying!",
  "What a pain in the butt.",
  "Why are you crying?",
  "No way.",
  "I'm hungry.",
  "How thoughtful.",
  "That's yummy!",
  "Yummier than usual!",
  "What's gotten into you, Himawari?",
  "Did you hit your head?",
  "Stop, stop!",
  "Stop that!",
  "Himawari, you idiot!",
  "I don't want them.",
  "I said I don't want them!",
  "Himawari, you idiot! You cookie monster!",
  "Stay away, idiot!",
  "That's not true! Just go away!",
  "Yeah, that's it. Boy, that hits the spot.",
  "I'm not, you idiot!",
  "Well, actually...",
  "And that's the dream I had.",
  "Weird, right?",
  "You were so nice to me.",
  "The real Himawari is quick to anger,",
  "makes fun of me, and isn't nice at all.",
  "And that threw me off.",
  "I'm glad you're back to your mean booby self.",
  "What? What do you mean by cutting board?",
  "Spit it out!",
  "Now you've said it!",
  "Want me to use my cutting boards to chop off those watermelons?",
  "You can give me those cookies to thank me.",
  "Also, you can help me with today's homework.",
  "Toshino-senpai, hello.",
  "It's okay.",
  "Anyway, sorry for asking you to come with me.",
  "You've got something stuck to you.",
  "Shortcut?",
  "Did you find a secret passageway?",
  "I knew you'd find one, Toshino-senpai! Show me where it is sometime!",
  "All right!",
  "Not yet. It's hard.",
  "Yeah. My little sister was jealous of my animal pajamas.",
  "She's not as smart as me, though.",
  "Yes, please!",
  "What is this?",
  "You're right. This isn't so bad.",
  "Nicknames for me? What are they?",
  "What? I'm sorry, I couldn't remember them all.",
  "There was Sakurako Daimyojin and what?",
  "You gave Himawari a nickname, too, right?",
  "Then, give me that nickname.",
  "I plan to become that way in the future.",
  "You'd just be giving me the nickname in advance.",
  "All right!",
  "What about Boob-chan?",
  "Oh, right.",
  "Maybe I'll go with the cow.",
  "No.",
  "I said no!",
  "My sister likes milk.",
  "Yes, sir!",
  "Please do.",
  "Huh? Why don't you aim for the middle?",
  "Arms?",
  "This part?",
  "You won't get me!",
  "That's not true!",
  "Over here should be fine!",
  "It tickles a little, though.",
  "We're done already?",
  "Yes, master!",
  "Why don't you aim for the middle?",
  "Wow, you have good aim.",
  "What? Already?",
  "What am I going to do if I use all my allowance?",
  "You think so?",
  "Really?",
  "You're right!",
  "I'll give it a shot.",
  "I missed.",
  "Roger.",
  "Yes!",
  "All right! I got it!",
  "I might actually be a genius to get it in two tries.",
  "All right. I know Hanako will love this.",
  "Nice idea!",
  "Yeah!",
  "Good morning.",
  "Let's start by searching her room.",
  "Quietly, so we don't wake her.",
  "Good morning.",
  "This amazing drink gets tastier the more you drink.",
  "Hey, now. You haven't got a shred of class.",
  "The next episode is...",
  "Hey, Kaede's with a strange girl!",
  "They seem to be getting along quite well.",
  "What are you talking about? They're essential!",
  "Yup.",
  "She can do it if she puts her mind to it.",
  "Even I can handle an errand!",
  "Bad news, Himawari!",
  "I chased a cat and got lost!",
  "I... I don't remember that.",
  "Some pain came flying at me!",
  "Someone's been following the girls.",
  "They could be suspicious people.",
  "We need to chase them off.",
  "I'll go!",
  "It's a suspicious person!",
  "Are you hungry?",
  "There!",
  "Chinatsu-chan!",
  "This looks delicious!",
  "We're responsible for the entertainment.",
  "We're trying to come up with ideas.",
  "Okay.",
  "Hey, how about a comedy act?",
  "Material, huh?",
  "Why don't we both think about it really hard?",
  "Why don't we call ourselves the Bright Akari?",
  "We're here!",
  "They've got nothing better to do.",
  "And I'm Mister Sakurako.",
  "Being chosen to provide entertainment was quite the conundrum.",
  "Oh, really?",
  "I forgot. Um...",
  "Oh, right. What do flower viewings make you think of?",
  "Tasty food and sake.",
  "Don't go eating those buns!",
  "Oh, right.",
  "I forgot everything after sleeping on it.",
  "What did you say?",
  "Delicious!",
  "Let's see what party supplies you brought!",
  "It'll be fine.",
  "What's it going to be?",
  "Tada!",
  "Oh, right.",
  "I made this.",
  "Sakurako's fortune teller, part two.",
  "What's done is done.",
  "District? What are you talking about?",
  "Throw a rock at this from over there.",
  "Good luck!",
  "Today your luck is so-so.",
  "With nothing particularly good happening,",
  "today your luck is quite mediocre.",
  "Chinatsu-chan, you're next.",
  "Bad luck!",
  "Now that you've got bad luck, you're finished!",
  "The world is ending! The universe is exploding!",
  "What?",
  "You shouldn't worry about the small stuff.",
  "You're next, Akari-chan.",
  "Excellent luck!",
  "Since you got excellent luck, something very fortunate will happen to you.",
  "And that something was getting excellent luck just now!",
  "Akari-chan, you've used up all your luck for the day.",
  "I'm next.",
  "I'm going get excellent luck and steal the spotlight from Akari-chan.",
  "I'm sorry...",
  "I feel like an adult now.",
  "No way!",
  "Hey, that's nice!",
  "No fair!",
  "None of them have fallen in mine!",
  "There you are!",
  "You guys all ran off somewhere.",
  "Oh, your heart was dirty?"
);

//---------- end saku quotes ----------

var sakrakFace = [];
sakrakFace.push('<:sakurako:263051993084461056>',
                '<:sakusad:337612080280633354>',
                '<:SakuMad:1026618093201530930>',
                '<:SakuWhistle:1026618094577266698>',
                '<:SakuDevilish:1026618090001289288>',
                '<:drawn_sakurako:851124260859543572>'
                );

var himaFace = [];
himaFace.push('<:himawarui:337422589540433921>',
                  '<:HimaSurprise:1026618077179301978>',
                  '<:HimaAngelic:1026618074293604492>',
                  '<:HimaEh:1026618075518341182>',
                  '<:drawn_himawari:851124260863869068>'
                );


var himaSakuNarrat = [];
himaSakuNarrat.push('...',
                    'Himawari approached Sakurako.',
                    'Sakurako approached Himawari.',
                    'Himawari blushed.',
                    'Sakurako blushed.',
                    'Then Himawari slapped Sakurako in the face.',
                    'Hima jumped up and performed a dropkick on Sakurako.',
                    'Sakurako fell.',
                    'Sakurako jumped onto the stairs',
                    'Himawari laughed.',
                    'Sakurako yelled as loudly as she could.',
                    'Himawari blinked.',
                    'Sakurako died.',
                    'Himawari looked away.',
                    'Sakurako stared at Himawari.',
                    'Himawari glared at Sakurako.'
          
                   );

// eggy rice bot creation
async function init(token) {
    const eggyRiceBot = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // Register the command
    var lastChoice = 0;
  console.log('starting up...');
    eggyRiceBot.on('ready', async () => {
        await eggyRiceBot.bulkEditCommands(
        
          
          [{
            name: 'eggyrice',
            description: 'show eggyrice quote',
            type: 1,
            options : [
              {
                name: 'id',
                description: 'got a specific eggy ricey??',
                required: false,
                type: 4
              }
            ]
        },
          {
              name: 'whomadeyou',
              description: 'who made eggyricebot?',
              type: 1
          },
          {
            name: 'gay',
            description: 'its gay tiem!! <3',
            type: 1
          },
          {
            name: 'vroomvroom',
            description: 'tokyouko drift~ ^^',
            type: 1
          },
          {
            name: 'sunflower',
            description: 'say something nice and cute to someone!! <3',
            type: 1,
            options: [
              {
                name: 'recipient',
                description: 'who is the cute person thats gonna receive this message???',
                required: true,
                type: 9
              }
            ]
          },
          {
            name: 'sakusaku',
            description: 'saku say somehting!! <3',
            type: 1,
            options : [
              {
                name: 'id',
                description: 'got a specific quote you wanna saku say??',
                required: false,
                type: 4
              }
            ]
          },
           {
            name: 'himahima',
            description: 'hima say somehting!! <3',
            type: 1,
            options : [
              {
                name: 'id',
                description: 'got a specific quote you wanna hima say??',
                required: false,
                type: 4
              }
            ]
          },
           {
            name: 'himasaku',
            description: 'himasaku storytiemm!! <3',
            type: 1,
            options : [
              {
                name: 'lines',
                description: 'number of lines for the story (default is 4)',
                required: false,
                type: 4
              },
              {
                name: 'id',
                description: 'story id for himasaku storytiem!!',
                required: false,
                type: 3
              }
 
            ]
          }
        ])
        
        console.log(`Paste the URL below into your browser to invite your bot!\nhttps://discord.com/oauth2/authorize?client_id=${eggyRiceBot.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // interaction creation event
    eggyRiceBot.on('interactionCreate', async (interaction) => {
      
      console.log(interaction.member.id);
      console.log(interaction);
      //console.log(interaction); //596381472131121165
      if (interaction.member.id === "872271286674526208" || interaction.member.id === "596381472131121165") {
        //interaction.createMessage('>>> \n <@'+interaction.member.id+'> oops!! we ran into a problem!! heres what the fancy codes say: \n\n ```diff\n- error 0030: cannot display messages for a nonvalued user [undefined]```');
        await interaction.createMessage({
          content: 'https://cdn.discordapp.com/emojis/1003400617512939560.webp?size=48&server=Astronaut%27s%20server',
          flags: 64
        })
        //return;
      }

      if (interaction.member.id === "872271286674526208" || interaction.member.id === "596381472131121165") {
        //if (buttonHit === 1) {return;}
        await interaction.createMessage({
          content: '>>> <@'+interaction.member.id+'> it looks like you\'re sending too many commands at once! please verify you\'re not a bot:',
          flags: 64,
          components: [
            {
              type: 1,
              components: [
                {
                  type: 2,
                  label: 'I\'m not a bot',
                  style: 1,
                  custom_id: "verify"
                }
              ]
            }
          ]
        }
          
        )

        //if (buttonHit === 0) {buttonHit = 1;}

        if (typeof interaction.data.component_type !== 'undefined') {
          if (interaction.data.component_type === 2 && interaction.data.custom_id === "verify" ) {
            console.log('button');
            return buttonHit = 0;
          }
        }

        await sleep(5000);
      }

      
      
      if (interaction?.data?.name === 'himasaku') {
        var hIndex = Math.floor(Math.random()*himahima.length);
        var sIndex = Math.floor(Math.random()*sakusaku.length);
        var nIndex = Math.floor(Math.random()*himaSakuNarrat.length);

        storyIterations = 4; //default to 4 lines of generated dialog or narration

        var doPlayback = false;
        if (typeof interaction.data.options !== 'undefined') {
          if (typeof interaction.data.options[0] !== 'undefined') {
            if (interaction.data.options[0].name === 'lines') {
              //check for second thing first
              if (typeof interaction.data.options[1] !== 'undefined') {
                //if there is a second thing then its the id so override whatever lines we have inputted since we're doing playback not generation
                doPlayback = true;
                playbackID = interaction.data.options[1].value;
              } else if (interaction.data.options[0].value >= 0 || interaction.data.options[0].value < 20 ) { //first thing is lines, and there is no playback id, so lets set the lines inputted and run the generator
                storyIterations = interaction.data.options[0].value;
              }
              
              
            } else { //the first input's name isnt lines we're gonna assume the first thing is the id then
              doPlayback = true;
              playbackID = interaction.data.options[0].value;
            }
          }
        }

        

        //init dialog string
        var storyString = '>>> :sunflower: :cherry_blossom: ** himasaku storytiem!! ** :cherry_blossom: :sunflower: \n\n';// +himaFace[i]+' *' + himahima[himaIndex] + '*';
        //init storyID
        var storyID = 'h';

        /*
        storyID format
        starts with h always

        next digit is either 0,1,2
              0: narration
              1: hima
              2: saku

        if 0:
            next digit is the ID of the narration quote
            followed by . to terminate the iteration (period)
        if 1:
            next digit is the ID of the hima quote
            followed by - to terminate the ID
            next digit is the ID of the hima face
            followed by . to terminate the iteration

            example: 145-3.
            1 is hima, 45 is the index of the hima quote, 3 is the hima face
        if 2: 
            next digit is the ID of the saku quote
            followed by - to terminate the ID
            next digit is the ID of the saku face
            followed by . to terminate the iteration

          finally, terminate everything with s
        */

/**/
        //if id is entered, override and play back given id
        if (doPlayback) {
         // try {
          storyID = atob(playbackID); //interaction.data.options[1].value;
          console.log('starting playback of ' + storyID);
          //first check if first letter is h to confirm valid input
            if (storyID[0] !== 'h') {
              storyString = '>>> oops!! we ran into a problem!! heres what the fancy codes say: \n\n ```diff\n- error 0039: invalid storyID```';
              interaction.createMessage(storyString);
              return;
            }
          
          storyIterations = (storyID.split('.').length)-1;
          currentIndex = 0;
          try {
            for (let k = 0; k < storyIterations; k++) {
              console.log(k +'/'+storyIterations);
              
  
              currentIndex++;
              console.log(storyID[currentIndex]);
              if (storyID[currentIndex] === 's') {
                //terminate story generator
                console.log('reached end of playback');
                continue;
              }
              //then check if starting iteration digit is 0,1,2
              if (storyID[currentIndex] === '0' || storyID[currentIndex] === '1' || storyID[currentIndex] === '2') {
                //it is 0,1,2 so append the proper thing
                console.log(storyID[currentIndex]);
                if (storyID[currentIndex] === '0') {
                  currentIndex++;
                  nIndex = storyID[currentIndex];
                  for (let l = 0; l<1; l++) {
                    if (storyID[currentIndex+1] === '.') {
                      continue;
                    } else {
                      currentIndex++;
                      nIndex = nIndex+storyID[currentIndex];
                    }
                  }
                    
                  currentIndex++;
                  
                  storyString = storyString + ' *' + himaSakuNarrat[nIndex] + '* \n\n';
                } //endStoryID == 0
  
                if (storyID[currentIndex] === '1') { //hima
                  currentIndex++;
                  hIndex = storyID[currentIndex];
                  for (let l = 0; l<4; l++) {
                    if (storyID[currentIndex+1] === '-') {
                      continue;
                    } else {
                      currentIndex++;
                      hIndex = hIndex+storyID[currentIndex];
                    }
                  }
                  currentIndex++;
                  if (storyID[currentIndex] === '-') {
                    currentIndex++;
                  } else {
                    storyString = '>>> oops!! we ran into a problem!! heres what the fancy codes say: \n\n ```diff\n- error 0039: invalid storyID```';
                    continue;
                  }
                  hFace = storyID[currentIndex];
                  currentIndex++;
                  storyString = storyString + himaFace[hFace]+' *' + himahima[hIndex] + '* \n\n';
                } //end storyID === 1
  
                if (storyID[currentIndex] === '2') {
  
                  currentIndex++;
                  sIndex = storyID[currentIndex];
                  for (let m = 0; m<4; m++) {
                    if (storyID[currentIndex+1] === '-') {
                      continue;
                    } else {
                      currentIndex++;
                      sIndex = sIndex+storyID[currentIndex];
                    }
                  }
                  currentIndex++;
                  if (storyID[currentIndex] === '-') {
                    currentIndex++;
                  } else {
                    storyString = '>>> oops!! we ran into a problem!! heres what the fancy codes say: \n\n ```diff\n- error 0039: invalid storyID```';
                    continue;
                  }
                  sFace = storyID[currentIndex];
                  currentIndex++;
                  storyString = storyString + sakrakFace[sFace]+' *' + sakusaku[sIndex] + '* \n\n';
                  
                } //endStoryID === 2
  
                if (storyID[currentIndex] !== '.') {
                  storyString = '>>> oops!! we ran into a problem!! heres what the fancy codes say: \n\n ```diff\n- error 0039: invalid storyID```';
                  continue;
                }
              } else {
                storyString = '>>> oops!! we ran into a problem!! heres what the fancy codes say: \n\n ```diff\n- error 0040: invalid storyID format (ID iteration is invalid):'+currentIndex+'```';
                return;
              }
          } //endfor
            console.log('finished compiling playback');
  
            //convert storyID to encoded value
          var aa = btoa(storyID)
          if (aa[aa.length-1] === '=') {
            aa = aa.substring(0,aa.length-1);
            if (aa[aa.length-1] === '=') {
              aa = aa.substring(0,aa.length-1);
            }
          }
            
            await interaction.createMessage(storyString + '```story id: ' +aa+'```');
            return;

        } catch (error) {
          storyString = '>>> oops!! we ran into a problem!! heres what the fancy codes say: \n\n ```diff\n- error 0039: invalid storyID```';
          interaction.createMessage(storyString);
          return;
        }

      } //end if
        

/**/
        
      console.log(storyIterations);
        if (storyIterations > 20) {storyIterations = 20;}
        if (storyIterations < 1) {storyIterations = 1;}
        for (let j = 0; j < storyIterations; j++) {
          iterationType = Math.floor(Math.random()*10); // creates an random int 0 through 9

          //if type is 0,1 then make it a narration
          if (iterationType === 0 || iterationType === 1) {
            //update random narration index
            nIndex = Math.floor(Math.random()*himaSakuNarrat.length);
            //append storyString
            storyString = storyString + ' *' + himaSakuNarrat[nIndex] + '* \n\n';
            //update storyID
            storyID = storyID+0+nIndex+'.';
          } else if (iterationType >= 2 && iterationType <= 5) { //if type is 2,3,4,5 then make it hima
            //update hima narration index
            hIndex = Math.floor(Math.random()*himahima.length);
            //update hima face index
            hFace = Math.floor(Math.random()*himaFace.length);
            //append storyString
            storyString = storyString + himaFace[hFace]+' *' + himahima[hIndex] + '* \n\n';
            //update storyID
            storyID = storyID+1+hIndex+'-'+hFace+'.';
          } else {//do saku
            //update hima narration index
            sIndex = Math.floor(Math.random()*sakusaku.length);
            //update hima face index
            sFace = Math.floor(Math.random()*sakrakFace.length);
            //append storyString
            storyString = storyString + sakrakFace[sFace]+' *' + sakusaku[sIndex] + '* \n\n';
            //update storyID
            storyID = storyID+2+sIndex+'-'+sFace+'.';
          }
        }
        
        //convert storyID to encoded value
        var aa = btoa(storyID)
        if (aa[aa.length-1] === '=') {
          aa = aa.substring(0,aa.length-1);
          if (aa[aa.length-1] === '=') {
            aa = aa.substring(0,aa.length-1);
          }
        }
        //write message
        await interaction.createMessage(storyString + '```story id: ' +aa+ '```');
      }


      
      if (interaction?.data?.name === 'himahima') {
        var himaIndex = 0;
        himaIndex = Math.floor(Math.random()*himahima.length);
        if (typeof interaction.data.options !== 'undefined') {
          if (interaction.data.options[0].value >= 0 && interaction.data.options[0].value < 758) {
            himaIndex = interaction.data.options[0].value;
          }
        }
        i = Math.floor(Math.random()*himaFace.length);
        await interaction.createMessage('>>> :sunflower: ** hima saying '+himaIndex+' ** :sunflower: \n\n '+himaFace[i]+' *' + himahima[himaIndex] + '*');
      }
      /*
      if (interaction?.data?.name === 'sunflower') {
        console.log(interaction.data.options[0].value);
        const sunflowerID = interaction.data.options[0].value;
        
        const sunflowerQuote = [];
        sunflowerQuote.push(
          `you know, <@${sunflowerID}> is soooo COOL !!!`
        );
        
        await interaction.createMessage('>>> :sunflower: ** ' + sunflowerQuote[counter] + ' **');
        counter++;
        if (counter === sunflowerQuote.length) { counter = 0;}
      }
      */

      
      if (interaction?.data?.name === 'sakusaku') {
        var sakrakIndex = 0;
        sakrakIndex = Math.floor(Math.random()*sakusaku.length);
        if (typeof interaction.data.options !== 'undefined') {
          if (interaction.data.options[0].value >= 0 && interaction.data.options[0].value < 1032) {
            sakrakIndex = interaction.data.options[0].value;
          }
        }
        i = Math.floor(Math.random()*sakrakFace.length);
        interaction.createMessage('>>> :cherry_blossom: ** saku saying '+sakrakIndex+' ** :cherry_blossom: \n\n '+sakrakFace[i]+' *' + sakusaku[sakrakIndex] + '*');
      }

      
      if (interaction?.data?.name === 'sunflower') {
        console.log(interaction.data.options[0].value);
        const sunflowerID = interaction.data.options[0].value;
        
        const sunflowerQuote = [];
        sunflowerQuote.push(
          `you know, <@${sunflowerID}> is soooo COOL !!!`,
          `<@${sunflowerID}> is just that COOL~`,
          `OMG ITS <@${sunflowerID}> QOWIEUQOWIEUQOWIEUQE <3<3<3`,
          `<@${sunflowerID}> so cool\n<@${sunflowerID}> so smart\nso <@${sunflowerID}>`,
        );
        
        await interaction.createMessage('>>> :sunflower: ** ' + sunflowerQuote[counter] + ' **');
        counter++;
        if (counter === sunflowerQuote.length) { counter = 0;}
      }
    
      
        if (interaction?.data?.name === 'vroomvroom') {
          await interaction.createMessage({
            content: 'https://cdn.discordapp.com/attachments/634492578275786752/1040735875530772570/IMG_0279.png'
          })
        }

      
        if (interaction?.data?.name === 'gay') {
          await interaction.createMessage({
            content: 'https://cdn.discordapp.com/attachments/224051664787603467/1015412520065970287/unknown.png?size=48&server=/r/yuruyuri%20Official%20Discord'
          })
        }

      
        if (interaction?.data?.name === 'whomadeyou') {
          await interaction.createMessage({
                content: '>>> **mato onee chan** programmed me in a silly language called **javascript**!! They didnt realise js was inferior to discord.py so please forgive them... <3**'
          })
        }
      
        if (interaction?.data?.name === 'eggyrice') {
          
          //url array
          const serif = [];
          serif.push('https://cdn.discordapp.com/attachments/292057291518115841/1015303838560944218/unknown.png?size=48&server=/r/yuruyuri%20Official%20Discord',
                     'https://cdn.discordapp.com/attachments/998407309019582524/1031893754078044200/unknown.png?size=48&server=Almost%20Bakkin',
                     'https://cdn.discordapp.com/attachments/998407309019582524/1031893960756559922/unknown.png?size=48&server=Almost%20Bakkin',
                     'https://cdn.discordapp.com/attachments/998407309019582524/1031893581255942245/unknown.png?size=48&server=Almost%20Bakkin',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040688267672174673/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040690648245862471/image.png',
                     'https://media.discordapp.net/attachments/1040688231559204904/1040690856635674724/image.png',
                     'https://media.discordapp.net/attachments/1040688231559204904/1040692371186266112/image.png',
                     'https://media.discordapp.net/attachments/1040688231559204904/1040692567404204163/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040692871541559396/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040696167350149280/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040696447483514880/image.png',
                     'https://media.discordapp.net/attachments/1040688231559204904/1040692567404204163/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040698532807573605/image.png',
                     'https://media.discordapp.net/attachments/1040688231559204904/1040698978523689141/image.png?width=719&height=655',
                     '>>> OMG YOU ROLLED THE SECRET SAKU COMBINATION YOURE SO COOL <3<3<3<3<3<3',
                     'https://cdn.discordapp.com/attachments/224964035974529036/1016755912343572520/unknown.png?size=48&server=/r/yuruyuri%20Official%20Discord',
                     'https://media.discordapp.net/attachments/634492578275786752/1016513190538006528/unknown.png?width=605&height=655',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040701394925146152/image.png',
                     'https://media.discordapp.net/attachments/1040688231559204904/1040701620188618862/image.png?width=1440&height=576',
                     'https://media.discordapp.net/attachments/1040688231559204904/1040702566587183214/image.png?width=659&height=655',
                     'https://media.discordapp.net/attachments/1040688231559204904/1040703305317355610/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040703968139018321/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040704415990022284/image.png',
                     'https://media.discordapp.net/attachments/1040688231559204904/1040704653433778338/image.png?width=749&height=655',
                     'https://media.discordapp.net/attachments/1040688231559204904/1040704999853928448/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040705277793677312/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040705880506761326/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040706139177893909/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040708533441810553/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040709091099684956/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040709304501678151/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040709526602645544/image.png',
                    'https://cdn.discordapp.com/attachments/1040688231559204904/1040709756584734750/image.png',
                    'https://cdn.discordapp.com/attachments/1040688231559204904/1040709919382446110/image.png',
                    'https://cdn.discordapp.com/attachments/1040688231559204904/1040710113146699806/image.png',
                    'https://cdn.discordapp.com/attachments/1040688231559204904/1040710372337909870/image.png',
                    'https://media.discordapp.net/attachments/1040688231559204904/1040711135416033301/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040711842139492509/image.png',
                     'https://media.discordapp.net/attachments/1040688231559204904/1040712143563141210/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040712484673298552/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040712968503037983/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040713271386312816/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040713400260501655/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040713940801441843/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040714219080912926/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040714663685541948/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040714874646437938/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040715016472645672/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040715310577238026/image.png',
                     'https://cdn.discordapp.com/attachments/1040688231559204904/1040715722516602910/image.png' //ch 51
                    );

          console.log('Loaded ' + serif.length + " quotes!!");
          var randChooserWoah = Math.floor(Math.random()*serif.length);
          
          if (lastChoice == randChooserWoah) {
            if (lastChoice == 0) {randChooserWoah = serif.length-1;} else {
              randChooserWoah = randChooserWoah-1;
            }
          }

          if (typeof interaction.data.options !== 'undefined') {
            if (interaction.data.options[0].value >= 0 && interaction.data.options[0].value < serif.length-1) {
              randChooserWoah = interaction.data.options[0].value;
            }
          }

          
          var lastChoice = randChooserWoah;
          console.log(randChooserWoah);

          
          await interaction.createMessage(':sunflower: **eggy rice '+ randChooserWoah+'** :sunflower:');
          interaction.createMessage(serif[randChooserWoah]);
          
          
        }
    })
    eggyRiceBot.connect();
}

const tokenFromCommand = process.argv[2]
init(tokenFromCommand);
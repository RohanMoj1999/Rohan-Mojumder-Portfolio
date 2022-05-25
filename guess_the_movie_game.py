import random

def createQuestion(question):
    temp = []
    # converting the characters to * and store in list
    for i in question:
        if i == ' ':
            temp.append(' ')
        else:
            temp.append('*')
    # converted * string
    newStr = "".join(str(x) for x in temp)
    return newStr
    

def unlockCharacter(chosenChar, question):
    temp = []
    # converting the characters to *  except the chosen character and store in list
    for i in question:
        if i in chosenChar:
            temp.append(i)
        elif i == ' ':
            temp.append(' ')
        else:
            temp.append('*')
    # converted * string
    newStr = "".join(str(x) for x in temp)
    return newStr

def player(player, movies_list):
    scorePlayer = 0

    chosenChar = []
    print("\n----------------------------\n")
    print(player, 'start guessing\n')
    # choosing an item from list randomly
    question = random.choice(movies_list)
    # creating question
    ques = createQuestion(question)
    status = True
    # starting game
    while status:
        print(ques)

        # check if player has chosen more than 1 character
        cond = True
        while cond:
            choose = input("\nChoose a character from 'a' to 'z':\n")
            count = 0
            for i in choose:
                count += 1
            if count == 1:
                cond = False
        # check if the character is in the question
        if choose in question:
            print('\nYou have chosen right answer!\n')
            chosenChar.append(choose)
            ques = unlockCharacter(chosenChar, question)
            print(ques)

            # choose what to do next (it will continue until a correct option is chosen from the list)
            opt = True
            while opt:
                try:
                    choice = int(input('\n0 to guess the answer || 1 to choose another character || 2 to quit:\n'))
                except:
                    print("\nChoose a valid option!\n")
                else:
                    if choice == 0:
                        ans = input('Your answer:')
                        if ans == question:
                            print('\nCorrect!\n')
                            scorePlayer += 1
                            print(player, ' your score is', scorePlayer)
                            status = False
                            opt = False
                        else:
                            print('\nWrong answer\n')
                            print(player, ' your score is', scorePlayer)
                            status = False
                    elif choice == 1:
                        print('\nOkay, try again!\n')
                        opt = False
                    elif choice == 2:
                        status = False
                        opt = False
                    else:
                        print("\nChoose a valid option\n")
        else:
            print("Wrong answer, try again !")
    return scorePlayer

def play(movies_list):
    
    player1 = input('Enter the name of player1:')
    player2 = input('Enter the name of player2:')
    
    print("\nWELCOME TO THE 'GUESS THE MOVIE GAME' {} and {}\n".format(player1,player2))
    
    score1 = 0
    score2 = 0
    
    cond = True
    while cond:
        if player(player1, movies_list) != 0:
            score1 += 1
        if player(player2, movies_list) != 0:
            score2+=1
        print('Want to play another game ?\n')
        try:
            choice = int(input('1 to continue and 0 to quit:'))
        except:
            print("Choose a valid option!\n")
        else:
            if choice == 0:
                  cond = False
                  print("Score of {}: {}".format(player1, score1))  
                  print("Score of {}: {}".format(player2, score2))
            else:
                print("Choose a valid option\n")

movies_list = ['war', 'drishyam', 'avengers', 'avengers endgame', 'thor', '1917', 'commando', 'harry potter deadly hallows', 'sultan', 'dhoom', 'spiderman far from home', 'avengers']

play(movies_list)
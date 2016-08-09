// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge Here!!",
        "main":    "<p>Think you're smart enough to git? Find out how much you have learned with this super crazy knowledge quiz!</p>",
        "level1":  "Professional gitter",
        "level2":  "Contender",
        "level3":  "Amateur",
        "level4":  "Newbie",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What is git?",
            "a": [
                {"option": "A scripting language",      "correct": false},
                {"option": "A distributed version control system",     "correct": true},
                {"option": "A database management system",      "correct": false},
                {"option": "A program called Generated Internet Transmissions",     "correct": false} // no comma here
            ],
            "correct": "<p><span>You are Correct!</span> You have completed the first step of git!</p>",
            "incorrect": "<p><span>Uhh no.</span> It is distributed version control system.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What would this git command do?<br> &nbsp;&nbsp;&nbsp;&nbsp;$ git init",
            "a": [
                {"option": "Create a variable called <b>'init'</b>",    "correct": false},
                {"option": "Create a repository",   "correct": true},
                {"option": "Open file called <b>'init'</b>",      "correct": false},
                {"option": "Create a text file called <b>'init'</b>", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> You are right!</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options. <br> The correct answer is Create a reppository.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is a repository?",
            "a": [
                {"option": "A website",           "correct": false},
                {"option": "An XML(extensible mark-up language) file", "correct": false},
                {"option": "A database",  "correct": false},
                {"option": "A center place where data is stored and maintained", "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You are right!</p>",
            "incorrect": "<p><span>Not Quite.</span> Your option is wrong. Repository is a center place where data is stored and maintained.</p>" // no comma here
        },
        { // Question 4
            "q": "What is the command to download a repository from github to local computer?",
            "a": [
                {"option": "git fork",    "correct": false},
                {"option": "git push",     "correct": false},
                {"option": "git commit",      "correct": false},
                {"option": "git clone",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Great!</span> You are right!</p>",
            "incorrect": "<p><span>I think you should learn more.</span> You have chosed wrong option. <br> git clone is correct answer.</p>" // no comma here
        },
        { // Question 5
            "q": "What is a shortcut to staging all the changes you have?",
            "a": [
                {"option": "git init",    "correct": false},
                {"option": "git add --all",     "correct": true}, // no comma here
                {"option": "git commit add",     "correct": false}, // no comma here
                {"option": "git push -am 'message'",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You are right!</p>",
            "incorrect": "<p><span>ERROR!</span> git add . is the right answer.</p>" // no comma here
        },
        { // Question 6
            "q": "How do you supply a commit message to a commit?",
            "a": [
                {"option": "git message 'I am coding.'",    "correct": false},
                {"option": "git add 'I am coding.'",     "correct": false}, // no comma here
                {"option": "git commit -m 'I am coding.'",     "correct": true}, // no comma here
                {"option": "git commit 'I am coding.'",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You are right!</p>",
            "incorrect": "<p><span>Nearly!!!</span> git commit -m 'I am coding.' is the right answer.</p>" // no comma here
        },
        { // Question 7
            "q": "What is the command to upload local repository to remote server?",
            "a": [
                {"option": "git pull",    "correct": false},
                {"option": "git push",     "correct": true}, // no comma here
                {"option": "git commit",     "correct": false}, // no comma here
                {"option": "git checkout",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You are right!</p>",
            "incorrect": "<p><span>Wrong!!!</span> <b>git push</b> is the right answer.</p>" // no comma here
        },
        { // Question 8
            "q": "What is the command to create new branch?",
            "a": [
                {"option": "git branch",    "correct": true},
                {"option": "git checkout",     "correct": false}, // no comma here
                {"option": "git init",     "correct": false}, // no comma here
                {"option": "git remote",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Excellent!</span> You are right!</p>",
            "incorrect": "<p><span>So Sad!!!</span> The right answer is <b>git branch</b>.</p>" // no comma here
        },
        { // Question 9
            "q": "What does git pull do?",
            "a": [
                {"option": "change the branch",    "correct": false},
                {"option": "incorporates changes from a remote repository into the local repository",     "correct": true}, // no comma here
                {"option": "it is not a git command",     "correct": false}, // no comma here
                {"option": "creates a new local repository",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You are right!</p>",
            "incorrect": "<p><span>Sorry!!!</span>The right answer is <br>&nbsp;&nbsp;&nbsp;<em>incorporates changes from a remote repository into the local repository</em></p>" // no comma here
        },
        { // Question 10
            "q": "What command must we execute before git commit?",
            "a": [
                {"option": "git push",    "correct": false},
                {"option": "git remote",     "correct": false}, // no comma here
                {"option": "git add",     "correct": true}, // no comma here
                {"option": "touch",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> You are right!</p>",
            "incorrect": "<p><span>Mistake!!!</span> <b>git add</b> is the right answer.</p>" // no comma here
        },
    ]
};

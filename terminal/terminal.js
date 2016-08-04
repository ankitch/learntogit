var term;
var unstaged = ['alu.txt'];
var staged = [];
var currentBranch = 'master';
var branches = [];
var expIndex = 0;

//initialize the terminal
function foo() {
    term = new Terminal(
        {
            x: 0,
            y: 0,
            cols: 60,
            rows: 18,
            termDiv: 'termDiv1',
            handler: termHandler
        }
    );
    term.open();
    term.focus();

    function termHandler() {
        this.newLine();
        var line = this.lineBuffer;
        var splitted = line.split(" ");
        var c = 0;  //counter to point to a word of command at a time
        if (splitted[c] == 'git'){
            c++;
            switch (splitted[c++]){
                case 'init':
                    this.write(outInit());
                    break;
                case 'status':
                    this.write(outStatus());
                    break;
                case 'add':
                    this.write(addFile(splitted[c]));
                    break;
                case 'commit':
                    if(splitted[c++] == '-m') {
                        this.write(commit(splitted[c]));
                    }
                    break;
                case 'branch':
                    createBranch(splitted[c]);
                    break;
                case 'checkout':
                    this.write(switchBranch(splitted[c]));
                    break;
                default:
                    this.write('git: \'' + splitted[c-1] + '\' is not a git command.')

            }
        } else {
            this.write(splitted[c] + ": command not found");
        }
        this.prompt();

        //check user input for success
        //if the input equals to the last expected command, fire off the success modal
        //if not then check if the input equals to current index of expected.
        //If it matches, then increment the index
        if (line.indexOf(expected) == expected.length-1) {
            $('#success-modal').openModal();
        } else if (line.indexOf(expected) == expIndex) {
            expIndex++;
        }


    }

    //adjust termwindow according to size of terminal div
    $('#termWindow').css(
        {
            'width': term.getDimensions().width + 'px',
            'visibility': 'visible'
        }
    );


}

// functions for commands

function outInit() {
    return "Initialized empty Git repository in /.git/";
}

function outStatus() {
    var output = [
        "On branch " + currentBranch, " "
    ];

    if (unstaged.length > 0) {
        var filesString = "\t\t\t\t"
        $.each(unstaged, function (key, value) {
            console.log(value);
            filesString += value + '\t\t';
        });
        output.push(
            'Untracked files:',
            '\t\t(use "git add <file>..." to include in what will be committed)',
            filesString
        );
    }

    if (staged.length > 0) {
        var addedString = "";
        output.push('Changes to be commited:');
        $.each(staged, function (key, value) {
            addedString += '\t\t\t\tnew file: ' + value + '\n';
        })
        output.push(addedString);
    }

    if (unstaged.length == 0 && staged.length == 0) {
        output.push(' ', 'nothing to commit, working directory clean');
    }

    return output;
}

function addFile(file) {
    if (file == '-A' || file == '--all') {
        staged = staged.concat(unstaged);
        unstaged = [];
    } else {
        console.log(unstaged.indexOf(file));
        if (unstaged.indexOf(file) <= -1) {
            return 'fatal: pathspec \'' + file + '\' did not match any files'
        }
        staged.push(file);
        index = unstaged.indexOf(file);
        if (index > -1) {
            unstaged.splice(index, 1);
        }
    }
    return ' ';
}

function commit(msg) {
    var output = [];
    var trimmedMsg = msg.replace(/"'/g, "");
    if (staged.length > 0) {
        output.push(
            '[' + currentBranch + '] ' + trimmedMsg,
            staged.length + ' files changed'
        );
    } else {
        outStatus();
    }
    console.log(output);
    return output;
}

function createBranch(branch) {
    branches.push(branch);
}

function switchBranch(branch) {
    console.log(branches);
    console.log(branches.indexOf(branch));
    if (branches.indexOf(branch) <= -1) {
        return 'error: pathspec \'' + branch + '\' did not match any file(s) known to git.';
    }
    currentBranch = branch;
    return 'Switched to branch ' + branch;
}

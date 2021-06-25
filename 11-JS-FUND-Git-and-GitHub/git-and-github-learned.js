// Git And GitHub
    // Version Control System

// Table of Contents
    // 1. Software Configuration Management
        // have to see the need of using it that's why search the history, the need of it
    // 2. Introduction to Git
        // (git is diff from github)
    // Software Configuration Management
        // Version Control/ Source Control System
        // Build -> Testing -> Release -> Analysis -> Design -> Implementation
            // one part of the project is ready
        // V1 - V2 - V1
        // Version Control ~ Software Configuration Management (SCM)
            // A software engineering discipline
            // Consists of techniques, practices and tools for working on shared source code and files
            // Mechanisms for management, control and tracking the changes
            // Defines the process of change management
            // Keep track of what is happening in the project
            // can return to previous version
            // solves conflicts in the changes
            // TortoiseSVN
                // put message (describing what is changed)

        // Change Log
            // Systems for version control keep their own change log (version history). It shows:
            // yours and existing code need to be working
                // who? when? why?  what had been changed?
            // old versions could be restored
        
        // Vocabulary: Repository (Repo) (place where our code is)
            // Stores the project in a remote server
            // Remote or Local
        // Vocabulary: Clone
            // download a local copy of the project
        // Vocabulary: Commit
            // saves the changes locally
            // ok, i add something, so new change, then we commit (save in our repository)
        // Vocabulary: Sync (Pull/Push)
            // everyone has own repository
            // Pull - take and merge the changes from the remote
            // Push - send local changes to the remote
            // conflict, have to merge (make both versions to work together)
        // Vocabulary: Branch (different versions / places in which you can place the code)
            // master branch (its working project, only finished projects)
            // custom-branch (on which can be something else, here we develop and test, master is staying separately)
        // Vocabulary: Merge Branches (when custom is tested by QA, when can add custom to the master)
        
        // Git
        // Distributed Source-Control Systems
        // first pull, then push (conflicts are always on your computer)
        // two types (central or distribution source control systems)
        // you make local copy of the repo
        // What is Git?
            // Git == distributed source-control system
                // The most popular in the world
                // Free, open-source software
            // Works with local and remote repositories
            // Git bash - command line interface for Git
            // https://git-scm.com

            // Using Git
                // Console-based Client
                    // git, GitBash
            // Windows GUI Client - TortoiseGit
                // https://tortoisegit.org/download/
            // GitHub Desktop Client
                // https://desktop.github.com 

            // Installing Git
                // msysGit installation on Windows
                    // Download Git for Windows: https://git-scm.com/downloads
                        // "Next, Next, Next" does the Installation
                    // Options to select (they should be selected by default)
                        // "Use Git Bash Only"
                        // "Checkout Windows-style, commit Unix-style endings"
            // GitHub gives your repository to use
            // when write 'git' in cmd
                // you can see all of the commands
                    // C:\Users\Pi\Desktop\Common-SourceControl>git --version
                    // git version 2.30.1.windows.1
                    
                    // C:\Users\Pi\Desktop\Common-SourceControl>git help clone
                        // its opening more info what clone means and how its working
                        // hidden folder .git never delete there is all the data in it
                    // git pull
                        // fetch and merge the latest changes from the remote repository
                    // git status
                        // your branch is up to date with 'origin/master'
                        // Untracked files: ...
                        // use git add to put them in
                        // git add and the file needed
                    // git add [filename] ("git add ." adds everything)
                    // git commit -m "[your message here]"

                    // Basic Commands (1)

                    // Cloning an existing Git repository
                        // git clone [remote url]
                    // Fetch and merge the latest changes from the remote repository
                        // git pull
                    // Preparing (adding / selecting) files for a commit
                        // git add [filename] ("git add ." adds everything)
                    // Committing to the local repository
                        // git commit –m "[your message here]"
                    // Check the status of your local repository (see the local changes)
                        // git status
                    // Creating a new local repository (in the current directory)
                        // git init
                    // Creating a remote (assign a short name for remote Git URL)
                        // git remote add [remote name] [remote url]
                    // Pushing to a remote (send changes to the remote repository)
                        // git push [remote name] [local name]
                // git log (shows all the moves in history)
                // shift+Z + Z moves back from log to main directory
                // git commit -am ("a" is for all, "m" for message)
                // GitHub
                    // World's Largest Source Code Host
            // small compact change, group in small packages, the commit
            // commit commit in local repository, push send these changes to remote repository
            // git fetch take the actual info from server
            // then git status
            // git fetch is like refresh
            // HEAD is your change
            // usually make one repository for one project
            // keep the best 3 projects in git hub and always update
            
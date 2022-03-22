using GameAppBLLibrary;
using System;
using System.Collections.Generic;
using WordGameLibrary;


namespace WordGameApp
{
    /// <summary>
    /// Represents a word game session of a single user,
    /// which allows them to play one or more games with different words and add words to the shared database
    /// </summary>
    class WordGame
    {
        private static Queue<Word> wordsQueue = new Queue<Word>();
        public static bool IsQueueEmpty
        {
            get => (wordsQueue.Count == 0);
        }

        private User user;
        private Word secretWord;
        private int attempts = 0;
        private bool cancelGame = false;
        private WordBL wordBL = new WordBL();

        public WordGame(User user)
        {
            this.user = user ?? throw new ArgumentNullException();
        }

        /// <summary>
        /// Play a round of word game with a single word from the word database
        /// </summary>
        public void PlayGame()
        {
            try
            {
                secretWord = GetNextWord();
            }
            catch (NoWordsException)
            {
                Console.WriteLine("Sorry, there are currently no words to guess\n");
                return;
            }

            Console.WriteLine("The word is ready. Start guessing. (Enter '0' to give up)");
            attempts = 0;
            cancelGame = false;

            bool isWin;
            do
            {
                isWin = PlayGuess();
            } while (!isWin && !cancelGame);

            if (cancelGame)
            {
                Console.WriteLine("You have cancelled the current game. The last secret word will be deleted.\n");
            }
            else if (isWin)
            {
                Console.WriteLine($"Congratulations, {user.UserName}! You have have guessed the word in {attempts} attempts. Word was added by {secretWord.author}\n");
                wordBL.DeleteWord(secretWord);
            }
        }

        /// <summary>
        /// Represents a user's 'move' in a word game
        /// </summary>
        /// <returns>true if the user guessed the word correctly</returns>
        public bool PlayGuess()
        {
            Console.Write("Enter your guess (4 letters): ");

            bool repeatInput;
            int cows = -1, bulls = -1;
            do
            {
                string guess = Console.ReadLine();
                if (guess.Trim() == "0") { this.cancelGame = true; return false; }

                try
                {
                    secretWord.CheckGuess(guess, out cows, out bulls);
                    repeatInput = false;
                }
                catch (WordLengthException wle)
                {
                    Console.WriteLine(wle.Message);
                    repeatInput = true;
                }
                if (repeatInput) Console.Write("Please try again : ");

            } while (repeatInput);

            attempts++;
            Console.WriteLine($"Cows = {cows}   Bulls = {bulls}");

            return (cows == 4);  // true if guessed whole word
        }

        /// <summary>
        /// Prompts for a word and adds it to the word database
        /// </summary>
        public void AddWord()
        {
            Console.WriteLine("Enter the 4-letter word to add to the queue. Enter empty line to cancel. ");

            string wordStr; bool repeat;
            do
            {
                repeat = false;
                wordStr = Console.ReadLine().Trim();
                if (wordStr.Length == 0) { Console.WriteLine(); return; }
                if (wordStr.Length != 4)
                {
                    Console.Write("Please try again : ");
                    repeat = true;
                }
            } while (repeat);          
            Word word = new Word(wordStr, user.UserName);
            wordBL.AddWordBL(word);
            wordsQueue.Enqueue(word);
            Console.WriteLine($"Word '{wordStr}' added\n");
        }

        /// <summary>
        /// Retrieves the next word from the database and removes it from there
        /// </summary>        
        private Word GetNextWord()
        {
            GetWordsQueue();
            try
            {
                return wordsQueue.Dequeue();
            }
            catch (InvalidOperationException)  // will catch if the queue was empty
            {
                throw new NoWordsException();
            }
        }
        public void GetWordsQueue()
        {
            wordsQueue = wordBL.CreateWordsQueue();
        }
    }

    /// <summary>
    /// The exception to indicate that the word database (queue) is empty
    /// </summary>
    public class NoWordsException : Exception
    {
        public NoWordsException() : base("No words in the queue") { }
        public NoWordsException(string message) : base(message) { }
    }
}

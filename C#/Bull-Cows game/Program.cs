// Assignment from Feb 21 - Feb 22
// Authors: Arkadii Maksymov & Anton Afonin

using GameAppBLLibrary;
using System;
using WordGameLibrary;

namespace WordGameApp
{
    class Program
    {
        UserManager userManager = new UserManager();
        WordGame game = null;

        void StartMenu()
        {
            while (true)
            {
                Console.WriteLine("Please enter a number from the menu: ");
                Console.WriteLine("1. New user account");
                Console.WriteLine("2. Sign in");
                Console.WriteLine("0. Exit");

                int choice;
                while (!int.TryParse(Console.ReadLine(), out choice))
                {
                    Console.Write("Please enter a number from the menu: ");
                }
                switch (choice)
                {
                    case 1:
                        Console.WriteLine();
                        userManager.AddNewUser();
                        break;
                    case 2:
                        Console.WriteLine();
                        TryLogin();
                        break;
                    case 0:
                        Console.WriteLine("\nGoodbye!\n");
                        return;
                    default:
                        Console.WriteLine("Incorrect choice\n");
                        break;
                }
            }
        }

        void TryLogin()
        {
            try
            {
                User user = userManager.UserLogin();
                game = new WordGame(user);
                Console.WriteLine($"You are logged in as '{user.UserName}'\n");
            }
            catch (NoUsersException)
            {
                Console.WriteLine("No registered users. You should add at least one user.\n");
                return;
            }
            catch (IncorrectPasswordException ipe)
            {
                Console.WriteLine(ipe.Message + "\n");
                return;
            }
            catch (CancelledLoginException)
            {
                Console.WriteLine();
                return;
            }
            catch (ArgumentNullException ane)
            {
                Console.WriteLine("User with such credentials is not found" + "\n");
                return;
            }
            GameMenu();
        }


        void GameMenu()
        {
            while (true)
            {
                Console.WriteLine("Please enter a number from the menu: ");
                Console.WriteLine("1. Add a word");
                Console.WriteLine("2. Start guessing the secret word");
                Console.WriteLine("0. Log out");

                int choice;
                while (!int.TryParse(Console.ReadLine(), out choice))
                {
                    Console.Write("Please enter a number from the menu: ");
                }
                switch (choice)
                {
                    case 1:
                        Console.WriteLine();
                        game.AddWord();
                        break;
                    case 2:
                        Console.WriteLine();
                        game.PlayGame();
                        break;
                    case 0:
                        Console.WriteLine("\nUser signed out.\n");
                        return;
                    default:
                        Console.WriteLine("Incorrect choice\n");
                        break;
                }
            }
        }

        static void Main(string[] args)
        {
            Program prog = new Program();
            Console.WriteLine("Welcome to the game!\n");
            prog.StartMenu();
        }
    }
}


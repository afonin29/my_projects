using GameAppBLLibrary;
using GameAppDALLibrary;
using System;
using System.Collections.Generic;
using WordGameLibrary;

namespace WordGameApp
{
    class UserManager
    {
        UserBL userBl = new UserBL();
        
        public void AddNewUser()
        {
            User user = new User();
            user.GetNameFromConsole();
            while (userBl.UserExists(user.UserName))
            {
                Console.WriteLine("User with such username is already registered. Please enter a different name.");
                user.GetNameFromConsole();

            }
            user.GetAgeFromConsole();
            userBl.Register(user);
            user.Password = user.UserName + user.Age.ToString();
            Console.WriteLine($"User '{user.UserName}' has been registered successfully.");
            Console.WriteLine($"Your password is your name and age together ({user.Password})\n");
        }


        public User UserLogin()
        {
            string name = GetLoginData();
            User uAuth;
            Console.Write("Please enter your password: ");
            string password = Console.ReadLine().Trim().ToLower();
            int age;
            bool res = int.TryParse(password.Substring(name.Length), out age);
            if (!res)
                age = 0;
            User user = new User(name, age);
            uAuth = userBl.Login(user);
            return uAuth;
        }
            
        public string GetLoginData()
        {
            Console.Write("Please enter your user name: ");
            string name = Console.ReadLine().Trim().ToLower();
            while (!userBl.UserExists(name))
            {
                Console.WriteLine("There is no user with such user name. Please try again or enter an empty line to cancel.");
                Console.Write("Please enter your user name: ");
                name = Console.ReadLine().Trim().ToLower();
                if (name.Length == 0)
                {
                    throw new CancelledLoginException();
                }
            }
            return name;
        }

    }

    public class CancelledLoginException : Exception
    {
        public CancelledLoginException() : base("Login cancelled") { }
    }
}

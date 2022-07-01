using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalUser.Domain
{
    public class User
    {
        public Guid Id { get; set; }

        /// <summary>
        /// The first name
        /// </summary>
        public string FirstName { get; set; }

        /// <summary>
        /// The last name
        /// </summary>
        public string LastName { get; set; }

        /// <summary>
        /// The social skills
        /// </summary>
        public List<string> SocialSkills { get; set; }

        /// <summary>
        /// The user accounts
        /// </summary>
        public List<Account> Accounts { get; set; }

        /// <summary>
        /// The full name of the user
        /// </summary>
        public string FullName => $"{FirstName.Trim()} {LastName.Trim()}";
    }
}

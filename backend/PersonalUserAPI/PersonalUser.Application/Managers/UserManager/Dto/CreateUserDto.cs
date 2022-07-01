using System.ComponentModel.DataAnnotations;

namespace PersonalUser.Application.Managers.UserManager.Dto
{
    public class CreateUserDto
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        public List<string> SocialSkills { get; set; }

        public List<AccountDto> Accounts { get; set; }
    }
}

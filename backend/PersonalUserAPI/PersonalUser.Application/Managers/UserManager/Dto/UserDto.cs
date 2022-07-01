namespace PersonalUser.Application.Managers.UserManager.Dto
{
    public class UserDto
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public List<string> Skills { get; set; }

        public List<AccountDto> Accounts { get; set; }
    }
}

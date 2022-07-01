using PersonalUser.Application.Managers.UserManager.Dto;
using PersonalUser.Domain;

namespace PersonalUser.Application.Managers.UserManager
{
    public static class UserMapper
    {
        public static UserDto ToDto(this User user)
        {
            return new UserDto()
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Skills = user.SocialSkills,
                Accounts = user.Accounts.Select(x => new AccountDto()
                {
                    Type = x.Type.ToString(),
                    Address = x.Address
                }).ToList(),
            };
        }

        public static User ToDomain(this CreateUserDto user)
        {
            return new User()
            {
                Id = Guid.NewGuid(),
                FirstName = user.FirstName,
                LastName = user.LastName,
                SocialSkills = user.SocialSkills,
                Accounts = user.Accounts.Select(x => new Account()
                {
                    Address = x.Address,
                    Type = Enum.Parse<AccountType>(x.Type)
                }).ToList()
            };

        }
    }
}

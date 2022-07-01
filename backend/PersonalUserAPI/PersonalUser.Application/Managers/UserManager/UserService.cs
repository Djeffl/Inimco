using PersonalUser.Application.Abstraction.Persistence;
using PersonalUser.Application.Exceptions;
using PersonalUser.Application.Managers.UserManager.Dto;
using PersonalUser.Domain;

namespace PersonalUser.Application.Managers.UserManager
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<UserDto> CreateUserAsync(CreateUserDto newUserDto)
        {
            foreach (var account in newUserDto.Accounts)
            {
                if (!Enum.TryParse<AccountType>(account.Type, true, out _))
                {
                    throw new InvalidObjectRequestException($"Account type could not be correctly parsed.");
                }
            }

            var response = await _userRepository.CreateUserAsync(newUserDto.ToDomain());

            return response.ToDto();
        }
    }
}
using PersonalUser.Application.Managers.UserManager.Dto;

namespace PersonalUser.Application.Managers.UserManager
{
    public interface IUserService
    {
        Task<UserDto> CreateUserAsync(CreateUserDto newUserDto);
    }
}

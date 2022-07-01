using PersonalUser.Domain;

namespace PersonalUser.Application.Abstraction.Persistence
{
    public interface IUserRepository
    {
        public Task<User> CreateUserAsync(User newUser);

        //public Task<User> ReadUserAsync(Guid id);
    }
}

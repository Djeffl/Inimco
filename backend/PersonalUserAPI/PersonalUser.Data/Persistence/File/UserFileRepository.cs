using Newtonsoft.Json;

using PersonalUser.Application.Abstraction.Persistence;
using PersonalUser.Domain;

namespace PersonalUser.Infrastructure.Persistence
{
    public class UserFileRepository : IUserRepository
    {
        #region Implementation of IUserRepository

        
        public async Task<User> CreateUserAsync(User newUser)
        {
            using (StreamWriter writer = new StreamWriter("test.txt", true))
            {
                await writer.WriteLineAsync(JsonConvert.SerializeObject(newUser));
            }

            return newUser;
        }

        #endregion
    }
}

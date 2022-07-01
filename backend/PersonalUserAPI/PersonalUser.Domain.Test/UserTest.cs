using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PersonalUser.Domain.Test
{
    [TestClass]
    public class UserTest
    {
        [TestMethod]
        public void FullName_NormalUser_OkResult()
        {
            var user = new User()
            {
                FirstName = "John",
                LastName = "Doe",
            };

            var fullName = "John Doe";

            Assert.IsTrue(user.FullName == fullName);
        }
    }
}
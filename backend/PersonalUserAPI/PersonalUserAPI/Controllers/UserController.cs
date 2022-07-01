using Microsoft.AspNetCore.Mvc;

using PersonalUser.Application.Exceptions;
using PersonalUser.Application.Managers.UserManager;
using PersonalUser.Application.Managers.UserManager.Dto;

namespace PersonalUser.Api.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ILogger<UserController> _logger;

        public UserController(IUserService userService, ILogger<UserController> logger)
        {
            _userService = userService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<ActionResult<UserDto>> CreateUser([FromBody] CreateUserDto userDto)
        {
            try
            {
                var response = await _userService.CreateUserAsync(userDto);

                return Ok(response);
            }
            catch (InvalidObjectRequestException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                _logger.LogError("Something went wrong while trying to creat the user.", ex);
                throw;
            }
        }
    }
}

namespace PersonalUser.Application.Exceptions
{
    public class InvalidObjectRequestException : Exception
    {
        public InvalidObjectRequestException(string message): base(message)
        {
            
        }
    }
}

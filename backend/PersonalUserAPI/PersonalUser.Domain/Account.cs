namespace PersonalUser.Domain;

public class Account
{
    /// <summary>
    /// Account Type
    /// </summary>
    public AccountType Type { get; set; }

    /// <summary>
    /// Address of the account
    /// </summary>
    public string Address { get; set; }
}
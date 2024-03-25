////////////////////////////////////////////////////////////////////////////////////// light and dark theme.
const theme = localStorage.getItem('theme');
  if (theme) {
    if (theme === 'theme-dark') {
      setTheme('theme-dark');
    } 

    if (theme === 'theme-light') {
      setTheme('theme-light');
    }
    return;
  }

  const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  if (prefersDarkTheme.matches) {
    setTheme('theme-dark');
    return;
  } 

  const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)');
  if (prefersLightTheme.matches) {
    setTheme('theme-light');
    return;
  }

  setTheme('theme-dark');

/////////////////////////////////////////////////////////////////////////////////////////// Web API comments
  /// <summary>
/// An acknowledgement (positive or negative) for a sent ticket
/// </summary>
public class AckNak
{
    /// <summary>jobid of the ticket that was sent</summary>
    public string jobid { get; set; }
    /// <summary>True if the ticket was successfully received, false otherwise</summary>
        public bool ack { get; set; }
}

/// <summary>
/// Put acknowledgements (positive or negative) for tickets received
/// </summary>
/// <param name="ackNaks">An array of AckNak objects</param>
[HttpPut]
public HttpResponseMessage Put([FromBody] AckNak[] ackNaks)
{
    return this.Request.CreateResponse(HttpStatusCode.OK);
}


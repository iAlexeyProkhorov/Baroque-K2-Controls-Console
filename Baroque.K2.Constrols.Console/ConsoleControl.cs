using SourceCode.Forms.Controls.Web.SDK;
using SourceCode.Forms.Controls.Web.SDK.Attributes;
using System;
using System.Web;
using System.Web.UI;

[assembly: WebResource("Baroque.K2.Controls.Console.Scripts.Script.js", "text/javascript", PerformSubstitution = true)]
[assembly: WebResource("Baroque.K2.Controls.Console.Content.style.css", "text/css", PerformSubstitution = true)]
[assembly: WebResource("Baroque.K2.Controls.Console.Content.Images.console-16.png", "image/png")]
[assembly: WebResource("Baroque.K2.Controls.Console.Content.Images.console-32.png", "image/png")]
[assembly: WebResource("Baroque.K2.Controls.Console.Content.Images.console-64.png", "image/png")]
namespace Baroque.K2.Controls.Console
{
    [ControlTypeDefinition("Baroque.K2.Controls.Console.Definition.xml")]
    [ClientScript("Baroque.K2.Controls.Console.Scripts.Script.js")]
    [ClientCss("Baroque.K2.Controls.Console.Content.style.css")]
    public class ConsoleControl : BaseControl
    {
        #region Constructor

        public ConsoleControl() : base("div")
        {

        }

        #endregion

        #region Utilites

        protected override void OnInit(EventArgs e)
        {
            base.Page.Response.Cache.SetCacheability(HttpCacheability.NoCache);
            base.OnInit(e);
        }

        #endregion

        #region Methods

        public override void RenderControl(HtmlTextWriter writer)
        {
            switch (State)
            {
                case SourceCode.Forms.Controls.Web.Shared.ControlState.Designtime:
                case SourceCode.Forms.Controls.Web.Shared.ControlState.Preview:
                    break;
                case SourceCode.Forms.Controls.Web.Shared.ControlState.Runtime:
                    Attributes["style"] = "display: none";
                    break;
            }


            base.RenderControl(writer);
        }

        #endregion

        #region Properties

        public bool DisplayLogTime
        {
            get { return GetOption<bool>("DisplayLogTime", false); }
            set { SetOption<bool>("DisplayLogTime", value, false); }
        }

        public string Value
        {
            get { return GetOption<string>("Value", string.Empty); }
            set { SetOption<string>("Value", value, string.Empty); }
        }

        #endregion
    }
}

using SourceCode.Forms.Controls.Web.SDK;
using SourceCode.Forms.Controls.Web.SDK.Attributes;
using System;
using System.Web;
using System.Web.UI;

[assembly: WebResource("Baroque.K2.Controls.Console.Scripts.script.js", "text/javascript", PerformSubstitution = true)]
[assembly: WebResource("Baroque.K2.Controls.Console.Content.styles.css", "text/css", PerformSubstitution = true)]
[assembly: WebResource("Baroque.K2.Controls.Console.Content.images.console-16.png", "image/png")]
[assembly: WebResource("Baroque.K2.Controls.Console.Content.images.console-32.png", "image/png")]
[assembly: WebResource("Baroque.K2.Controls.Console.Content.images.console-64.png", "image/png")]
namespace Baroque.K2.Constrols.Console
{
    [ControlTypeDefinition("Baroque.K2.Controls.Console.Definition.xml")]
    [ClientScript("Baroque.K2.Controls.Console.Scripts.script.js")]
    [ClientCss("Baroque.K2.Controls.Console.Content.styles.css")]
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

        public bool DisplayLogTime { get; set; }

        #endregion
    }
}

(function ($, window, document, undefined) {
    if (typeof BaroqueConsole === "undefined" || BaroqueConsole === null) BaroqueConsole = {};

    BaroqueConsole = {
        getControlId: function (objInfo) {
            let value = '#' + objInfo.CurrentControlId;
            return value;
        },
        getInstance: function (objInfo) {
            return $(BaroqueConsole.getControlId(objInfo));
        },
        getOptions: function (objInfo) {
            let controlId = BaroqueConsole.getControlId(objInfo);
            let options = $(controlId).data("options");
            if (options === undefined || options === null)
                options = {};
            //console.log(controlId + " options:" + JSON.stringify(options));
            return options;
        },
        execute: function (objInfo) {
            let methodName = objInfo.methodName;
            let control = BaroqueConsole.getInstance(objInfo);

            switch (methodName) {
                case 'clear':
                    console.clear();
                    break;
                case 'count':
                    let label = BaroqueConsole.getParameter(objInfo, "label");
                    console.count(label);
                    break;
                case 'error':
                    let message = BaroqueConsole.getParameter(objInfo, "message");
                    console.error(message);
                    control.trigger("OnMessageLogged");
                    break;
                case 'group':
                    let label = BaroqueConsole.getParameter(objInfo, "label");
                    console.group(label);
                    control.trigger("OnGroupingStarted");
                    break;
                case 'groupCollapsed':
                    let label = BaroqueConsole.getParameter(objInfo, "label");
                    console.groupCollapsed(label);
                    break;
                case 'groupEnd':
                    console.groupEnd();
                    control.trigger("OnGroupingEnded");
                    break;
                case 'info':
                    let message = BaroqueConsole.getParameter(objInfo, "message");
                    console.info(message);
                    control.trigger("OnMessageLogged");
                    break;
                case 'log':
                    let message = BaroqueConsole.prepareMessage(objInfo, BaroqueConsole.getParameter(objInfo, "message"));
                    console.log(message);
                    control.trigger("OnMessageLogged");
                    break;
                case 'time':
                    let label = BaroqueConsole.getParameter(objInfo, "label");
                    console.time(label);
                    control.trigger("OnTimerStart");
                    break;
                case 'timeEnd':
                    let label = BaroqueConsole.getParameter(objInfo, "label");
                    console.timeEnd(label);
                    control.trigger("OnTimerEnd");
                    break;
                case 'trace':
                    let label = BaroqueConsole.getParameter(objInfo, "label");
                    console.trace(label);
                    break;
                case 'warn':
                    let message = BaroqueConsole.getParameter(objInfo, "message");
                    console.warn(message);
                    control.trigger("OnMessageLogged");
                    break;
                default:
                    console.clear();
                    break;
            }
        },
        getProperty: function (objInfo) {
            let value = null;
            let property = objInfo.property;
            let options = BaroqueConsole.getOptions(objInfo);

            for (let name in options)
                if (name.toLowerCase() == property.toLowerCase()) {
                    value = options[name];
                    break;
                }
            return value;
        },
        setProperty: function (objInfo) {
            let controlId = BaroqueConsole.getControlId(objInfo);
            let options = BaroqueConsole.getOptions(objInfo);
            //console.log("TemporaryStrorage.setProperty:" + JSON.stringify(options));
            options[property] = value;
            $(controlId).data("options", options);
        },
        getValue: function (objInfo) {
            //console.log("getValue: " + JSON.stringify(objInfo));
            let options = BaroqueConsole.getOptions(objInfo);
            //console.log("getValue.options: " + JSON.stringify(options));
            let value = options["Value"];
            return value;
        },
        setValue: function (objInfo) {
            let controlId = BaroqueConsole.getControlId(objInfo);
            let options = BaroqueConsole.getOptions(objInfo);
            //console.log("setValue: " + JSON.stringify(objInfo));
            options["Value"] = objInfo.Value;
            $(controlId).data("options", options);
        },
        getParameter: function (objInfo, name) {
            let value = objInfo.methodParameters[name];
            return value;
        },
        prepareMessage: function (objInfo, value) {
            let options = BaroqueConsole.getOptions(objInfo);
            if (BaroqueConsole.isEmpty(options["DisplayLogTime"])) {
                return value;
            }

            let displayLogTimeValue = options["DisplayLogTime"];
            if (displayLogTimeValue == 'true') {
                let now = new Date($.now());
                value = now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds() + " || " + value;
            }
            return value;
        },
        isEmpty: function (value) {
            return value == undefined && value == null && value == "";
        }
    }

    $(document).ready(function () {
        $(document).delegate('.SFC.Baroque-K2-Controls-Console-ConsoleControl', 'OnMessageLogged.SFC.Baroque-K2-Controls-Console-ConsoleControl', function (e) {
            raiseEvent(this.id, 'Control', 'OnMessageLogged');
        });
        $(document).delegate('.SFC.Baroque-K2-Controls-Console-ConsoleControl', 'OnGroupingStarted.SFC.Baroque-K2-Controls-Console-ConsoleControl', function (e) {
            raiseEvent(this.id, 'Control', 'OnGroupingStarted');
        });
        $(document).delegate('.SFC.Baroque-K2-Controls-Console-ConsoleControl', 'OnGroupingEnded.SFC.Baroque-K2-Controls-Console-ConsoleControl', function (e) {
            raiseEvent(this.id, 'Control', 'OnGroupingEnded');
        });
        $(document).delegate('.SFC.Baroque-K2-Controls-Console-ConsoleControl', 'OnTimerStart.SFC.Baroque-K2-Controls-Console-ConsoleControl', function (e) {
            raiseEvent(this.id, 'Control', 'OnTimerStart');
        });
        $(document).delegate('.SFC.Baroque-K2-Controls-Console-ConsoleControl', 'OnTimerEnd.SFC.Baroque-K2-Controls-Console-ConsoleControl', function (e) {
            raiseEvent(this.id, 'Control', 'OnTimerEnd');
        });
    });
}(jQuery, window, document))
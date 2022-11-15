(function ($, window, document, undefined) {
    if (typeof BaroqueConsole === "undefined" || BaroqueConsole === null) BaroqueConsole = {};

    BaroqueConsole = {
        getControlId: function (objInfo) {
            var value = '#' + objInfo.CurrentControlId;

            return value;
        },
        getInstance: function (objInfo) {
            return $(BaroqueConsole.getControlId(objInfo));
        },
        getOptions: function (objInfo) {
            var controlId = BaroqueConsole.getControlId(objInfo);
            var options = $(controlId).data("options");
            //console.log(controlId + " options:" + JSON.stringify(options));
            return options;
        },
        execute: function (objInfo) {
            var methodName = objInfo.methodName;
            var control = BaroqueConsole.getInstance(objInfo);

            switch (methodName) {
                case 'clear':
                    console.clear();
                    break;
                case 'count':
                    var label = BaroqueConsole.getParameter(objInfo, "label");
                    console.count(label);
                    break;
                case 'error':
                    var message = BaroqueConsole.getParameter(objInfo, "message");
                    console.error(message);
                    control.trigger("OnMessageLogged");
                    break;
                case 'group':
                    var label = BaroqueConsole.getParameter(objInfo, "label");
                    console.group(label);
                    control.trigger("OnGroupingStarted");
                    break;
                case 'groupCollapsed':
                    var label = BaroqueConsole.getParameter(objInfo, "label");
                    console.groupCollapsed(label);
                    break;
                case 'groupEnd':
                    console.groupEnd();
                    control.trigger("OnGroupingEnded");
                    break;
                case 'info':
                    var message = BaroqueConsole.getParameter(objInfo, "message");
                    console.info(message);
                    control.trigger("OnMessageLogged");
                    break;
                case 'log':
                    var message = BaroqueConsole.getParameter(objInfo, "message");
                    console.log(message);
                    control.trigger("OnMessageLogged");
                    break;
                case 'time':
                    var label = BaroqueConsole.getParameter(objInfo, "label");
                    console.time(label);
                    control.trigger("OnTimerStart");
                    break;
                case 'timeEnd':
                    var label = BaroqueConsole.getParameter(objInfo, "label");
                    console.timeEnd(label);
                    control.trigger("OnTimerEnd");
                    break;
                case 'trace':
                    var label = BaroqueConsole.getParameter(objInfo, "label");
                    console.trace(label);
                    break;
                case 'warn':
                    var message = BaroqueConsole.getParameter(objInfo, "message");
                    console.warn(message);
                    control.trigger("OnMessageLogged");
                    break;
                default:
                    console.clear();
                    break;
            }
        },
        getProperty: function (objInfo) {
            var value = null;
            var property = objInfo.property;
            var options = BaroqueConsole.getOptions(objInfo);

            for (var name in options)
                if (name.toLowerCase() == property.toLowerCase()) {
                    value = options[name];
                    break;
                }
            return value;
        },
        setProperty: function (objInfo) {
            var controlId = BaroqueConsole.getControlId(objInfo);
            var options = BaroqueConsole.getOptions(controlId);
            //console.log("TemporaryStrorage.setProperty:" + JSON.stringify(options));
            options[property] = value;
            $(controlId).data("options", options);
        },
        getValue: function (objInfo) {
            console.log("getValue: " + JSON.stringify(objInfo));
            var id = getControlId(objInfo);
            var value = BaroqueConsole.values[id];
            return value;
        },
        setValue: function (objInfo) {
            var id = getControlId(objInfo);
            console.log("setValue: " + JSON.stringify(objInfo));
            BaroqueConsole.values[id] = objInfo.Value;
        },
        getParameter: function (objInfo, name) {
            var value = objInfo.methodParameters[name];
            return value;
        },
        values:[]
    }

    $(document).ready(function () {
        $(document).delegate('.SFC.Baroque-K2-Controls-Console-ConsoleControl', 'OnMessageLogged.SFC.Baroque-K2-Controls-Console-ConsoleControl', function (e) {
            raiseEvent(this.id, 'Control', 'OnMessageLogged');
        });
        $(document).delegate('.SFC.Baroque-K2-Controls-Console-ConsoleControl', 'OnGroupingStarted.SFC.Baroque-K2-Controls-Console-ConsoleControl', function (e) {
            raiseEvent(this.id, 'Control', 'OnGroupingStarted');
        });
        $(document).delegate('.SFC.Baroque-K2-Controls-Console-ConsoleControl', 'OnGroupingFinished.SFC.Baroque-K2-Controls-Console-ConsoleControl', function (e) {
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
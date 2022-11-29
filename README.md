# K2 Java Script Console
Hi👋!
Today I want to represent you my first public K2 custom control. It's allows you to use standard browser's console for your K2 applications debugging.

# Foreword
Once I've an expirience with Nintex K2 BPM platform and need to debug some smartforms. After few days I understand one thing: "I really hate popup message boxes for debugging".
If I need to get some value in special moment, I need to add a message box in rule or add visible data label. It's bad because:
* After debug you should make data label invisible or disable message box;
* If you forget to do previous point, everybody see's it. It's not critical, but nobody gives praise for this;
* Popup messages requires your participation (need to click something everytime);

# About
This small custom control allows you to use [Java Script standard console](https://www.w3schools.com/jsref/obj_console.asp) for debugging K2 smartforms. Control supports
almost all standard console methods except: **assert** and **table**. I will try to add them in next version. So [here](https://www.w3schools.com/jsref/obj_console.asp) you can read all about console methods.

## Supported methods:
* [Clear](https://www.w3schools.com/jsref/met_console_clear.asp);
* [Count](https://www.w3schools.com/jsref/met_console_count.asp);
* [Error](https://www.w3schools.com/jsref/met_console_error.asp);
* [Group](https://www.w3schools.com/jsref/met_console_group.asp);
* [GroupCollapsed](https://www.w3schools.com/jsref/met_console_groupcollapsed.asp);
* [GroupEnd](https://www.w3schools.com/jsref/met_console_groupend.asp);
* [Info](https://www.w3schools.com/jsref/met_console_info.asp);
* [Log](https://www.w3schools.com/jsref/met_console_log.asp);
* [Time](https://www.w3schools.com/jsref/met_console_time.asp);
* [TimeEnd](https://www.w3schools.com/jsref/met_console_timeend.asp);
* [Trace](https://www.w3schools.com/jsref/met_console_trace.asp);
* [Warn](https://www.w3schools.com/jsref/met_console_warn.asp);

# How to use?
First of all you need to install this control on K2 server, where you want to use it. 
## Installation:
* Open command prompt via admin rights;
* Put a text command:
`"{Your K2 folder path}\K2\Bin\controlutil.exe" register -assembly:"{Your K2 folder path}K2\K2 SmartForms Designer\Bin\Baroque.K2.Controls.Console.dll"`
* Run command. It should successfully install control on your K2 server. Write here if you had some issues with control registration;

KUDOS! That's all. Now you know how to register control on K2 server.

## Designer
Now you can open your K2 designer. You will see K2 reload page firstly. If you see some errors after reloading, but control was successfully registered in console - dont panic. Just try to re-upload control one more time or try to run regisetr command again. Usually this things are helps to restart K2 server successfully.
Sometimes I need to reload control 3 - 5 times to run server again😅;
Create a new view or open some your view created previously. Scroll Toolbox down and you find "Custom" controls group there and "Console" control there. Just drop it on your view and use 'Execute a control method' rule to use control methods. 


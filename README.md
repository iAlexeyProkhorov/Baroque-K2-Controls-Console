# K2 Java Script Console
Hi👋!
Today I want to represent you my first public K2 custom control. It's allows you to use standard browser's console for you K2 applications debugging.

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


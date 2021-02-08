# salarycalc

salarycalc is a simple tool to figure yearly salary from an hourly or weekly wage and vice versa. It is intended to be installed and run from the command line.

## Installation

npm -g salarycalc

### Usage

salarycalc is intended as a cli module so you would invoke it from the terminal. Make sure you install with the '-g' flag so that the command 'salarycalc' is added.
Pass the amount and the units as arguments like so 'salaryCalc (num) (unit)'
where (num) is a dollar amount and (unit) indicates whether (num) is the hourly, 'h', weekly, 'w', or yearly, 'y', salary.
Example:
If you want to know how much $30.00 an hour converts to as a yearly and weekly salary type this command:
'salarycalc 30 h' returns '$62,400.00 per anum, $1,200.00 per week'
Yearly is assumed to be in thousands so '85 y' is the same as '85000 y'
You can add an optional third argument for hours worked per week if not the standard 40 so you can calculate for part-time employment.
Example:
'salarycalc 500 w 30' returns '$16.67 per hour, $26,000.00 per anum'"

import turtle

s = turtle.Screen()
t = turtle.Turtle()
turtle.title('Snowflake')

s.bgcolor('#262626')
t.pencolor('#013a89')
t.speed(200)
col = ('#e7f7f6', '#2967b0', '#6098d1', '#a3cfe9')

for n in range(5):
    for x in range(8):
        t.speed(100)
        for i in range(2):
            t.pensize(2)
            t.circle(80+n*20,90)
            t.lt(90)
        t.lt(45)
    t.pencolor(col[n%4])
s.exitonclick()

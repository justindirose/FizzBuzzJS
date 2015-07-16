for (var counter = 1; counter <= 100; counter += 1)
{

    if (counter % 3 == 0 && counter % 5 != 0)
        document.write("Fizz ");
    else if (counter % 5 == 0 && counter % 3 != 0)
        document.write("Buzz ");
    else if (counter % 5 == 0 && counter % 3 == 0)
        document.write("FizzBuzz ");
    else
        document.write(counter + " ");

}

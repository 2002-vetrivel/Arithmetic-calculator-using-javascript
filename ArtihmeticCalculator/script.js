const calculate = () =>
{
    const input = document.getElementById("input").value;
    const pattern = /(\d+)([+\-*/%])(\d+)/;
    const matches = input.match(pattern);

    if(matches)
    {
        const num1 = parseFloat(matches[1]);
        const operator = matches[2];
        const num2 = parseFloat(matches[3]);
        let result = 0;
        let operation = " ";
        switch(operator)
        {
            case '+':
                result = num1 + num2;
                operation = "Addition";
                break;
            case '-':
                result = num1 - num2;
                operation = "Subration";
                break;
            case '*':
                result = num1 * num2;
                operation = "Mulitplication";
                break;
            case '/':
                result = num1 / num2;
                operation = "Division";
                break;
            case '%':
                result = num1 % num2;
                operation = "Mod";
                break;
            default:
                result = "Invalid Operation!";
        }
        document.getElementById('result').innerText = `${operation} of two numbers ${result}`; 
    }
    else 
    {
        document.getElementById('result').innerText = "Invalid expression!";    
    }
}